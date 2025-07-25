import { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardTypeOptions,
} from "react-native";
import { Eye, EyeOff } from "lucide-react-native";

interface CustomInputProps {
  label: string;
  placeholder?: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
}

const CustomInput = ({
  label,
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "sentences",
}: CustomInputProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <View className="gap-2">
      <Text className="text-sm leading-none font-medium">{label}</Text>
      <View className="relative">
        <TextInput
          className={`h-14 border rounded-xl bg-transparent px-4 py-3 text-base shadow-xs ${
            isFocused ? "border-ring" : "border-input"
          }`}
          placeholder={placeholder}
          placeholderTextColor="#737373"
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={secureTextEntry && !showPassword}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />

        {secureTextEntry && (
          <TouchableOpacity
            className="absolute top-0 right-4 h-14 justify-center"
            onPress={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff size={20} color="#737373" />
            ) : (
              <Eye size={20} color="#737373" />
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default CustomInput;
