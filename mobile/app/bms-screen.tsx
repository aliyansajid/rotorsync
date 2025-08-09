import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeft,
  Battery,
  Zap,
  RotateCcw,
  AlertTriangle,
  CheckCircle,
  Thermometer,
  Activity,
  Power,
  Settings,
  Shield,
  BatteryMedium,
  BatteryFull,
} from "lucide-react-native";
import Svg, { Path } from "react-native-svg";
import { router } from "expo-router";

interface BMSData {
  deviceName: string;
  isConnected: boolean;
  stateOfCharge: number;
  totalVoltage: number;
  current: number;
  power: number;
  remainingCapacity: number;
  nominalCapacity: number;
  chargingCycles: number;
  deltaCellVoltages: number;
  softwareVersion: string;
  errors: number;
  isBalancing: boolean;
  isCharging: boolean;
  cellVoltages: { cell1: number; cell2: number; cell3: number; cell4: number };
  temperatures: { temp1: number; temp2: number };
}

const BMSScreen = () => {
  const screenWidth = Dimensions.get("window").width;

  // Sample BMS data
  const bmsData: BMSData = {
    deviceName: "BMS Controller Pro",
    isConnected: true,
    stateOfCharge: 78,
    totalVoltage: 12.6,
    current: 15.2,
    power: 191.52,
    remainingCapacity: 78.5,
    nominalCapacity: 100,
    chargingCycles: 247,
    deltaCellVoltages: 0.05,
    softwareVersion: "v2.1.3",
    errors: 0,
    isBalancing: true,
    isCharging: true,
    cellVoltages: { cell1: 3.15, cell2: 3.12, cell3: 3.14, cell4: 3.13 },
    temperatures: { temp1: 23.5, temp2: 24.1 },
  };

  const handleBack = (): void => {
    router.back();
  };

  const Speedometer = ({ percentage }: { percentage: number }) => {
    const size = 200;
    const strokeWidth = 12;
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * Math.PI; // Half circle
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    // Color based on percentage
    const getColor = (percent: number) => {
      if (percent >= 60) return "#00bc7d"; // Green
      if (percent >= 30) return "#FE9A00"; // Orange
      return "#E7000B"; // Red
    };

    return (
      <View className="bg-secondary rounded-xl p-6 items-center">
        <Text className="text-foreground text-xl font-semibold mb-4">
          State of Charge
        </Text>

        <View style={{ position: "relative" }}>
          <Svg width={size} height={size / 2 + 20}>
            <Path
              d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
              stroke="#E5E7EB"
              strokeWidth={strokeWidth}
              fill="none"
              strokeLinecap="round"
            />

            <Path
              d={`M ${strokeWidth / 2} ${size / 2} A ${radius} ${radius} 0 0 1 ${size - strokeWidth / 2} ${size / 2}`}
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
              {percentage}%
            </Text>
            <Text className="text-muted-foreground text-sm">Battery Level</Text>
          </View>
        </View>

        <View className="flex-row gap-4 mt-4">
          {bmsData.isCharging && (
            <View className="flex-row items-center gap-1 bg-primary-accent border border-green-300 px-3 py-1 rounded-full">
              <Zap color="#00bc7d" size={16} />
              <Text className="text-primary text-sm font-medium">Charging</Text>
            </View>
          )}
          {bmsData.isBalancing && (
            <View className="flex-row items-center gap-1 bg-blue-accent border border-blue-300 px-3 py-1 rounded-full">
              <Activity color="#1447E6" size={16} />
              <Text className="text-blue text-sm font-medium">Balancing</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  const DataCard = ({
    icon,
    title,
    value,
    unit,
  }: {
    icon: React.ReactNode;
    title: string;
    value: string | number;
    unit?: string;
  }) => (
    <View className="bg-secondary rounded-xl p-4 flex-1 gap-3">
      <View className="flex-row items-center gap-2">
        <View className="items-center justify-center">{icon}</View>
        <Text className="text-muted-foreground text-sm font-medium flex-1">
          {title}
        </Text>
      </View>
      <View className="flex-row items-baseline gap-1">
        <Text className="text-foreground text-xl font-bold">{value}</Text>
        {unit && <Text className="text-muted-foreground text-sm">{unit}</Text>}
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
          <Text className="text-foreground text-2xl font-medium">BMS</Text>
        </TouchableOpacity>

        <View className="flex-row items-center gap-2">
          <View
            className={`w-2 h-2 rounded-full ${bmsData.isConnected ? "bg-primary" : "bg-destructive"}`}
          />
          <Text
            className={`text-sm font-medium ${bmsData.isConnected ? "text-primary" : "text-destructive"}`}
          >
            {bmsData.isConnected ? "Connected" : "Disconnected"}
          </Text>
        </View>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          <View className="bg-secondary rounded-xl p-6">
            <View className="flex-row items-center gap-3">
              <View className="bg-orange-accent w-12 h-12 rounded-xl items-center justify-center">
                <Battery color="#FE9A00" />
              </View>
              <Text className="text-foreground text-xl font-semibold">
                {bmsData.deviceName}
              </Text>
            </View>
          </View>

          <Speedometer percentage={bmsData.stateOfCharge} />

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Battery Metrics
            </Text>

            <View className="flex-row gap-3">
              <DataCard
                icon={<Zap color="#00bc7d" size={20} />}
                title="Total Voltage"
                value={bmsData.totalVoltage}
                unit="V"
              />
              <DataCard
                icon={<Activity color="#00bc7d" size={20} />}
                title="Current"
                value={bmsData.current}
                unit="A"
              />
            </View>

            <View className="flex-row gap-3">
              <DataCard
                icon={<Power color="#00bc7d" size={20} />}
                title="Power"
                value={bmsData.power}
                unit="W"
              />
              <DataCard
                icon={<BatteryMedium color="#00bc7d" size={20} />}
                title="Remaining"
                value={bmsData.remainingCapacity}
                unit="Ah"
              />
            </View>

            <View className="flex-row gap-3">
              <DataCard
                icon={<BatteryFull color="#00bc7d" size={20} />}
                title="Nominal Capacity"
                value={bmsData.nominalCapacity}
                unit="Ah"
              />
              <DataCard
                icon={<RotateCcw color="#00bc7d" size={20} />}
                title="Charge Cycles"
                value={bmsData.chargingCycles}
              />
            </View>

            <View className="flex-row gap-3">
              <DataCard
                icon={<Activity color="#00bc7d" size={20} />}
                title="Delta Cell V"
                value={bmsData.deltaCellVoltages}
                unit="V"
              />
              <DataCard
                icon={<Settings color="#00bc7d" size={20} />}
                title="Software Version"
                value={bmsData.softwareVersion}
              />
            </View>

            {/* Row 5 */}
            <View className="flex-row gap-3">
              <DataCard
                icon={
                  bmsData.errors > 0 ? (
                    <AlertTriangle color="#E7000B" size={20} />
                  ) : (
                    <CheckCircle color="#00bc7d" size={20} />
                  )
                }
                title="Errors"
                value={bmsData.errors}
              />
              <DataCard
                icon={<Shield color="#00bc7d" size={20} />}
                title="Balancing"
                value={bmsData.isBalancing ? "Active" : "Inactive"}
              />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Cell Voltages
            </Text>

            <View className="flex-row gap-3">
              <DataCard
                icon={<Battery color="#00bc7d" size={20} />}
                title="Cell 1"
                value={bmsData.cellVoltages.cell1}
                unit="V"
              />
              <DataCard
                icon={<Battery color="#00bc7d" size={20} />}
                title="Cell 2"
                value={bmsData.cellVoltages.cell2}
                unit="V"
              />
            </View>

            <View className="flex-row gap-3">
              <DataCard
                icon={<Battery color="#00bc7d" size={20} />}
                title="Cell 3"
                value={bmsData.cellVoltages.cell3}
                unit="V"
              />
              <DataCard
                icon={<Battery color="#00bc7d" size={20} />}
                title="Cell 4"
                value={bmsData.cellVoltages.cell4}
                unit="V"
              />
            </View>
          </View>

          <View className="gap-4">
            <Text className="text-foreground text-lg font-semibold">
              Temperature
            </Text>

            <View className="flex-row gap-3">
              <DataCard
                icon={<Thermometer color="#00bc7d" size={20} />}
                title="Temp 1"
                value={bmsData.temperatures.temp1}
                unit="°C"
              />
              <DataCard
                icon={<Thermometer color="#00bc7d" size={20} />}
                title="Temp 2"
                value={bmsData.temperatures.temp2}
                unit="°C"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BMSScreen;
