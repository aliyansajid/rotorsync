import { useState } from "react";
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, router } from "expo-router";
import { UserPlus, ChevronDown } from "lucide-react-native";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";
import { authService } from "@/services/authService";
import { registerSchema } from "@/schema";

const SignUpScreen = () => {
  const [showRoleDropdown, setShowRoleDropdown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "CREW" as const,
    },
    mode: "onChange",
  });

  const roles = [
    { label: "Pilot", value: "PILOT" as const },
    { label: "Crew", value: "CREW" as const },
  ];

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setIsLoading(true);

    try {
      const result = await authService.register({
        name: values.name,
        email: values.email,
        password: values.password,
        role: values.role,
      });

      if (result.success) {
        Alert.alert("Success", result.message, [
          {
            text: "OK",
            onPress: () => {
              router.replace("/home");
            },
          },
        ]);
      } else {
        form.setError("root", {
          type: "server",
          message: result.error || "Unable to create account",
        });
      }
    } catch (error) {
      console.error("Registration error:", error);
      form.setError("root", {
        type: "server",
        message: "Network error. Please check your connection and try again.",
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
      <StatusBar barStyle="dark-content" />
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
            <UserPlus size={28} color="white" />
          </View>
          <Text className="text-white text-3xl font-semibold text-center mb-2">
            Create Account
          </Text>
          <Text className="text-muted text-base text-center">
            Sign up to get started with your account
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
            name="name"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <CustomInput
                label="Name"
                placeholder="John Doe"
                value={value}
                onChangeText={onChange}
                autoCapitalize="words"
                error={error?.message}
              />
            )}
          />

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
            name="role"
            render={({ field: { onChange, value }, fieldState: { error } }) => (
              <View className="gap-2">
                <Text className="text-muted-foreground text-sm font-medium">
                  Role
                </Text>
                <TouchableOpacity
                  className="border border-border rounded-xl px-4 h-16 flex-row items-center justify-between bg-background"
                  onPress={() => setShowRoleDropdown(!showRoleDropdown)}
                >
                  <Text className="text-foreground text-base">
                    {roles.find((r) => r.value === value)?.label}
                  </Text>
                  <ChevronDown
                    color="#737373"
                    size={20}
                    style={{
                      transform: [
                        { rotate: showRoleDropdown ? "180deg" : "0deg" },
                      ],
                    }}
                  />
                </TouchableOpacity>

                {showRoleDropdown && (
                  <View className="bg-secondary border border-border rounded-xl overflow-hidden">
                    {roles.map((roleOption, index) => (
                      <TouchableOpacity
                        key={roleOption.value}
                        className={`p-4 ${
                          index < roles.length - 1
                            ? "border-b border-border"
                            : ""
                        }`}
                        onPress={() => {
                          onChange(roleOption.value);
                          setShowRoleDropdown(false);
                        }}
                      >
                        <Text className="text-foreground text-base">
                          {roleOption.label}
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
                {error && (
                  <Text className="text-red-500 text-sm">{error.message}</Text>
                )}
              </View>
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

          <CustomButton
            title="Sign Up"
            onPress={form.handleSubmit(onSubmit)}
            loading={isLoading}
            disabled={isLoading}
          />

          <View className="flex-row items-center justify-center">
            <Text className="text-muted-foreground text-base">
              Already have an account?&nbsp;
            </Text>
            <Link
              href={"/login"}
              className="text-primary text-base font-medium"
            >
              Login
            </Link>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;
