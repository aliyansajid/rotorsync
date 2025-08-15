import mqtt, { MqttClient } from "mqtt";
import { AppState, AppStateStatus } from "react-native";
import { notifyMqttStatus } from "./notificationHandler";
import { backgroundTaskManager } from "./backgroundTaskManager";

const API_BASE_URL = "http://192.168.100.17:3000";

export interface MqttConfig {
  host: string;
  port: number;
  basePath: string;
  protocol: "websocket" | "tls";
  username: string;
  password?: string;
}

export interface MqttConnectionStatus {
  isConnected: boolean;
  isConnecting: boolean;
  error?: string;
  lastConnected?: string;
  reconnectAttempts?: number;
  wasConnectedBeforeBackground?: boolean;
  backgroundMode?: boolean;
  appState?: string;
  backgroundTasksRegistered?: any;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  error?: string;
}

export async function getMqttConfiguration(): Promise<ApiResponse<MqttConfig>> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/mqtt-config`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();

    if (response.ok && result.success) {
      return {
        success: true,
        data: result.data,
      };
    } else {
      return {
        success: false,
        error: result.error || "Failed to fetch MQTT configuration",
      };
    }
  } catch (error) {
    console.error("Error fetching MQTT config:", error);
    return {
      success: false,
      error: "Network error while fetching MQTT configuration",
    };
  }
}

class MqttService {
  private client: MqttClient | null = null;
  private config: MqttConfig | null = null;
  private connectionStatus: MqttConnectionStatus = {
    isConnected: false,
    isConnecting: false,
    reconnectAttempts: 0,
    wasConnectedBeforeBackground: false,
    backgroundMode: false,
  };
  private statusCallbacks: ((status: MqttConnectionStatus) => void)[] = [];
  public shouldStayConnected: boolean = false;
  private appStateSubscription: any = null;
  private currentAppState: AppStateStatus = "active";
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 10; // Increased for background mode
  private reconnectInterval: number = 5000;
  private heartbeatInterval: ReturnType<typeof setInterval> | null = null;
  private lastActiveTime: number = Date.now();
  private connectionLostInBackground: boolean = false;
  private wasConnectedBeforeBackground: boolean = false;
  private backgroundDisconnectionNotified: boolean = false;
  private backgroundModeEnabled: boolean = false;
  private reconnectTimeout: ReturnType<typeof setTimeout> | null = null;

  constructor() {
    this.initializeAppStateHandling();
    this.currentAppState = AppState.currentState;
  }

  private initializeAppStateHandling() {
    this.appStateSubscription = AppState.addEventListener(
      "change",
      this.handleAppStateChange.bind(this)
    );
  }

  private async handleAppStateChange(nextAppState: AppStateStatus) {
    console.log(
      `App state changed from ${this.currentAppState} to ${nextAppState}`
    );

    const previousAppState = this.currentAppState;
    this.currentAppState = nextAppState;

    if (nextAppState === "background") {
      // App going to background
      this.lastActiveTime = Date.now();
      this.wasConnectedBeforeBackground = this.isConnected();
      this.backgroundDisconnectionNotified = false;
      await this.handleAppGoingToBackground();
    } else if (nextAppState === "active") {
      // App coming to foreground
      await this.handleAppComingToForeground(previousAppState);
    }
  }

  private async handleAppGoingToBackground() {
    console.log("App going to background, MQTT connected:", this.isConnected());

    if (this.shouldStayConnected && this.isConnected()) {
      // Enable background mode
      this.backgroundModeEnabled = true;
      this.updateStatus({ backgroundMode: true });

      // Start background tasks for maintaining connection
      await backgroundTaskManager.startMqttBackgroundMode();

      // Start aggressive heartbeat for connection monitoring
      this.startBackgroundHeartbeat();

      console.log("Background mode enabled for MQTT");
    }
  }

  private async handleAppComingToForeground(previousAppState: AppStateStatus) {
    console.log("App coming to foreground from:", previousAppState);

    // Stop background heartbeat
    this.stopBackgroundHeartbeat();

    if (previousAppState === "background" && this.shouldStayConnected) {
      const timeInBackground = Date.now() - this.lastActiveTime;
      console.log(`App was in background for ${timeInBackground}ms`);

      // Check connection status
      const isCurrentlyConnected = this.isConnected();

      if (this.wasConnectedBeforeBackground && !isCurrentlyConnected) {
        // Connection lost while in background
        console.log("Connection lost while in background");

        if (!this.backgroundDisconnectionNotified) {
          await notifyMqttStatus(
            "disconnected",
            "Connection lost while app was in background"
          );
          this.backgroundDisconnectionNotified = true;
        }

        // Attempt immediate reconnection
        setTimeout(() => {
          this.handleForegroundReconnection();
        }, 1000);
      } else if (isCurrentlyConnected) {
        // Test connection health
        this.testConnection();
        await notifyMqttStatus(
          "connected",
          "Connection maintained in background"
        );
      }

      // Disable background mode
      this.backgroundModeEnabled = false;
      this.updateStatus({ backgroundMode: false });

      // Reset background state
      this.connectionLostInBackground = false;
      this.wasConnectedBeforeBackground = false;
    }
  }

  private startBackgroundHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
    }

    // More frequent heartbeat for background mode (every 30 seconds)
    this.heartbeatInterval = setInterval(() => {
      if (this.client && this.shouldStayConnected) {
        if (!this.client.connected && !this.connectionLostInBackground) {
          console.log("Background heartbeat: Connection lost detected");
          this.connectionLostInBackground = true;
          this.updateStatus({
            isConnected: false,
          });

          // Start aggressive reconnection in background
          this.startBackgroundReconnection();
        } else if (this.client.connected) {
          // Send heartbeat message
          try {
            this.client.publish(
              "rotorsync/heartbeat",
              JSON.stringify({
                timestamp: Date.now(),
                clientId: this.client.options.clientId,
                mode: "background",
              }),
              { qos: 0 }
            );
          } catch (error) {
            console.error("Background heartbeat failed:", error);
          }
        }
      }
    }, 30000); // Every 30 seconds
  }

  private stopBackgroundHeartbeat() {
    if (this.heartbeatInterval) {
      clearInterval(this.heartbeatInterval);
      this.heartbeatInterval = null;
    }
  }

  private async startBackgroundReconnection() {
    // Only attempt reconnection if we're still supposed to be connected
    if (!this.shouldStayConnected || this.currentAppState === "active") {
      return;
    }

    console.log("Starting background reconnection attempts");

    // Clear any existing reconnection timeout
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
    }

    // More aggressive reconnection in background
    const attemptReconnection = async () => {
      if (
        this.shouldStayConnected &&
        this.config &&
        this.currentAppState === "background"
      ) {
        console.log(
          `Background reconnection attempt ${this.reconnectAttempts + 1}`
        );

        const connected = await this.connect(this.config);

        if (connected) {
          console.log("Background reconnection successful");
          this.reconnectAttempts = 0;
          this.connectionLostInBackground = false;
        } else if (this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++;
          const delay = Math.min(
            this.reconnectInterval * Math.pow(1.5, this.reconnectAttempts - 1),
            60000
          );

          this.reconnectTimeout = setTimeout(attemptReconnection, delay);
        } else {
          console.log("Background reconnection failed after max attempts");
        }
      }
    };

    // Start first attempt after a short delay
    this.reconnectTimeout = setTimeout(attemptReconnection, 2000);
  }

  private testConnection() {
    if (this.client && this.client.connected) {
      try {
        this.client.publish(
          "rotorsync/connection-test",
          JSON.stringify({
            timestamp: Date.now(),
            clientId: this.client.options.clientId,
            testType: "foreground-test",
          }),
          { qos: 0 }
        );
        console.log("Connection test message sent");
      } catch (error) {
        console.error("Connection test failed:", error);
        this.handleForegroundReconnection();
      }
    }
  }

  private async handleForegroundReconnection() {
    console.log("Handling foreground reconnection");

    if (this.shouldStayConnected && this.config) {
      await this.reconnectWithBackoff();
    }
  }

  private async reconnectWithBackoff() {
    if (this.reconnectAttempts >= this.maxReconnectAttempts) {
      console.log("Max reconnection attempts reached");

      await notifyMqttStatus(
        "disconnected",
        `Failed to reconnect after ${this.maxReconnectAttempts} attempts`
      );

      this.updateStatus({
        isConnecting: false,
        isConnected: false,
        error: "Max reconnection attempts exceeded",
        reconnectAttempts: this.reconnectAttempts,
      });
      return;
    }

    this.reconnectAttempts++;
    const delay = Math.min(
      this.reconnectInterval * Math.pow(1.5, this.reconnectAttempts - 1),
      30000
    );

    console.log(
      `Reconnection attempt ${this.reconnectAttempts}/${this.maxReconnectAttempts} in ${delay}ms`
    );

    this.updateStatus({
      reconnectAttempts: this.reconnectAttempts,
    });

    setTimeout(async () => {
      if (this.config && this.shouldStayConnected) {
        const connected = await this.connect(this.config);
        if (connected) {
          this.reconnectAttempts = 0;
          await notifyMqttStatus(
            "connected",
            "Successfully reconnected to MQTT broker"
          );
        } else {
          await this.reconnectWithBackoff();
        }
      }
    }, delay);
  }

  setStatusCallback(callback: (status: MqttConnectionStatus) => void) {
    if (!this.statusCallbacks.includes(callback)) {
      this.statusCallbacks.push(callback);
    }
  }

  removeStatusCallback(callback: (status: MqttConnectionStatus) => void) {
    const index = this.statusCallbacks.indexOf(callback);
    if (index > -1) {
      this.statusCallbacks.splice(index, 1);
    }
  }

  private updateStatus(status: Partial<MqttConnectionStatus>) {
    this.connectionStatus = {
      ...this.connectionStatus,
      ...status,
      wasConnectedBeforeBackground: this.wasConnectedBeforeBackground,
      backgroundMode: this.backgroundModeEnabled,
      appState: this.currentAppState,
    };
    console.log("MQTT Status Updated:", this.connectionStatus);

    this.statusCallbacks.forEach((callback) => {
      try {
        callback(this.connectionStatus);
      } catch (error) {
        console.error("Error in status callback:", error);
      }
    });
  }

  async connect(config: MqttConfig): Promise<boolean> {
    if (this.client && this.client.connected) {
      await this.disconnect();
    }

    this.config = config;
    this.shouldStayConnected = true;
    this.updateStatus({ isConnecting: true, error: undefined });

    try {
      let protocol: string;

      if (config.port === 443 || config.protocol === "tls") {
        protocol = "wss";
      } else {
        protocol = "ws";
      }

      const basePath = config.basePath.startsWith("/")
        ? config.basePath
        : `/${config.basePath}`;
      const url = `${protocol}://${config.host}:${config.port}${basePath}`;

      console.log(`Connecting to MQTT broker: ${url}`);

      const options = {
        clientId: `rotorsync_app_${Date.now()}`,
        username: config.username,
        password: config.password,
        reconnectPeriod: 0, // Disable automatic reconnection
        connectTimeout: 20000, // Increased timeout
        clean: false, // Keep session across reconnects
        keepalive: 30, // More frequent keepalive for better detection
        protocolId: "MQTT" as const,
        protocolVersion: 4 as const,
        will: {
          topic: "rotorsync/client/disconnect",
          payload: JSON.stringify({
            clientId: `rotorsync_app_${Date.now()}`,
            timestamp: Date.now(),
            reason: "unexpected_disconnect",
          }),
          qos: 0 as const,
          retain: false,
        },
      };

      this.client = mqtt.connect(url, options);

      return new Promise((resolve) => {
        if (!this.client) {
          this.updateStatus({
            isConnecting: false,
            isConnected: false,
            error: "Failed to create MQTT client",
          });
          resolve(false);
          return;
        }

        const connectionTimeout = setTimeout(() => {
          if (this.client && !this.client.connected) {
            console.log("Connection timeout");
            this.updateStatus({
              isConnecting: false,
              isConnected: false,
              error: "Connection timeout",
            });
            resolve(false);
          }
        }, 25000);

        this.client.on("connect", async () => {
          clearTimeout(connectionTimeout);
          console.log("MQTT Connected successfully");
          this.reconnectAttempts = 0;
          this.connectionLostInBackground = false;

          const now = new Date().toISOString();
          this.updateStatus({
            isConnecting: false,
            isConnected: true,
            error: undefined,
            reconnectAttempts: 0,
            lastConnected: now,
          });

          // Send notification when connected (only if app is active or this is first connection)
          if (
            this.currentAppState === "active" ||
            !this.backgroundModeEnabled
          ) {
            await notifyMqttStatus("connected");
          }

          // Publish connection announcement
          if (this.client) {
            this.client.publish(
              "rotorsync/client/connect",
              JSON.stringify({
                clientId: this.client.options.clientId,
                timestamp: Date.now(),
                appState: this.currentAppState,
              }),
              { qos: 0 }
            );
          }

          resolve(true);
        });

        this.client.on("error", (error) => {
          clearTimeout(connectionTimeout);
          console.error("MQTT Error:", error);
          this.updateStatus({
            isConnecting: false,
            isConnected: false,
            error: error.message || "Connection error",
          });
          resolve(false);
        });

        this.client.on("close", async () => {
          console.log("MQTT Connection closed");
          this.updateStatus({
            isConnected: false,
          });

          // Handle disconnection based on app state
          if (this.currentAppState === "active" && this.shouldStayConnected) {
            await notifyMqttStatus("disconnected");

            // Attempt reconnection if app is active
            console.log("Connection lost - will attempt reconnect");
            setTimeout(() => {
              this.reconnectWithBackoff();
            }, 2000);
          } else if (
            this.currentAppState === "background" &&
            this.shouldStayConnected
          ) {
            // Mark that connection was lost in background
            this.connectionLostInBackground = true;

            // Start background reconnection
            this.startBackgroundReconnection();
          }
        });

        this.client.on("offline", () => {
          console.log("MQTT Client offline");
          this.updateStatus({
            isConnected: false,
          });

          if (this.currentAppState === "background") {
            this.connectionLostInBackground = true;
          }
        });

        this.client.on("disconnect", () => {
          console.log("MQTT Disconnected");
          this.updateStatus({
            isConnecting: false,
            isConnected: false,
          });
        });

        // Handle reconnect events
        this.client.on("reconnect", () => {
          console.log("MQTT attempting to reconnect...");
          this.updateStatus({
            isConnecting: true,
          });
        });
      });
    } catch (error) {
      console.error("MQTT Connection Error:", error);
      this.updateStatus({
        isConnecting: false,
        isConnected: false,
        error: error instanceof Error ? error.message : "Connection failed",
      });
      return false;
    }
  }

  async disconnect(): Promise<void> {
    console.log("Disconnecting MQTT...");

    this.shouldStayConnected = false;
    this.reconnectAttempts = 0;
    this.connectionLostInBackground = false;
    this.wasConnectedBeforeBackground = false;
    this.backgroundModeEnabled = false;

    // Clear any pending reconnection timeouts
    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }

    // Stop background heartbeat
    this.stopBackgroundHeartbeat();

    // Stop background tasks
    await backgroundTaskManager.stopMqttBackgroundMode();

    if (this.client) {
      return new Promise((resolve) => {
        if (this.client) {
          // Publish disconnection message
          if (this.client.connected) {
            this.client.publish(
              "rotorsync/client/disconnect",
              JSON.stringify({
                clientId: this.client.options.clientId,
                timestamp: Date.now(),
                reason: "user_disconnect",
              }),
              { qos: 0 }
            );
          }

          this.updateStatus({
            isConnecting: false,
            isConnected: false,
            backgroundMode: false,
          });

          this.client.end(true, {}, () => {
            console.log("MQTT Client disconnected");
            this.client = null;
            this.updateStatus({
              isConnecting: false,
              isConnected: false,
              backgroundMode: false,
            });
            resolve();
          });
        } else {
          this.updateStatus({
            isConnecting: false,
            isConnected: false,
            backgroundMode: false,
          });
          resolve();
        }
      });
    } else {
      this.updateStatus({
        isConnected: false,
        isConnecting: false,
        backgroundMode: false,
      });
    }
  }

  subscribe(topic: string): void {
    if (this.client && this.client.connected) {
      this.client.subscribe(topic, (error) => {
        if (error) {
          console.error("MQTT Subscribe Error:", error);
        } else {
          console.log(`Subscribed to topic: ${topic}`);
        }
      });
    }
  }

  publish(topic: string, message: string): void {
    if (this.client && this.client.connected) {
      this.client.publish(topic, message, (error) => {
        if (error) {
          console.error("MQTT Publish Error:", error);
        } else {
          console.log(`Published to topic: ${topic}`);
        }
      });
    }
  }

  onMessage(callback: (topic: string, message: Buffer) => void): void {
    if (this.client) {
      this.client.on("message", callback);
    }
  }

  getConnectionStatus(): MqttConnectionStatus {
    return this.connectionStatus;
  }

  isConnected(): boolean {
    return (
      (this.connectionStatus.isConnected && this.client?.connected) || false
    );
  }

  // Get detailed status including background mode info
  async getDetailedStatus() {
    try {
      const backgroundTaskStatus =
        await backgroundTaskManager.getBackgroundFetchStatus();

      return {
        ...this.connectionStatus,
        backgroundTasksRegistered: backgroundTaskStatus,
        appState: this.currentAppState,
        shouldStayConnected: this.shouldStayConnected,
      };
    } catch (error) {
      console.error("Error getting detailed status:", error);
      return {
        ...this.connectionStatus,
        appState: this.currentAppState,
        shouldStayConnected: this.shouldStayConnected,
        backgroundTasksRegistered: { error: "Failed to get status" },
      };
    }
  }

  // Cleanup method
  async cleanup() {
    this.stopBackgroundHeartbeat();

    if (this.reconnectTimeout) {
      clearTimeout(this.reconnectTimeout);
      this.reconnectTimeout = null;
    }

    if (this.appStateSubscription) {
      this.appStateSubscription?.remove();
      this.appStateSubscription = null;
    }

    await this.disconnect();
  }
}

export const mqttService = new MqttService();
