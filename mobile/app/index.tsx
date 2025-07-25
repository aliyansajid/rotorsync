import { Image, StatusBar, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import CustomButton from "@/components/CustomButton";

const OnboardingScreen = () => {
  const router = useRouter();

  const onGetStarted = () => {
    router.push("/sign-up");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />
      <View className="flex-1 mx-5 mb-8 justify-between">
        <View className="flex-1 justify-center">
          <Image
            source={require("../assets/images/banner.webp")}
            className="w-full h-80 mb-6 rounded-3xl"
            resizeMode="cover"
          />
          <Text className="text-foreground text-3xl font-bold text-center mb-2">
            Elevate Your Operations
          </Text>
          <Text className="text-muted-foreground text-lg text-center px-2">
            Your agricultural operations just got smarter. Monitor, manage, and
            maximize your fleet's performance.
          </Text>
        </View>
        <View className="gap-4">
          <CustomButton title="Get Started" onPress={onGetStarted} />

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
      </View>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
