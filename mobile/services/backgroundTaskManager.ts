import * as TaskManager from "expo-task-manager";
import * as BackgroundFetch from "expo-background-fetch";
import { mqttService } from "./mqttService";
import {
  notifyMqttStatus,
  showBackgroundServiceNotification,
  removeBackgroundServiceNotification,
} from "./notificationHandler";

const BACKGROUND_FETCH_TASK = "background-mqtt-task";
const MQTT_HEARTBEAT_TASK = "mqtt-heartbeat-task";

// Define the background fetch task
TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
  try {
    console.log("Background fetch task executed");

    // Check if MQTT should be connected
    if (mqttService.shouldStayConnected) {
      const isConnected = mqttService.isConnected();

      if (!isConnected) {
        console.log("MQTT disconnected in background, attempting to reconnect");

        // Get the last known config and try to reconnect
        const status = mqttService.getConnectionStatus();

        // Only show notification if this is a genuine disconnection
        if (status.lastConnected) {
          await notifyMqttStatus(
            "reconnecting",
            "Reconnecting in background..."
          );
        }

        // This will be handled by the service's internal reconnection logic
        // We just log the attempt here
      } else {
        console.log("MQTT still connected in background");
      }
    }

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error("Background fetch error:", error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

// Define a more frequent heartbeat task for maintaining connection
TaskManager.defineTask(MQTT_HEARTBEAT_TASK, async () => {
  try {
    if (mqttService.shouldStayConnected) {
      const isConnected = mqttService.isConnected();

      if (!isConnected) {
        console.log(
          "Heartbeat: MQTT disconnected, service will handle reconnection"
        );
      } else {
        // Send a lightweight heartbeat message
        try {
          mqttService.publish(
            "rotorsync/heartbeat",
            JSON.stringify({
              timestamp: Date.now(),
              type: "background-heartbeat",
            })
          );
        } catch (error) {
          console.error("Heartbeat publish failed:", error);
        }
      }
    }

    return BackgroundFetch.BackgroundFetchResult.NewData;
  } catch (error) {
    console.error("Heartbeat task error:", error);
    return BackgroundFetch.BackgroundFetchResult.Failed;
  }
});

export class BackgroundTaskManager {
  private static instance: BackgroundTaskManager;
  private isRegistered = false;
  private heartbeatRegistered = false;

  public static getInstance(): BackgroundTaskManager {
    if (!BackgroundTaskManager.instance) {
      BackgroundTaskManager.instance = new BackgroundTaskManager();
    }
    return BackgroundTaskManager.instance;
  }

  async registerBackgroundTasks() {
    try {
      // Register main background fetch task
      if (!this.isRegistered) {
        const status = await BackgroundFetch.getStatusAsync();

        if (status === BackgroundFetch.BackgroundFetchStatus.Available) {
          await BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
            minimumInterval: 15 * 1000, // 15 seconds minimum
            stopOnTerminate: false,
            startOnBoot: true,
          });

          console.log("Background fetch task registered");
          this.isRegistered = true;
        } else {
          console.log("Background fetch not available:", status);
        }
      }

      // Show persistent notification for background service
      await showBackgroundServiceNotification();
    } catch (error) {
      console.error("Failed to register background tasks:", error);
    }
  }

  async unregisterBackgroundTasks() {
    try {
      if (this.isRegistered) {
        await BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
        this.isRegistered = false;
        console.log("Background fetch task unregistered");
      }

      if (this.heartbeatRegistered) {
        await TaskManager.unregisterTaskAsync(MQTT_HEARTBEAT_TASK);
        this.heartbeatRegistered = false;
        console.log("Heartbeat task unregistered");
      }

      // Remove persistent notification
      await removeBackgroundServiceNotification();
    } catch (error) {
      console.error("Failed to unregister background tasks:", error);
    }
  }

  async startMqttBackgroundMode() {
    await this.registerBackgroundTasks();
    console.log("MQTT background mode started");
  }

  async stopMqttBackgroundMode() {
    await this.unregisterBackgroundTasks();
    console.log("MQTT background mode stopped");
  }

  async getBackgroundFetchStatus() {
    try {
      const status = await BackgroundFetch.getStatusAsync();
      const isRegistered = await TaskManager.isTaskRegisteredAsync(
        BACKGROUND_FETCH_TASK
      );

      return {
        available: status === BackgroundFetch.BackgroundFetchStatus.Available,
        registered: isRegistered,
        status: status,
      };
    } catch (error) {
      console.error("Error getting background fetch status:", error);
      return {
        available: false,
        registered: false,
        status: "unknown",
      };
    }
  }
}

export const backgroundTaskManager = BackgroundTaskManager.getInstance();
