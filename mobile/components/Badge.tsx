import { View, Text } from "react-native";

interface BadgeProps {
  icon?: React.ReactNode;
  text: string;
  variant?: "primary" | "blue" | "orange" | "red" | "purple" | "custom";
  bgColor?: string;
  borderColor?: string;
  textColor?: string;
  iconColor?: string;
}

const Badge: React.FC<BadgeProps> = ({
  icon,
  text,
  variant = "primary",
  bgColor,
  borderColor,
  textColor,
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "primary":
        return {
          bg: "bg-primary-accent",
          border: "border-green-300",
          text: "text-primary",
        };
      case "blue":
        return {
          bg: "bg-blue-accent",
          border: "border-blue-300",
          text: "text-blue",
        };
      case "orange":
        return {
          bg: "bg-orange-accent",
          border: "border-orange-300",
          text: "text-orange",
        };
      case "red":
        return {
          bg: "bg-red-accent",
          border: "border-red-300",
          text: "text-red",
        };
      case "purple":
        return {
          bg: "bg-purple-accent",
          border: "border-purple-300",
          text: "text-purple",
        };
      case "custom":
        return {
          bg: "",
          border: "",
          text: "",
        };
      default:
        return {
          bg: "bg-primary-accent",
          border: "border-green-300",
          text: "text-primary",
        };
    }
  };

  const styles = getVariantStyles();

  return (
    <View
      className={`flex-row items-center gap-1 px-3 py-1 rounded-full border ${
        variant === "custom" ? "" : `${styles.bg} ${styles.border}`
      }`}
      style={
        variant === "custom"
          ? {
              backgroundColor: bgColor,
              borderColor: borderColor,
            }
          : {}
      }
    >
      {icon && icon}
      <Text
        className={`text-sm font-medium ${
          variant === "custom" ? "" : styles.text
        }`}
        style={variant === "custom" ? { color: textColor } : {}}
      >
        {text}
      </Text>
    </View>
  );
};

export default Badge;
