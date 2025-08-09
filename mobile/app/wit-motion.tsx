import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Compass } from "lucide-react-native";
import { router } from "expo-router";
import DataCard from "@/components/DataCard";

interface WitMotionData {
  deviceName: string;
  isConnected: boolean;
  accX: number;
  accY: number;
  accZ: number;
  gyroX: number;
  gyroY: number;
  gyroZ: number;
  angleX: number;
  angleY: number;
  angleZ: number;
  magX: number;
  magY: number;
  magZ: number;
  quat0: number;
  quat1: number;
  quat2: number;
  quat3: number;
}

const WitMotionScreen = () => {
  // Sample data
  const witMotionData: WitMotionData = {
    deviceName: "WitMotion WT901C",
    isConnected: true,
    accX: 0.12,
    accY: -0.05,
    accZ: 9.78,
    gyroX: 0.03,
    gyroY: -0.01,
    gyroZ: 0.02,
    angleX: 1.2,
    angleY: -0.6,
    angleZ: 45.8,
    magX: 23.4,
    magY: -12.7,
    magZ: 156.9,
    quat0: 0.9239,
    quat1: 0.0105,
    quat2: -0.0052,
    quat3: 0.3826,
  };

  const handleBack = (): void => {
    router.back();
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background px-6 py-4 border-b border-border flex-row items-center justify-between">
        <TouchableOpacity
          onPress={handleBack}
          className="flex-row items-center gap-2"
        >
          <ChevronLeft color="#737373" />
          <Text className="text-foreground text-2xl font-medium">
            WitMotion
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-2">
          <View
            className={`w-2 h-2 rounded-full ${witMotionData.isConnected ? "bg-primary" : "bg-destructive"}`}
          />
          <Text
            className={`text-sm font-medium ${witMotionData.isConnected ? "text-primary" : "text-destructive"}`}
          >
            {witMotionData.isConnected ? "Connected" : "Disconnected"}
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          <View className="bg-secondary rounded-xl p-6">
            <View className="flex-row items-center gap-3">
              <View className="bg-purple-accent border border-purple-300 w-12 h-12 rounded-xl items-center justify-center">
                <Compass color="#AD46FF" />
              </View>
              <Text className="text-foreground text-xl font-semibold">
                {witMotionData.deviceName}
              </Text>
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Accelerometer
            </Text>
            <View className="flex-row gap-3">
              <DataCard
                title="Acc X"
                value={witMotionData.accX}
                unit="m/s²"
                dotColor="#1447E6"
              />
              <DataCard
                title="Acc Y"
                value={witMotionData.accY}
                unit="m/s²"
                dotColor="#1447E6"
              />
            </View>
            <View className="flex-row">
              <View className="flex-1 mr-3">
                <DataCard
                  title="Acc Z"
                  value={witMotionData.accZ}
                  unit="m/s²"
                  dotColor="#1447E6"
                />
              </View>
              <View className="flex-1" />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Gyroscope
            </Text>
            <View className="flex-row gap-3">
              <DataCard
                title="Gyro X"
                value={witMotionData.gyroX}
                unit="rad/s"
                dotColor="#00bc7d"
              />
              <DataCard
                title="Gyro Y"
                value={witMotionData.gyroY}
                unit="rad/s"
                dotColor="#00bc7d"
              />
            </View>
            <View className="flex-row">
              <View className="flex-1 mr-3">
                <DataCard
                  title="Gyro Z"
                  value={witMotionData.gyroZ}
                  unit="rad/s"
                  dotColor="#00bc7d"
                />
              </View>
              <View className="flex-1" />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">Angle</Text>
            <View className="flex-row gap-3">
              <DataCard
                title="Angle X"
                value={witMotionData.angleX}
                unit="degrees"
                dotColor="#FE9A00"
              />
              <DataCard
                title="Angle Y"
                value={witMotionData.angleY}
                unit="degrees"
                dotColor="#FE9A00"
              />
            </View>
            <View className="flex-row">
              <View className="flex-1 mr-3">
                <DataCard
                  title="Angle Z"
                  value={witMotionData.angleZ}
                  unit="degrees"
                  dotColor="#FE9A00"
                />
              </View>
              <View className="flex-1" />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Magnetometer
            </Text>
            <View className="flex-row gap-3">
              <DataCard
                title="Mag X"
                value={witMotionData.magX}
                unit="μT"
                dotColor="#E7000B"
              />
              <DataCard
                title="Mag Y"
                value={witMotionData.magY}
                unit="μT"
                dotColor="#E7000B"
              />
            </View>
            <View className="flex-row">
              <View className="flex-1 mr-3">
                <DataCard
                  title="Mag Z"
                  value={witMotionData.magZ}
                  unit="μT"
                  dotColor="#E7000B"
                />
              </View>
              <View className="flex-1" />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Quaternion
            </Text>
            <View className="flex-row gap-3">
              <DataCard
                title="Quat 0"
                value={witMotionData.quat0}
                unit="unit"
                dotColor="#AD46FF"
              />
              <DataCard
                title="Quat 1"
                value={witMotionData.quat1}
                unit="unit"
                dotColor="#AD46FF"
              />
            </View>
            <View className="flex-row gap-3">
              <DataCard
                title="Quat 2"
                value={witMotionData.quat2}
                unit="unit"
                dotColor="#AD46FF"
              />
              <DataCard
                title="Quat 3"
                value={witMotionData.quat3}
                unit="unit"
                dotColor="#AD46FF"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WitMotionScreen;
