import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, {
  Path,
  Defs,
  LinearGradient,
  Stop,
  Circle,
} from "react-native-svg";
import { useState } from "react";

interface MopekaData {
  sensorName: string;
  sensorId: string;
  gallons: number;
  readingQuality: number;
  lastUpdated: string;
  graphData: { time: number; gallons: number }[];
}

interface BMSData {
  batteryName: string;
  stateOfCharge: number;
  totalVoltage: number;
  isCharging: boolean;
}

interface TrailerData {
  id: string;
  name: string;
  mopeka: MopekaData;
  bms: BMSData;
}

const MonitoringScreen = () => {
  // Get screen dimensions for responsive layout
  const screenWidth = Dimensions.get("window").width;

  // Static hardcoded data points
  const staticGraphData = [
    { time: 0, gallons: 35.2 },
    { time: 1, gallons: 37.8 },
    { time: 2, gallons: 34.1 },
    { time: 3, gallons: 39.5 },
    { time: 4, gallons: 41.2 },
    { time: 5, gallons: 38.9 },
    { time: 6, gallons: 42.3 },
    { time: 7, gallons: 40.1 },
    { time: 8, gallons: 36.7 },
    { time: 9, gallons: 33.4 },
    { time: 10, gallons: 35.8 },
    { time: 11, gallons: 38.2 },
    { time: 12, gallons: 40.9 },
    { time: 13, gallons: 43.1 },
    { time: 14, gallons: 41.5 },
    { time: 15, gallons: 39.3 },
    { time: 16, gallons: 37.6 },
    { time: 17, gallons: 34.8 },
    { time: 18, gallons: 32.2 },
    { time: 19, gallons: 30.5 },
    { time: 20, gallons: 31.8 },
    { time: 21, gallons: 33.4 },
    { time: 22, gallons: 35.7 },
    { time: 23, gallons: 37.2 },
    { time: 24, gallons: 39.8 },
    { time: 25, gallons: 41.3 },
    { time: 26, gallons: 43.6 },
    { time: 27, gallons: 42.1 },
    { time: 28, gallons: 40.4 },
    { time: 29, gallons: 38.7 },
    { time: 30, gallons: 36.9 },
    { time: 31, gallons: 34.2 },
    { time: 32, gallons: 32.8 },
    { time: 33, gallons: 31.5 },
    { time: 34, gallons: 33.1 },
    { time: 35, gallons: 35.6 },
    { time: 36, gallons: 37.9 },
    { time: 37, gallons: 40.2 },
    { time: 38, gallons: 42.7 },
    { time: 39, gallons: 44.1 },
    { time: 40, gallons: 42.8 },
    { time: 41, gallons: 41.2 },
    { time: 42, gallons: 39.6 },
    { time: 43, gallons: 37.3 },
    { time: 44, gallons: 35.1 },
    { time: 45, gallons: 33.7 },
    { time: 46, gallons: 32.4 },
    { time: 47, gallons: 30.9 },
    { time: 48, gallons: 29.6 },
    { time: 49, gallons: 31.2 },
    { time: 50, gallons: 33.8 },
    { time: 51, gallons: 36.4 },
    { time: 52, gallons: 38.7 },
    { time: 53, gallons: 41.3 },
    { time: 54, gallons: 43.8 },
    { time: 55, gallons: 45.2 },
    { time: 56, gallons: 43.9 },
    { time: 57, gallons: 42.1 },
    { time: 58, gallons: 40.5 },
    { time: 59, gallons: 38.2 },
    { time: 60, gallons: 36.8 },
    { time: 61, gallons: 34.5 },
    { time: 62, gallons: 32.9 },
    { time: 63, gallons: 31.6 },
    { time: 64, gallons: 30.3 },
    { time: 65, gallons: 32.7 },
    { time: 66, gallons: 35.1 },
    { time: 67, gallons: 37.8 },
    { time: 68, gallons: 40.4 },
    { time: 69, gallons: 42.9 },
    { time: 70, gallons: 44.7 },
    { time: 71, gallons: 46.2 },
    { time: 72, gallons: 45.1 },
    { time: 73, gallons: 43.4 },
    { time: 74, gallons: 41.8 },
    { time: 75, gallons: 39.9 },
    { time: 76, gallons: 37.6 },
    { time: 77, gallons: 35.4 },
    { time: 78, gallons: 33.2 },
    { time: 79, gallons: 31.8 },
    { time: 80, gallons: 30.5 },
    { time: 81, gallons: 32.9 },
    { time: 82, gallons: 35.3 },
    { time: 83, gallons: 37.7 },
    { time: 84, gallons: 40.1 },
    { time: 85, gallons: 42.6 },
    { time: 86, gallons: 44.8 },
    { time: 87, gallons: 46.5 },
    { time: 88, gallons: 45.3 },
    { time: 89, gallons: 43.7 },
    { time: 90, gallons: 42.2 },
    { time: 91, gallons: 40.6 },
    { time: 92, gallons: 38.4 },
    { time: 93, gallons: 36.1 },
    { time: 94, gallons: 34.3 },
    { time: 95, gallons: 32.7 },
    { time: 96, gallons: 31.4 },
    { time: 97, gallons: 30.1 },
    { time: 98, gallons: 28.8 },
    { time: 99, gallons: 27.5 },
  ];

  // Custom tooltip component
  const [tooltipData, setTooltipData] = useState<{
    x: number;
    y: number;
    point: { time: number; gallons: number };
  } | null>(null);

  const MobileAreaGraph = ({
    data,
    width,
    height,
  }: {
    data: { time: number; gallons: number }[];
    width: number;
    height: number;
  }) => {
    const maxGallons = Math.max(...data.map((d) => d.gallons));
    const minGallons = Math.min(...data.map((d) => d.gallons));
    const gallonsRange = maxGallons - minGallons;

    const stepX = width / (data.length - 1);

    // Create path for the area
    let pathData = "";
    let areaPathData = "";

    data.forEach((point, index) => {
      const x = index * stepX;
      const y = height - ((point.gallons - minGallons) / gallonsRange) * height;

      if (index === 0) {
        pathData += `M${x},${y}`;
        areaPathData += `M${x},${height}L${x},${y}`;
      } else {
        pathData += `L${x},${y}`;
        areaPathData += `L${x},${y}`;
      }
    });

    areaPathData += `L${width},${height}Z`;

    const handleGraphPress = (event: any) => {
      const { locationX, locationY } = event.nativeEvent;
      const pointIndex = Math.round((locationX / width) * (data.length - 1));
      const clampedIndex = Math.max(0, Math.min(pointIndex, data.length - 1));
      const point = data[clampedIndex];

      const dataX = (clampedIndex / (data.length - 1)) * width;
      const dataY =
        height - ((point.gallons - minGallons) / gallonsRange) * height;

      setTooltipData({ x: locationX, y: locationY, point });

      setTimeout(() => setTooltipData(null), 5000);
    };

    return (
      <View style={{ position: "relative" }} className="mt-3">
        <TouchableOpacity onPress={handleGraphPress} activeOpacity={1}>
          <Svg width={width} height={height}>
            <Defs>
              <LinearGradient
                id="areaGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="100%"
              >
                <Stop offset="0%" stopColor="#00BC7D" stopOpacity="0.3" />
                <Stop offset="100%" stopColor="#00BC7D" stopOpacity="0.05" />
              </LinearGradient>
            </Defs>

            <Path d={areaPathData} fill="url(#areaGradient)" />

            <Path d={pathData} stroke="#00BC7D" strokeWidth="2" fill="none" />

            {tooltipData && (
              <Circle
                cx={
                  (data.findIndex((d) => d.time === tooltipData.point.time) /
                    (data.length - 1)) *
                  width
                }
                cy={
                  height -
                  ((tooltipData.point.gallons - minGallons) / gallonsRange) *
                    height
                }
                r="4"
                fill="#00BC7D"
                stroke="#FFFFFF"
                strokeWidth="2"
              />
            )}
          </Svg>
        </TouchableOpacity>

        {tooltipData && (
          <View
            style={{
              position: "absolute",
              left: Math.min(Math.max(tooltipData.x - 45, 0), width - 90),
              top: Math.max(tooltipData.y - 80, -20),
            }}
            className="bg-background gap-1 border border-border rounded-lg px-3 py-2 shadow-sm min-w-24 z-50"
          >
            <Text className="text-xs font-semibold text-foreground">
              Time {tooltipData.point.time}
            </Text>

            <View className="flex-row items-center gap-2">
              <View className="w-2 h-2 rounded bg-primary" />
              <Text className="text-xs text-muted-foreground">Gallons</Text>
              <Text className="text-xs text-foreground font-semibold">
                {tooltipData.point.gallons.toFixed(1)}
              </Text>
            </View>
          </View>
        )}
      </View>
    );
  };

  const TrailerCard = ({ data }: { data: TrailerData }) => {
    const isUnreliableMopeka = data.mopeka.readingQuality <= 67;

    return (
      <View className="bg-secondary rounded-3xl p-6 gap-3">
        <Text className="text-foreground text-xl font-semibold mb-3">
          {data.name}
        </Text>

        <View className="flex-row items-center gap-3 mb-3">
          <Text className="text-foreground text-xl font-semibold">Mopeka</Text>
          {isUnreliableMopeka && (
            <View className="bg-[#FFE0E2] border border-red-300 rounded-full px-3 py-1">
              <Text className="text-destructive text-sm font-medium">
                Unreliable reading
              </Text>
            </View>
          )}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Senor name
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.mopeka.sensorName}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Senor ID
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.mopeka.sensorId}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">Gallons</Text>
          <Text
            className={`text-xl font-bold ${isUnreliableMopeka ? "text-destructive" : "text-foreground"}`}
          >
            {data.mopeka.gallons.toFixed(1)}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Reading quality
          </Text>
          <Text
            className={`text-xl font-bold ${isUnreliableMopeka ? "text-destructive" : "text-foreground"}`}
          >
            {data.mopeka.readingQuality.toFixed(1)}%
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Last updated
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.mopeka.lastUpdated}
          </Text>
        </View>

        <View className="border-b border-border my-3" />

        <View className="flex-row items-center gap-3 mb-3">
          <Text className="text-foreground text-xl font-semibold">
            Battery Management System
          </Text>
          {data.bms.isCharging && (
            <View className="bg-[#E0FFF5] border border-green-300 rounded-full px-3 py-1">
              <Text className="text-primary text-sm font-medium">Charging</Text>
            </View>
          )}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">Name</Text>
          <Text className="text-muted-foreground text-base">
            {data.bms.batteryName}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            State of charge
          </Text>
          <Text className="text-foreground text-xl font-bold">
            {data.bms.stateOfCharge}%
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Total Voltage
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.bms.totalVoltage}
          </Text>
        </View>
      </View>
    );
  };

  const mopekaData: MopekaData = {
    sensorName: "Tank Sensor A",
    sensorId: "52:7C:6B",
    gallons: 45.2,
    readingQuality: 59,
    lastUpdated: "2 mins ago",
    graphData: staticGraphData,
  };

  const bmsData: BMSData = {
    batteryName: "Main Battery",
    stateOfCharge: 78,
    totalVoltage: 12.6,
    isCharging: true,
  };

  // Sample trailer data
  const trailersData: TrailerData[] = [
    {
      id: "trailer_1",
      name: "Trailer 1",
      mopeka: {
        sensorName: "Tank Sensor A",
        sensorId: "52:7C:6B",
        gallons: 45.2,
        readingQuality: 59,
        lastUpdated: "2 mins ago",
        graphData: [],
      },
      bms: {
        batteryName: "Main Battery",
        stateOfCharge: 78,
        totalVoltage: 12.6,
        isCharging: true,
      },
    },
    {
      id: "trailer_2",
      name: "Trailer 2",
      mopeka: {
        sensorName: "Tank Sensor B",
        sensorId: "4A:3E:2D",
        gallons: 32.8,
        readingQuality: 85,
        lastUpdated: "5 mins ago",
        graphData: [],
      },
      bms: {
        batteryName: "Secondary Battery",
        stateOfCharge: 65,
        totalVoltage: 13.2,
        isCharging: false,
      },
    },
  ];

  const MopekaCard = ({ data }: { data: MopekaData }) => {
    const isUnreliable = data.readingQuality <= 67;

    return (
      <View className="bg-secondary rounded-3xl p-6 gap-3">
        <View className="flex-row items-center gap-3 mb-3">
          <Text className="text-foreground text-xl font-semibold">Mopeka</Text>
          {isUnreliable && (
            <View className="bg-[#FFE0E2] border border-red-300 rounded-full px-3 py-1">
              <Text className="text-destructive text-sm font-medium">
                Unreliable reading
              </Text>
            </View>
          )}
        </View>

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Senor name
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.sensorName}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Senor ID
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.sensorId}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">Gallons</Text>
          <Text
            className={`text-xl font-bold ${isUnreliable ? "text-destructive" : "text-foreground"}`}
          >
            {data.gallons.toFixed(1)}
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Reading quality
          </Text>
          <Text
            className={`text-xl font-bold ${isUnreliable ? "text-destructive" : "text-foreground"}`}
          >
            {data.readingQuality.toFixed(1)}%
          </Text>
        </View>

        <View className="border-b border-border" />

        <View className="flex-row items-center justify-between">
          <Text className="text-foreground text-base font-medium">
            Last updated
          </Text>
          <Text className="text-muted-foreground text-base">
            {data.lastUpdated}
          </Text>
        </View>

        <View className="border-b border-border" />

        <MobileAreaGraph
          data={data.graphData}
          width={screenWidth - 85}
          height={120}
        />
      </View>
    );
  };

  const BMSCard = ({ data }: { data: BMSData }) => (
    <View className="bg-secondary rounded-3xl p-6 gap-3">
      <View className="flex-row items-center gap-3 mb-3">
        <Text className="text-foreground text-xl font-semibold">
          Battery Management System
        </Text>
        {data.isCharging && (
          <View className="bg-[#E0FFF5] border border-green-300 rounded-full px-3 py-1">
            <Text className="text-primary text-sm font-medium">Charging</Text>
          </View>
        )}
      </View>

      <View className="flex-row items-center justify-between">
        <Text className="text-foreground text-base font-medium">Name</Text>
        <Text className="text-muted-foreground text-base">
          {data.batteryName}
        </Text>
      </View>

      <View className="border-b border-border" />

      <View className="flex-row items-center justify-between">
        <Text className="text-foreground text-base font-medium">
          State of charge
        </Text>
        <Text className="text-foreground text-xl font-bold">
          {data.stateOfCharge}%
        </Text>
      </View>

      <View className="border-b border-border" />

      <View className="flex-row items-center justify-between">
        <Text className="text-foreground text-base font-medium">
          Total Voltage
        </Text>
        <Text className="text-muted-foreground text-base">
          {data.totalVoltage}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background px-6 py-4 border-b border-border">
        <Text className="text-foreground text-2xl font-semibold">
          Monitoring
        </Text>
      </View>

      <ScrollView className="flex-1">
        <View className="m-6 gap-6">
          <View className="gap-2">
            <Text className="text-foreground text-xl font-semibold">
              Bluetooth sensors
            </Text>
            <Text className="text-muted-foreground text-base">
              View Bluetooth Mopeka and BMS data
            </Text>
          </View>
          <MopekaCard data={mopekaData} />
          <BMSCard data={bmsData} />
          <View className="gap-2">
            <Text className="text-foreground text-xl font-semibold">
              Trailers
            </Text>
            <Text className="text-muted-foreground text-base">
              Monitor trailer data remotely over MQTT
            </Text>
          </View>

          {trailersData.map((trailer) => (
            <TrailerCard key={trailer.id} data={trailer} />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonitoringScreen;
