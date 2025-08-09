import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeft,
  Droplets,
  Navigation,
  Signal,
  Thermometer,
  Ruler,
  Move3D,
  Battery,
  Zap,
  TrendingUp,
  Wifi,
  Settings,
} from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";
import { useState } from "react";
import Badge from "@/components/Badge";
import DataCard from "@/components/DataCard";

interface MopekaData {
  id: string;
  deviceName: string;
  isConnected: boolean;
  tankLevel: number; // percentage
  gallons: number;
  maxGallons: number;
  rssi: number; // signal strength
  lastUpdate: string;
  accelerometer: { x: number; y: number };
  readingQuality: number; // percentage
  temperature: number; // °C
  tankLevelCompensated: { mm: number; in: number };
  tankLevelNonCompensated: { mm: number; in: number };
  tankLevelRaw: number;
  angle: number; // degrees
  battery: { percentage: number; voltage: number };
}

const MopekaScreen = () => {
  const [selectedSensor, setSelectedSensor] = useState<string | null>(null);

  // Sample Mopeka sensors data
  const mopekaSensors: MopekaData[] = [
    {
      id: "sensor1",
      deviceName: "Propane Tank - Main",
      isConnected: true,
      tankLevel: 65,
      gallons: 13.2,
      maxGallons: 20.3,
      rssi: -68,
      lastUpdate: "2 mins ago",
      accelerometer: { x: 0.02, y: -0.15 },
      readingQuality: 89,
      temperature: 22.4,
      tankLevelCompensated: { mm: 234, in: 9.2 },
      tankLevelNonCompensated: { mm: 229, in: 9.0 },
      tankLevelRaw: 2.847,
      angle: 1.2,
      battery: { percentage: 78, voltage: 3.2 },
    },
    {
      id: "sensor2",
      deviceName: "Fresh Water Tank",
      isConnected: true,
      tankLevel: 45,
      gallons: 18.5,
      maxGallons: 41.0,
      rssi: -72,
      lastUpdate: "5 mins ago",
      accelerometer: { x: -0.01, y: 0.08 },
      readingQuality: 85,
      temperature: 21.8,
      tankLevelCompensated: { mm: 178, in: 7.0 },
      tankLevelNonCompensated: { mm: 175, in: 6.9 },
      tankLevelRaw: 1.942,
      angle: -0.8,
      battery: { percentage: 65, voltage: 3.1 },
    },
  ];

  const handleBack = (): void => {
    if (selectedSensor) {
      setSelectedSensor(null);
    } else {
      router.back();
    }
  };

  const handleSensorSelect = (sensorId: string) => {
    setSelectedSensor(sensorId);
  };

  const handleCalibration = (sensorId: string) => {
    // Navigate to calibration screen for specific sensor
    router.push(`/calibration-screen?sensorId=${sensorId}`);
  };

  const getRSSIColor = (rssi: number) => {
    if (rssi >= -60) return "#00bc7d"; // Green - Excellent
    if (rssi >= -70) return "#FE9A00"; // Orange - Good
    return "#E7000B"; // Red - Poor
  };

  const getRSSIBars = (rssi: number) => {
    if (rssi >= -60) return 4;
    if (rssi >= -70) return 3;
    if (rssi >= -80) return 2;
    return 1;
  };

  const SensorCard = ({ sensor }: { sensor: MopekaData }) => {
    const percentage = (sensor.gallons / sensor.maxGallons) * 100;
    const rssiColor = getRSSIColor(sensor.rssi);

    return (
      <TouchableOpacity
        onPress={() => handleSensorSelect(sensor.id)}
        className="bg-secondary rounded-xl p-4 gap-4"
      >
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-3">
            <View className="bg-primary-accent border border-green-300 w-12 h-12 rounded-xl items-center justify-center">
              <Droplets color="#00bc7d" />
            </View>
            <View>
              <Text className="text-foreground text-lg font-semibold">
                {sensor.deviceName}
              </Text>
              <View className="flex-row items-center gap-2">
                <View
                  className={`w-2 h-2 rounded-full ${
                    sensor.isConnected ? "bg-primary" : "bg-destructive"
                  }`}
                />
                <Text className="text-muted-foreground text-sm">
                  {sensor.isConnected ? "Connected" : "Disconnected"}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-end">
          <View className="flex-1">
            <Text className="text-muted-foreground text-sm">Tank Level</Text>
            <Text className="text-foreground text-2xl font-bold">
              {sensor.gallons.toFixed(1)} gal
            </Text>
          </View>

          <View className="items-end gap-2">
            <View className="flex-row items-center gap-1">
              <Wifi color={rssiColor} size={16} />
              <Text className="text-muted-foreground text-sm">
                {sensor.rssi} dBm
              </Text>
            </View>
            <Text className="text-muted-foreground text-xs">
              {sensor.lastUpdate}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const Speedometer = ({
    gallons,
    maxGallons,
  }: {
    gallons: number;
    maxGallons: number;
  }) => {
    const percentage = (gallons / maxGallons) * 100;
    const size = 200;
    const strokeWidth = 12;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    const getColor = (percent: number) => {
      if (percent >= 60) return "#00bc7d";
      if (percent >= 30) return "#FE9A00";
      return "#E7000B";
    };

    return (
      <View className="bg-secondary rounded-xl p-6 items-center gap-3">
        <Text className="text-foreground text-xl font-semibold">
          Tank Level
        </Text>

        <View style={{ position: "relative" }}>
          <Svg width={size} height={size / 2 + 20}>
            <Path
              d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${
                size - strokeWidth / 2
              } ${size / 2}`}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />

            <Path
              d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${
                size - strokeWidth / 2
              } ${size / 2}`}
              stroke={getColor(percentage)}
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
            />
          </Svg>

          <View
            style={{
              position: "absolute",
              top: 60,
              left: 0,
              right: 0,
              alignItems: "center",
            }}
          >
            <Text className="text-foreground text-4xl font-bold">
              {gallons.toFixed(1)}
            </Text>
            <Text className="text-muted-foreground text-sm">
              gallons / {maxGallons.toFixed(1)}
            </Text>
          </View>
        </View>

        <Badge
          text={`${Math.round(percentage)}% full`}
          icon={<Droplets color="#00bc7d" size={16} />}
        />
      </View>
    );
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 80) return "#00bc7d";
    if (quality >= 60) return "#FE9A00";
    return "#E7000B";
  };

  const getBatteryColor = (percentage: number) => {
    if (percentage >= 50) return "#00bc7d";
    if (percentage >= 20) return "#FE9A00";
    return "#E7000B";
  };

  // Get selected sensor data
  const selectedSensorData = selectedSensor
    ? mopekaSensors.find((s) => s.id === selectedSensor)
    : null;

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
            {selectedSensor ? selectedSensorData?.deviceName : "Mopeka"}
          </Text>
        </TouchableOpacity>

        {selectedSensorData && (
          <View className="flex-row items-center gap-2">
            <View
              className={`w-2 h-2 rounded-full ${
                selectedSensorData.isConnected ? "bg-primary" : "bg-destructive"
              }`}
            />
            <Text
              className={`text-sm font-medium ${
                selectedSensorData.isConnected
                  ? "text-primary"
                  : "text-destructive"
              }`}
            >
              {selectedSensorData.isConnected ? "Connected" : "Disconnected"}
            </Text>
          </View>
        )}
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          {!selectedSensor && (
            <>
              <View className="bg-secondary rounded-xl p-6">
                <View className="flex-row items-center gap-3">
                  <View className="bg-primary-accent border border-green-300 w-12 h-12 rounded-xl items-center justify-center">
                    <Droplets color="#00bc7d" />
                  </View>
                  <Text className="text-foreground text-xl font-semibold">
                    Tank Sensors
                  </Text>
                </View>
              </View>

              <View className="gap-4">
                <Text className="text-foreground text-lg font-semibold">
                  Active Sensors
                </Text>
                {mopekaSensors.map((sensor) => (
                  <SensorCard key={sensor.id} sensor={sensor} />
                ))}
              </View>
            </>
          )}

          {selectedSensor && selectedSensorData && (
            <>
              <View className="bg-secondary rounded-xl p-6">
                <View className="flex-row items-center justify-between">
                  <View className="flex-row items-center gap-3">
                    <View className="bg-primary-accent border border-green-300 w-12 h-12 rounded-xl items-center justify-center">
                      <Droplets color="#00bc7d" />
                    </View>
                    <View>
                      <Text className="text-foreground text-xl font-semibold">
                        {selectedSensorData.deviceName}
                      </Text>
                      <Text className="text-muted-foreground text-sm">
                        Last updated: {selectedSensorData.lastUpdate}
                      </Text>
                    </View>
                  </View>
                  <TouchableOpacity
                    onPress={() => handleCalibration(selectedSensorData.id)}
                    className="w-10 h-10 rounded-lg items-center justify-center"
                  >
                    <Settings color="#00bc7d" size={20} />
                  </TouchableOpacity>
                </View>
              </View>

              <Speedometer
                gallons={selectedSensorData.gallons}
                maxGallons={selectedSensorData.maxGallons}
              />

              <View className="gap-4">
                <Text className="text-foreground text-lg font-semibold">
                  Sensor Data
                </Text>

                <View className="flex-row gap-3">
                  <DataCard
                    icon={<Move3D color="#00bc7d" size={20} />}
                    title="Acc X"
                    value={selectedSensorData.accelerometer.x.toFixed(3)}
                    unit="g"
                  />
                  <DataCard
                    icon={<Move3D color="#00bc7d" size={20} />}
                    title="Acc Y"
                    value={selectedSensorData.accelerometer.y.toFixed(3)}
                    unit="g"
                  />
                </View>

                <View className="flex-row gap-3">
                  <DataCard
                    icon={
                      <Signal
                        color={getQualityColor(
                          selectedSensorData.readingQuality
                        )}
                        size={20}
                      />
                    }
                    title="Reading Quality"
                    value={selectedSensorData.readingQuality}
                    unit="%"
                    precision={1}
                  />
                  <DataCard
                    icon={<Thermometer color="#00bc7d" size={20} />}
                    title="Temperature"
                    value={selectedSensorData.temperature}
                    unit="°C"
                    precision={1}
                  />
                </View>
              </View>

              <View className="gap-4">
                <Text className="text-foreground text-lg font-semibold">
                  Tank Measurements
                </Text>

                <View className="flex-row gap-3">
                  <DataCard
                    icon={<Ruler color="#00bc7d" size={20} />}
                    title="Level Comp. (mm)"
                    value={selectedSensorData.tankLevelCompensated.mm}
                    unit="mm"
                    precision={1}
                  />
                  <DataCard
                    icon={<Ruler color="#00bc7d" size={20} />}
                    title="Level Comp. (in)"
                    value={selectedSensorData.tankLevelCompensated.in}
                    unit="in"
                    precision={1}
                  />
                </View>

                <View className="flex-row gap-3">
                  <DataCard
                    icon={<Ruler color="#00bc7d" size={20} />}
                    title="Level Non-Comp. (mm)"
                    value={selectedSensorData.tankLevelNonCompensated.mm}
                    unit="mm"
                    precision={1}
                  />
                  <DataCard
                    icon={<Ruler color="#FE9A00bc7d00" size={20} />}
                    title="Level Non-Comp. (in)"
                    value={selectedSensorData.tankLevelNonCompensated.in}
                    unit="in"
                    precision={1}
                  />
                </View>

                <View className="flex-row gap-3">
                  <DataCard
                    icon={<TrendingUp color="#00bc7d" size={20} />}
                    title="Tank Level Raw"
                    value={selectedSensorData.tankLevelRaw.toFixed(3)}
                  />
                  <DataCard
                    icon={<Navigation color="#00bc7d" size={20} />}
                    title="Angle"
                    value={selectedSensorData.angle}
                    unit="°"
                    precision={1}
                  />
                </View>
              </View>

              <View className="gap-4">
                <Text className="text-foreground text-lg font-semibold">
                  Connectivity & Power
                </Text>

                <View className="flex-row gap-3">
                  <DataCard
                    icon={<Wifi color={"#00bc7d"} size={20} />}
                    title="Signal Strength"
                    value={selectedSensorData.rssi}
                    unit="dBm"
                    precision={1}
                  />
                  <DataCard
                    icon={
                      <Battery
                        color={getBatteryColor(
                          selectedSensorData.battery.percentage
                        )}
                        size={20}
                      />
                    }
                    title="Battery Level"
                    value={selectedSensorData.battery.percentage}
                    unit="%"
                    precision={1}
                  />
                </View>

                <View className="flex-row">
                  <View className="flex-1 mr-3">
                    <DataCard
                      icon={<Zap color="#00bc7d" size={20} />}
                      title="Battery Voltage"
                      value={selectedSensorData.battery.voltage}
                      unit="V"
                      precision={1}
                    />
                  </View>

                  <View className="flex-1" />
                </View>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MopekaScreen;
