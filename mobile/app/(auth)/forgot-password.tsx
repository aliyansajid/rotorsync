import { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { RotateCcw } from "lucide-react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const ForgotPasswordScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");

  const onResetPassword = () => {
    console.log("Reset password for:", email);
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar barStyle="light-content" />
      <View className="h-1/4 bg-primary relative overflow-hidden">
        <View className="absolute inset-0 opacity-8">
          {Array.from({ length: 20 }).map((_, rowIndex) => (
            <View key={rowIndex} className="flex-row h-6">
              {Array.from({ length: 20 }).map((_, colIndex) => (
                <View
                  key={colIndex}
                  className="flex-1 border-r border-b border-white/15"
                />
              ))}
            </View>
          ))}
        </View>

        <SafeAreaView className="flex-1 justify-center items-center px-6 relative z-10">
          <View className="w-14 h-14 bg-white/20 rounded-xl items-center justify-center mb-6">
            <RotateCcw size={28} color="white" />
          </View>

          <Text className="text-white text-3xl font-semibold text-center mb-2">
            Reset Password
          </Text>
          <Text className="text-muted text-base text-center">
            Enter your email to receive reset instructions
          </Text>
        </SafeAreaView>
      </View>

      <ScrollView
        className="flex-1 bg-background"
        showsVerticalScrollIndicator={false}
      >
        <View className="mx-5 mt-8 gap-6">
          <CustomInput
            label="Email"
            placeholder="m@example.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />

          <CustomButton title="Send Reset Link" onPress={onResetPassword} />

          <View className="flex-row items-center justify-center">
            <Text className="text-muted-foreground text-base">
              Remember your password?&nbsp;
            </Text>
            <Link
              href={"/login"}
              className="text-primary text-base font-medium"
            >
              Back to Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default ForgotPasswordScreen;
