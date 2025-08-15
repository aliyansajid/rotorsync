// mobile/hooks/useMqtt.ts
import { useState, useEffect, useCallback, useRef } from "react";
import {
  mqttService,
  MqttConfig,
  MqttConnectionStatus,
  getMqttConfiguration,
} from "../services/mqttService";

export const useMqtt = () => {
  const [connectionStatus, setConnectionStatus] =
    useState<MqttConnectionStatus>(() => mqttService.getConnectionStatus());
  const [config, setConfig] = useState<MqttConfig | null>(null);
  const callbackRef =
    useRef<(status: MqttConnectionStatus) => void | undefined>(undefined);

  useEffect(() => {
    // Create a stable callback reference
    callbackRef.current = setConnectionStatus;

    // Set the status callback
    mqttService.setStatusCallback(callbackRef.current);

    // Initialize with current status
    setConnectionStatus(mqttService.getConnectionStatus());

    // Cleanup function
    return () => {
      if (callbackRef.current) {
        mqttService.removeStatusCallback(callbackRef.current);
      }
    };
  }, []);

  const loadConfig = useCallback(async () => {
    try {
      const result = await getMqttConfiguration();
      if (result.success && result.data) {
        setConfig(result.data);
        return result.data;
      } else {
        throw new Error(result.error || "Failed to load config");
      }
    } catch (error) {
      console.error("Error loading MQTT config:", error);
      throw error;
    }
  }, []);

  const connect = useCallback(async () => {
    try {
      let mqttConfig = config;

      if (!mqttConfig) {
        mqttConfig = await loadConfig();
      }

      if (mqttConfig) {
        const connected = await mqttService.connect(mqttConfig);
        return connected;
      }
      return false;
    } catch (error) {
      console.error("Error connecting to MQTT:", error);
      return false;
    }
  }, [config, loadConfig]);

  const disconnect = useCallback(async () => {
    await mqttService.disconnect();
  }, []);

  const subscribe = useCallback((topic: string) => {
    mqttService.subscribe(topic);
  }, []);

  const publish = useCallback((topic: string, message: string) => {
    mqttService.publish(topic, message);
  }, []);

  const onMessage = useCallback(
    (callback: (topic: string, message: Buffer) => void) => {
      mqttService.onMessage(callback);
    },
    []
  );

  // Method to get detailed connection info
  const getDetailedStatus = useCallback(() => {
    return mqttService.getConnectionStatus();
  }, []);

  return {
    connectionStatus,
    config,
    connect,
    disconnect,
    subscribe,
    publish,
    onMessage,
    loadConfig,
    getDetailedStatus,
    isConnected: connectionStatus.isConnected,
    isConnecting: connectionStatus.isConnecting,
    error: connectionStatus.error,
    lastConnected: connectionStatus.lastConnected,
    reconnectAttempts: connectionStatus.reconnectAttempts,
    wasConnectedBeforeBackground: connectionStatus.wasConnectedBeforeBackground,
  };
};
