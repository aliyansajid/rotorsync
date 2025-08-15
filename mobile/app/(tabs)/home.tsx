import {
  View,
  Text,
  StatusBar,
  Alert,
  AppState,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  CloudSun,
  Droplet,
  Battery,
  Cpu,
  Compass,
  Router,
} from "lucide-react-native";
import DeviceCard from "@/components/DeviceCard";
import { useMqtt } from "@/hooks/useMqtt";

const HomeScreen = () => {
  const [devices, setDevices] = useState({
    mopeka: { isEnabled: true, isConnected: true },
    bms: { isEnabled: true, isConnected: false },
    raspberryPi: { isEnabled: false, isConnected: true },
    witMotion: { isEnabled: true, isConnected: true },
    mqtt: { isEnabled: false, isConnected: false },
  });

  const {
    connect: connectMqtt,
    disconnect: disconnectMqtt,
    isConnected: mqttConnected,
    isConnecting: mqttConnecting,
    error: mqttError,
    reconnectAttempts,
    lastConnected,
    wasConnectedBeforeBackground,
    subscribe,
    onMessage,
    publish,
    getDetailedStatus,
  } = useMqtt();

  // Update MQTT device status based on actual connection
  useEffect(() => {
    setDevices((prev) => ({
      ...prev,
      mqtt: {
        ...prev.mqtt,
        isConnected: mqttConnected,
      },
    }));
  }, [mqttConnected]);

  // Handle app state changes for MQTT
  useEffect(() => {
    const handleAppStateChange = (nextAppState: string) => {
      console.log("Home screen - App state changed to:", nextAppState);

      if (
        nextAppState === "active" &&
        devices.mqtt.isEnabled &&
        !mqttConnected
      ) {
        console.log(
          "App became active and MQTT should be connected but is not"
        );
        // The service will handle reconnection automatically
      }
    };

    const subscription = AppState.addEventListener(
      "change",
      handleAppStateChange
    );

    return () => {
      subscription?.remove();
    };
  }, [devices.mqtt.isEnabled, mqttConnected]);

  // Handle MQTT connection errors
  useEffect(() => {
    if (mqttError) {
      setDevices((prev) => ({
        ...prev,
        mqtt: {
          isEnabled: false,
          isConnected: false,
        },
      }));

      Alert.alert("MQTT Connection Error", mqttError, [
        { text: "OK", style: "default" },
        {
          text: "Retry",
          style: "default",
          onPress: () => {
            // Attempt to reconnect
            connectMqtt();
          },
        },
      ]);
    }
  }, [mqttError, connectMqtt]);

  // Set up MQTT message handling
  useEffect(() => {
    onMessage((topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);

      try {
        const data = JSON.parse(message.toString());

        // Handle device status updates
        if (topic.includes("/status")) {
          const deviceName = topic.split("/")[2];
          if (deviceName && devices.hasOwnProperty(deviceName)) {
            setDevices((prev) => ({
              ...prev,
              [deviceName]: {
                ...prev[deviceName as keyof typeof devices],
                isConnected: data.connected || false,
              },
            }));
          }
        }

        // Handle sensor data updates
        if (topic.includes("/data")) {
          console.log("Sensor data received:", data);
        }

        // Handle system messages
        if (topic.includes("/system")) {
          console.log("System message received:", data);
        }
      } catch (error) {
        console.error("Error parsing MQTT message:", error);
      }
    });
  }, [onMessage, devices]);

  // Subscribe to relevant topics when MQTT connects
  useEffect(() => {
    if (mqttConnected) {
      console.log("MQTT connected, subscribing to topics");

      // Subscribe to device status updates
      subscribe("rotorsync/devices/+/status");

      // Subscribe to sensor data
      subscribe("rotorsync/sensors/+/data");

      // Subscribe to system messages
      subscribe("rotorsync/system/+");
    }
  }, [mqttConnected, subscribe]);

  const toggleDevice = async (deviceKey: keyof typeof devices) => {
    if (deviceKey === "mqtt") {
      if (!devices.mqtt.isEnabled) {
        setDevices((prev) => ({
          ...prev,
          mqtt: {
            ...prev.mqtt,
            isEnabled: true,
          },
        }));

        // Try to connect
        const connected = await connectMqtt();

        console.log("MQTT connection attempt result:", connected);
        console.log("Detailed MQTT status:", getDetailedStatus());
      } else {
        // Disconnect
        await disconnectMqtt();
        setDevices((prev) => ({
          ...prev,
          mqtt: {
            ...prev.mqtt,
            isEnabled: false,
          },
        }));
      }
    } else {
      // For other devices, publish their status if MQTT is connected
      if (mqttConnected) {
        const newStatus = !devices[deviceKey].isEnabled;
        const command = {
          action: newStatus ? "enable" : "disable",
          timestamp: new Date().toISOString(),
          device: deviceKey,
        };

        publish(
          `rotorsync/devices/${deviceKey}/command`,
          JSON.stringify(command)
        );

        console.log(`Published command for ${deviceKey}:`, command);
      }

      setDevices((prev) => ({
        ...prev,
        [deviceKey]: {
          ...prev[deviceKey],
          isEnabled: !prev[deviceKey].isEnabled,
        },
      }));
    }
  };

  // Helper function to get connection status text
  const getConnectionStatusText = () => {
    if (mqttConnecting) return "Connecting...";
    if (mqttConnected && wasConnectedBeforeBackground)
      return "Connected (Recovered)";
    if (mqttConnected) return "Connected";
    if (mqttError) return "Error";
    if (reconnectAttempts && reconnectAttempts > 0)
      return `Reconnecting (${reconnectAttempts}/5)`;
    if (lastConnected)
      return `Last: ${new Date(lastConnected).toLocaleTimeString()}`;
    return "Disconnected";
  };

  // Helper function to get detailed status for debugging
  const getStatusInfo = () => {
    const status = getDetailedStatus();
    return {
      connected: mqttConnected,
      connecting: mqttConnecting,
      error: mqttError,
      attempts: reconnectAttempts,
      lastConnected: lastConnected
        ? new Date(lastConnected).toLocaleString()
        : "Never",
      wasConnectedBeforeBackground: wasConnectedBeforeBackground,
    };
  };

  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle={"light-content"} />

      <View className="h-1/5 bg-primary justify-center">
        <SafeAreaView className="flex-row items-center justify-between mx-6">
          <View className="flex-row items-center gap-3">
            <View className="w-16 h-16 bg-white/20 rounded-full justify-center items-center">
              <Text className="text-primary-foreground text-2xl font-semibold">
                AS
              </Text>
            </View>
            <View>
              <Text className="text-muted text-base">Welcome back,</Text>
              <Text className="text-primary-foreground text-2xl font-semibold">
                Aliyan Sajid
              </Text>
            </View>
          </View>
          <View className="items-center gap-2">
            <View className="flex-row items-center gap-2">
              <CloudSun color={"#ffffff"} />
              <Text className="text-primary-foreground text-lg font-semibold">
                22°C
              </Text>
            </View>
            <View className="flex-row gap-2">
              <Text className="text-muted">H: 29°</Text>
              <Text className="text-muted">L: 15°</Text>
            </View>
          </View>
        </SafeAreaView>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          <View className="flex-row justify-between p-6 bg-background border border-border rounded-xl">
            <View className="flex items-center gap-1">
              <Text className="text-sm text-muted-foreground">Wind Speed</Text>
              <Text className="text-foreground text-xl font-bold">40.5mPh</Text>
            </View>
            <View className="w-px bg-border" />
            <View className="flex items-center gap-1">
              <Text className="text-sm text-muted-foreground">Wind Guts</Text>
              <Text className="text-foreground text-xl font-bold">40.5mPh</Text>
            </View>
            <View className="w-px bg-border" />
            <View className="flex items-center gap-1">
              <Text className="text-sm text-muted-foreground">Direction</Text>
              <Text className="text-foreground text-xl font-bold">SE</Text>
            </View>
          </View>

          <View className="gap-4 mt-3">
            <View className="flex-row items-center justify-between">
              <Text className="text-foreground text-xl font-semibold">
                System Control
              </Text>
              <View className="items-end">
                <Text className="text-muted-foreground text-sm">
                  {Object.values(devices).filter((d) => d.isEnabled).length}/5
                  Active
                </Text>
              </View>
            </View>

            <View className="gap-3">
              <View className="flex-row gap-3">
                <DeviceCard
                  title="Mopeka"
                  icon={<Droplet color="#00BC7D" />}
                  iconBgColor="#E0FFF5"
                  cardBgColor="bg-primary-accent"
                  borderColor="border-green-300"
                  deviceKey="mopeka"
                  device={devices.mopeka}
                  onToggle={() => toggleDevice("mopeka")}
                />
                <DeviceCard
                  title="BMS"
                  icon={<Battery color="#FE9A00" />}
                  iconBgColor="#FFF3E0"
                  cardBgColor="bg-orange-accent"
                  borderColor="border-orange-300"
                  deviceKey="bms"
                  device={devices.bms}
                  onToggle={() => toggleDevice("bms")}
                />
              </View>

              <View className="flex-row gap-3">
                <DeviceCard
                  title="Raspberry Pi"
                  icon={<Cpu color="#FF2056" />}
                  iconBgColor="#FFE0E8"
                  cardBgColor="bg-pink-accent"
                  borderColor="border-red-300"
                  deviceKey="raspberryPi"
                  device={devices.raspberryPi}
                  onToggle={() => toggleDevice("raspberryPi")}
                />
                <DeviceCard
                  title="Wit Motion"
                  icon={<Compass color="#AD46FF" />}
                  iconBgColor="#F1E0FF"
                  cardBgColor="bg-purple-accent"
                  borderColor="border-purple-300"
                  deviceKey="witMotion"
                  device={devices.witMotion}
                  onToggle={() => toggleDevice("witMotion")}
                />
              </View>
              <View className="flex-row gap-3">
                <DeviceCard
                  title="MQTT Broker"
                  icon={<Router color="#1447E6" />}
                  iconBgColor="#E3E9FD"
                  cardBgColor="bg-blue-accent"
                  borderColor="border-blue-300"
                  deviceKey="mqtt"
                  device={devices.mqtt}
                  onToggle={() => toggleDevice("mqtt")}
                  isLoading={mqttConnecting}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
