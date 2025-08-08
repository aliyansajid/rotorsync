import { StatusBar, Text, View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const MonitoringScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />
      <ScrollView className="flex-1">
        <View className="px-5 py-6">
          <Text className="text-foreground text-2xl font-bold mb-4">
            Fleet Monitoring
          </Text>
          <Text className="text-muted-foreground text-base">
            Monitor your agricultural fleet performance and status.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MonitoringScreen;
