import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Cpu } from "lucide-react-native";
import Svg, { Rect, Text as SvgText, G } from "react-native-svg";
import { useState } from "react";
import { router } from "expo-router";
import DataCard from "../components/DataCard";

interface ProbeData {
  name: string;
  temperature: number;
  type: "CHT" | "EGT";
}

interface RaspberryPiData {
  deviceName: string;
  isConnected: boolean;
  probes: ProbeData[];
}

const RaspberryPiScreen = () => {
  const screenWidth = Dimensions.get("window").width;
  const [tooltipData, setTooltipData] = useState<{
    x: number;
    y: number;
    probe: ProbeData;
  } | null>(null);

  const raspberryPiData: RaspberryPiData = {
    deviceName: "Raspberry Pi 4B",
    isConnected: true,
    probes: [
      { name: "CHT1", temperature: 500, type: "CHT" },
      { name: "EGT1", temperature: 1250, type: "EGT" },
      { name: "CHT2", temperature: 450, type: "CHT" },
      { name: "EGT2", temperature: 1280, type: "EGT" },
      { name: "CHT3", temperature: 425, type: "CHT" },
      { name: "EGT3", temperature: 1265, type: "EGT" },
      { name: "CHT4", temperature: 550, type: "CHT" },
      { name: "EGT4", temperature: 1275, type: "EGT" },
      { name: "CHT5", temperature: 408, type: "CHT" },
      { name: "EGT5", temperature: 1290, type: "EGT" },
      { name: "CHT6", temperature: 418, type: "CHT" },
      { name: "EGT6", temperature: 1260, type: "EGT" },
    ],
  };

  const handleBack = (): void => {
    router.back();
  };

  const BarChart = ({ data }: { data: ProbeData[] }) => {
    const chartWidth = screenWidth - 48;
    const chartHeight = 250;
    const margin = { top: 20, right: 20, bottom: 60, left: 60 };

    const chartData = [];
    for (let i = 0; i < data.length; i += 2) {
      const chtProbe = data[i];
      const egtProbe = data[i + 1];
      chartData.push({
        cylinder: `Cyl ${Math.floor(i / 2) + 1}`,
        cht: chtProbe.temperature,
        egt: egtProbe.temperature,
      });
    }

    const maxTemp = Math.max(...data.map((d) => d.temperature));
    const minTemp = Math.min(...data.map((d) => d.temperature));
    const tempRange = maxTemp - minTemp;
    const availableHeight = chartHeight - margin.top - margin.bottom;
    const groupWidth =
      (chartWidth - margin.left - margin.right) / chartData.length;
    const barWidth = (groupWidth - 16) / 2;

    const handleBarPress = (
      event: any,
      value: number,
      type: string,
      cylinder: string
    ) => {
      const { locationX, locationY } = event.nativeEvent;
      setTooltipData({
        x: locationX,
        y: locationY,
        probe: {
          name: `${type} ${cylinder}`,
          temperature: value,
          type: type as "CHT" | "EGT",
        },
      });

      setTimeout(() => setTooltipData(null), 3000);
    };

    return (
      <View className="bg-secondary rounded-xl">
        <View className="p-6 gap-2">
          <Text className="text-foreground text-xl font-semibold">
            Temperature Probes
          </Text>
          <Text className="text-muted-foreground text-sm">
            CHT and EGT readings by cylinder
          </Text>
        </View>

        <View style={{ position: "relative" }}>
          <TouchableOpacity activeOpacity={1}>
            <Svg width={chartWidth} height={chartHeight}>
              {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                const y = margin.top + ratio * availableHeight;
                return (
                  <Rect
                    key={index}
                    x={margin.left}
                    y={y}
                    width={chartWidth - margin.left - margin.right}
                    height={0.5}
                    fill="#E5E7EB"
                  />
                );
              })}

              {chartData.map((group, groupIndex) => {
                const groupX = margin.left + groupIndex * groupWidth;
                const centerX = groupX + groupWidth / 2;

                const chtHeight =
                  ((group.cht - minTemp) / tempRange) * availableHeight;
                const chtY = chartHeight - margin.bottom - chtHeight;
                const chtX = centerX - barWidth - 4;

                const egtHeight =
                  ((group.egt - minTemp) / tempRange) * availableHeight;
                const egtY = chartHeight - margin.bottom - egtHeight;
                const egtX = centerX + 4;

                return (
                  <G key={groupIndex}>
                    <Rect
                      x={chtX}
                      y={chtY}
                      width={barWidth}
                      height={chtHeight}
                      fill="#00BC7D"
                      rx={4}
                      ry={4}
                      onPress={(event) =>
                        handleBarPress(event, group.cht, "CHT", group.cylinder)
                      }
                    />

                    <Rect
                      x={egtX}
                      y={egtY}
                      width={barWidth}
                      height={egtHeight}
                      fill="#1447E6"
                      rx={4}
                      ry={4}
                      onPress={(event) =>
                        handleBarPress(event, group.egt, "EGT", group.cylinder)
                      }
                    />

                    <SvgText
                      x={centerX}
                      y={chartHeight - 35}
                      fontSize="12"
                      fill="#737373"
                      textAnchor="middle"
                    >
                      {group.cylinder}
                    </SvgText>
                  </G>
                );
              })}

              {[0, 0.25, 0.5, 0.75, 1].map((ratio, index) => {
                const temp = Math.round(minTemp + ratio * tempRange);
                const y = chartHeight - margin.bottom - ratio * availableHeight;
                return (
                  <SvgText
                    key={index}
                    x={margin.left - 10}
                    y={y + 4}
                    fontSize="12"
                    fill="#737373"
                    textAnchor="end"
                  >
                    {temp}
                  </SvgText>
                );
              })}
            </Svg>
          </TouchableOpacity>
        </View>

        <View className="gap-2 px-6 pb-6">
          <View className="flex-row items-center gap-3">
            <View className="flex-row gap-2 items-center">
              <View className="w-3 h-3 bg-primary rounded-sm" />
              <Text className="text-muted-foreground text-sm font-medium">
                CHT
              </Text>
            </View>

            <View className="flex-row gap-2 items-center">
              <View className="w-3 h-3 bg-blue rounded-sm" />
              <Text className="text-muted-foreground text-sm font-medium">
                EGT
              </Text>
            </View>
          </View>
          <Text className="text-muted-foreground text-sm">
            Showing temperature readings for 6 cylinders
          </Text>
        </View>
      </View>
    );
  };

  const ProbeCard = ({ probe }: { probe: ProbeData }) => (
    <View className="bg-secondary rounded-xl p-4 flex-1 gap-2">
      <View className="flex-row items-center gap-2">
        <View
          style={{
            width: 8,
            height: 8,
            borderRadius: 4,
            backgroundColor: probe.type === "CHT" ? "#00BC7D" : "#1447E6",
          }}
        />
        <Text className="text-muted-foreground text-sm">{probe.name}</Text>
      </View>
      <View className="flex-row items-baseline gap-1">
        <Text className="text-foreground text-xl font-bold">
          {probe.temperature}
        </Text>
        <Text className="text-muted-foreground text-sm">°F</Text>
      </View>
    </View>
  );

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
            Raspberry Pi
          </Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-2">
          <View
            className={`w-2 h-2 rounded-full ${raspberryPiData.isConnected ? "bg-primary" : "bg-destructive"}`}
          />
          <Text
            className={`text-sm font-medium ${raspberryPiData.isConnected ? "text-primary" : "text-destructive"}`}
          >
            {raspberryPiData.isConnected ? "Connected" : "Disconnected"}
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          <View className="bg-secondary rounded-xl p-6">
            <View className="flex-row items-center gap-3">
              <View className="bg-pink-accent border border-red-300 w-12 h-12 rounded-xl items-center justify-center">
                <Cpu color="#FF2056" size={24} />
              </View>
              <Text className="text-foreground text-xl font-semibold">
                {raspberryPiData.deviceName}
              </Text>
            </View>
          </View>

          <BarChart data={raspberryPiData.probes} />

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Individual Probe Readings
            </Text>

            <View className="gap-3">
              <Text className="text-foreground text-base font-medium">
                CHT Probes
              </Text>
              <View className="flex-row gap-3">
                <DataCard
                  title={raspberryPiData.probes[0].name}
                  value={raspberryPiData.probes[0].temperature}
                  unit="°F"
                  dotColor="#00BC7D"
                  precision={0}
                />
                <DataCard
                  title={raspberryPiData.probes[2].name}
                  value={raspberryPiData.probes[2].temperature}
                  unit="°F"
                  dotColor="#00BC7D"
                  precision={0}
                />
              </View>
              <View className="flex-row gap-3">
                <DataCard
                  title={raspberryPiData.probes[4].name}
                  value={raspberryPiData.probes[4].temperature}
                  unit="°F"
                  dotColor="#00BC7D"
                  precision={0}
                />
                <DataCard
                  title={raspberryPiData.probes[6].name}
                  value={raspberryPiData.probes[6].temperature}
                  unit="°F"
                  dotColor="#00BC7D"
                  precision={0}
                />
              </View>
              <View className="flex-row gap-3">
                <DataCard
                  title={raspberryPiData.probes[8].name}
                  value={raspberryPiData.probes[8].temperature}
                  unit="°F"
                  dotColor="#00BC7D"
                  precision={0}
                />
                <DataCard
                  title={raspberryPiData.probes[10].name}
                  value={raspberryPiData.probes[10].temperature}
                  unit="°F"
                  dotColor="#00BC7D"
                  precision={0}
                />
              </View>
            </View>

            <View className="gap-3">
              <Text className="text-foreground text-base font-medium">
                EGT Probes
              </Text>
              <View className="flex-row gap-3">
                <DataCard
                  title={raspberryPiData.probes[1].name}
                  value={raspberryPiData.probes[1].temperature}
                  unit="°F"
                  dotColor="#1447E6"
                  precision={0}
                />
                <DataCard
                  title={raspberryPiData.probes[3].name}
                  value={raspberryPiData.probes[3].temperature}
                  unit="°F"
                  dotColor="#1447E6"
                  precision={0}
                />
              </View>
              <View className="flex-row gap-3">
                <DataCard
                  title={raspberryPiData.probes[5].name}
                  value={raspberryPiData.probes[5].temperature}
                  unit="°F"
                  dotColor="#1447E6"
                  precision={0}
                />
                <DataCard
                  title={raspberryPiData.probes[7].name}
                  value={raspberryPiData.probes[7].temperature}
                  unit="°F"
                  dotColor="#1447E6"
                  precision={0}
                />
              </View>
              <View className="flex-row gap-3">
                <DataCard
                  title={raspberryPiData.probes[9].name}
                  value={raspberryPiData.probes[9].temperature}
                  unit="°F"
                  dotColor="#1447E6"
                  precision={0}
                />
                <DataCard
                  title={raspberryPiData.probes[11].name}
                  value={raspberryPiData.probes[11].temperature}
                  unit="°F"
                  dotColor="#1447E6"
                  precision={0}
                />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RaspberryPiScreen;
