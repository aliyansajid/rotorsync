import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";

export default function HomeScreen() {
  const router = useRouter();

  const handleLogout = () => {
    router.replace("/");
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <View className="flex-1 justify-center items-center">
        <Text className="text-foreground text-2xl font-bold">
          Welcome to Your Home Screen!
        </Text>
        <TouchableOpacity
          className="h-16 bg-primary rounded-full items-center justify-center mt-6"
          onPress={handleLogout}
        >
          <Text className="text-primary-foreground text-xl font-semibold">
            Log Out
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
