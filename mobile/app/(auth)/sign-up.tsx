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
import { Link } from "expo-router";
import { UserPlus } from "lucide-react-native";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

const SignUpScreen = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSignUp = () => {
    console.log("Sign up with:", name, email, password);
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
          <CustomInput
            label="Name"
            placeholder="John Doe"
            value={name}
            onChangeText={setName}
            autoCapitalize="words"
          />

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

          <CustomButton title="Sign Up" onPress={onSignUp} />

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
