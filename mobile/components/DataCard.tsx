import { View, Text } from "react-native";

interface DataCardProps {
  title: string;
  value: string | number;
  unit?: string;
  icon?: React.ReactNode;
  dotColor?: string;
  precision?: number;
}

const DataCard = ({
  title,
  value,
  unit,
  icon,
  dotColor,
  precision = 3,
}: DataCardProps) => {
  const formatValue = (val: string | number): string => {
    if (typeof val === "number") {
      return val.toFixed(precision);
    }
    return val.toString();
  };

  return (
    <View className="bg-secondary rounded-xl p-4 flex-1 gap-3">
      <View className="flex-row items-center gap-2">
        {icon && <View className="items-center justify-center">{icon}</View>}
        {dotColor && (
          <View
            style={{
              width: 8,
              height: 8,
              borderRadius: 4,
              backgroundColor: dotColor,
            }}
          />
        )}
        <Text
          className={`text-muted-foreground text-sm font-medium ${icon ? "flex-1" : ""}`}
        >
          {title}
        </Text>
      </View>

      <View className="flex-row items-baseline gap-1">
        <Text className="text-foreground text-xl font-bold">
          {formatValue(value)}
        </Text>
        {unit && <Text className="text-muted-foreground text-sm">{unit}</Text>}
      </View>
    </View>
  );
};

export default DataCard;
