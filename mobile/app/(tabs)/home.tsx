import { View, Text, StatusBar } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Cloud, CloudSun, Droplet } from "lucide-react-native";

const HomeScreen = () => {
  return (
    <View className="flex-1 bg-background">
      <StatusBar barStyle={"light-content"} />

      <View className="h-1/5 bg-primary justify-center">
        <SafeAreaView className="flex-row items-center justify-between mx-5">
          <View className="flex-row items-center gap-4">
            <View className="w-16 h-16 bg-white/20 rounded-full justify-center items-center">
              <Text className="text-primary-foreground text-2xl font-bold">
                AS
              </Text>
            </View>
            <View>
              <Text className="text-muted text-base">Welcome back,</Text>
              <Text className="text-primary-foreground text-2xl font-bold">
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

      <View className="mx-5 mt-8 gap-6">
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

        <View className="gap-3">
          <Text className="text-foreground text-lg font-bold">Devices</Text>
          <View className="flex-row gap-3">
            <View className="flex-1 p-3 rounded-xl gap-2 bg-secondary">
              <View className="w-12 h-12 bg-[#E0FFF5] p-3 rounded-lg items-center justify-center">
                <Droplet color={"#00bc7d"} />
              </View>
              <Text className="text-foreground font-medium">Mopeka</Text>
            </View>
            <View className="flex-1 p-3 rounded-xl gap-2 bg-secondary">
              <View className="w-12 h-12 bg-[#E0FFF5] p-3 rounded-lg items-center justify-center">
                <Droplet color={"#00bc7d"} />
              </View>
              <Text className="text-foreground font-medium">Mopeka</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default HomeScreen;
