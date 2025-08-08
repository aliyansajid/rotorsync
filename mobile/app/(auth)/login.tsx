import { useState } from "react";
import {
  StatusBar,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { ShieldCheck, Check } from "lucide-react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const onLogin = () => {
    console.log("Login with:", email, password);
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
            <ShieldCheck size={28} color="white" />
          </View>
          <Text className="text-white text-3xl font-semibold text-center mb-2">
            Welcome Back
          </Text>
          <Text className="text-muted text-base text-center">
            Sign in to continue to your account
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

          <CustomInput
            label="Password"
            placeholder="********"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
          />

          <View className="flex-row items-center justify-between">
            <TouchableOpacity
              className="flex-row items-center gap-2"
              onPress={() => setRememberMe(!rememberMe)}
            >
              <View
                className={`w-5 h-5 rounded border-2 items-center justify-center ${
                  rememberMe ? "bg-primary border-primary" : "border-input"
                }`}
              >
                {rememberMe && <Check size={12} color="white" />}
              </View>
              <Text className="text-muted-foreground text-sm">Remember me</Text>
            </TouchableOpacity>

            <Link
              href="/forgot-password"
              className="text-primary text-sm font-medium"
            >
              Forgot password?
            </Link>
          </View>

          <CustomButton title="Login" onPress={onLogin} />

          <View className="flex-row items-center justify-center">
            <Text className="text-muted-foreground text-base">
              Don't have an account?&nbsp;
            </Text>
            <Link
              href={"/sign-up"}
              className="text-primary text-base font-medium"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
