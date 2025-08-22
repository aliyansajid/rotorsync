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
import { Link, router } from "expo-router";
import { ShieldCheck, Check } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { authService } from "@/services/authService";
import { loginSchema } from "@/schema";

const LoginScreen = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  async function onSubmit(values: z.infer<typeof loginSchema>) {
    setIsLoading(true);

    try {
      const result = await authService.login(values.email, values.password);

      if (result.success) {
        router.replace("/home");
      } else {
        form.setError("root", {
          type: "server",
          message: result.error || "Login failed",
        });
      }
    } catch (error) {
      console.error("Login error:", error);
      form.setError("root", {
        type: "server",
        message: "An unexpected error occurred. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  }

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
        <View className="m-6 gap-6">
          {form.formState.errors.root && (
            <View className="bg-red-50 border border-red-200 rounded-lg p-4">
              <Text className="text-red-600 text-sm">
                {form.formState.errors.root.message}
              </Text>
            </View>
          )}

          <Controller
            control={form.control}
            name="email"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CustomInput
                label="Email"
                placeholder="m@example.com"
                value={value}
                onChangeText={onChange}
                keyboardType="email-address"
                autoCapitalize="none"
                error={error?.message}
              />
            )}
          />

          <Controller
            control={form.control}
            name="password"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CustomInput
                label="Password"
                placeholder="********"
                value={value}
                onChangeText={onChange}
                secureTextEntry
                autoCapitalize="none"
                error={error?.message}
              />
            )}
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

          <CustomButton
            title="Login"
            onPress={form.handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
          />

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
