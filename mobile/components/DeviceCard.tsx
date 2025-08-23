import React from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import {
  BluetoothConnected,
  BluetoothOff,
  BluetoothSearching,
} from "lucide-react-native";
import { router } from "expo-router";

interface Device {
  isEnabled: boolean;
  isConnected: boolean;
}

interface DeviceCardProps {
  title: string;
  icon: React.ReactNode;
  iconBgColor: string;
  cardBgColor: string;
  borderColor: string;
  deviceKey: string;
  device: Device;
  onToggle: () => void;
  isLoading?: boolean;
}

const DeviceCard = ({
  title,
  icon,
  iconBgColor,
  cardBgColor,
  borderColor,
  deviceKey,
  device,
  onToggle,
  isLoading = false,
}: DeviceCardProps) => {
  const handleCardPress = () => {
    if (deviceKey === "mopeka") {
      router.push("/mopeka-screen");
    }
    if (deviceKey === "bms") {
      router.push("/bms-screen");
    }
    if (deviceKey === "raspberryPi") {
      router.push("/raspberry-pi");
    }
    if (deviceKey === "witMotion") {
      router.push("/wit-motion");
    }
  };

  const getStatusText = () => {
    if (isLoading) return "Connecting...";
    if (device.isConnected) return "Connected";
    return "Disconnected";
  };

  const getStatusColor = () => {
    if (isLoading) return "#FE9A00"; // Orange for connecting
    if (device.isConnected) return "#00bc7d"; // Green for connected
    return "#e7000b"; // Red for disconnected
  };

  const getBluetoothIcon = () => {
    if (isLoading) {
      return <BluetoothSearching color="#FE9A00" size={20} />;
    }
    if (device.isConnected) {
      return <BluetoothConnected color="#00BC7D" size={20} />;
    }
    return <BluetoothOff color="#E7000B" size={20} />;
  };

  return (
    <TouchableOpacity onPress={handleCardPress} className="flex-1">
      <View
        className={`rounded-3xl p-4 gap-3 border ${
          device.isEnabled
            ? `${cardBgColor} ${borderColor}`
            : "bg-secondary border-border"
        }`}
      >
        <View className="flex-row items-center justify-between">
          <View
            style={{
              backgroundColor: device.isEnabled ? "#FFFFFF" : iconBgColor,
              width: 48,
              height: 48,
              borderRadius: 12,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {icon}
          </View>

          {getBluetoothIcon()}
        </View>

        <Text className="text-foreground text-lg font-semibold">{title}</Text>

        <View className="flex-row items-center justify-between">
          <Text
            className="text-sm font-medium"
            style={{ color: getStatusColor() }}
          >
            {getStatusText()}
          </Text>
          <Switch
            value={device.isEnabled}
            onValueChange={onToggle}
            trackColor={{ false: "#E5E7EB", true: "#00BC7D" }}
            thumbColor={device.isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#E5E7EB"
            disabled={isLoading}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default DeviceCard;
