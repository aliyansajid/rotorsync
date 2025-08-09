import { View, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { CloudSun, Droplet, Battery, Cpu, Compass } from "lucide-react-native";
import DeviceCard from "@/components/DeviceCard";

const HomeScreen = () => {
  const [devices, setDevices] = useState({
    mopeka: { isEnabled: true, isConnected: true },
    bms: { isEnabled: true, isConnected: false },
    raspberryPi: { isEnabled: false, isConnected: true },
    witMotion: { isEnabled: true, isConnected: true },
  });

  const toggleDevice = (deviceKey: keyof typeof devices) => {
    setDevices((prev) => ({
      ...prev,
      [deviceKey]: {
        ...prev[deviceKey],
        isEnabled: !prev[deviceKey].isEnabled,
      },
    }));
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
            <Text className="text-muted-foreground text-sm">
              {Object.values(devices).filter((d) => d.isEnabled).length}/4
              Active
            </Text>
          </View>

          <View className="gap-3">
            <View className="flex-row gap-3">
              <DeviceCard
                title="Mopeka"
                icon={<Droplet color="#00BC7D" />}
                iconBgColor="#E0FFF5"
                cardBgColor="bg-[#E0FFF5]"
                borderColor="border-green-300"
                deviceKey="mopeka"
                device={devices.mopeka}
                onToggle={() => toggleDevice("mopeka")}
              />
              <DeviceCard
                title="BMS"
                icon={<Battery color="#FE9A00" />}
                iconBgColor="#FFF3E0"
                cardBgColor="bg-[#FFF3E0]"
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
                cardBgColor="bg-[#FFE0E8]"
                borderColor="border-red-300"
                deviceKey="raspberryPi"
                device={devices.raspberryPi}
                onToggle={() => toggleDevice("raspberryPi")}
              />
              <DeviceCard
                title="Wit Motion"
                icon={<Compass color="#AD46FF" />}
                iconBgColor="#F1E0FF"
                cardBgColor="bg-[#F1E0FF]"
                borderColor="border-purple-300"
                deviceKey="witMotion"
                device={devices.witMotion}
                onToggle={() => toggleDevice("witMotion")}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
