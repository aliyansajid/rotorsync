import { Text, TouchableOpacity, ActivityIndicator } from "react-native";

interface CustomButtonProps {
  title: string;
  onPress?: () => void;
  variant?: "primary" | "secondary" | "outline" | "destructive";
  disabled?: boolean;
  loading?: boolean;
}

const CustomButton = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  loading = false,
}: CustomButtonProps) => {
  const getButtonStyles = () => {
    const baseStyles =
      "h-16 rounded-xl items-center justify-center gap-2 w-full";

    let variantStyles = "";

    switch (variant) {
      case "secondary":
        variantStyles = "bg-primary-accent";
        break;
      case "outline":
        variantStyles = "bg-transparent border border-primary";
        break;
      case "destructive":
        variantStyles = "bg-destructive border border-destructive";
        break;
      default:
        variantStyles = "bg-primary";
        break;
    }

    if (disabled || loading) {
      return `${baseStyles} ${variantStyles} opacity-50`;
    }

    return `${baseStyles} ${variantStyles}`;
  };

  const getTextStyles = () => {
    switch (variant) {
      case "secondary":
        return "text-primary text-base font-semibold";
      case "outline":
        return "text-primary text-base font-semibold";
      case "destructive":
        return "text-destructive-foreground text-base font-semibold";
      default:
        return "text-primary-foreground text-base font-semibold";
    }
  };

  return (
    <TouchableOpacity
      className={getButtonStyles()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          size="small"
          color={variant === "primary" ? "white" : "#00bc7d"}
        />
      ) : (
        <Text className={getTextStyles()}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;
