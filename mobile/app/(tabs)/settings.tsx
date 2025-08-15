import CustomButton from "@/components/CustomButton";
import { Bell, ChevronRight, Hash, Wifi } from "lucide-react-native";
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import {
  useNotificationHandler,
  registerForPushNotificationsAsync,
  scheduleLocalNotification,
} from "@/services/notificationHandler";

type PermissionStatus = "granted" | "denied" | "undetermined";

const SettingsScreen = () => {
  const [notificationPermission, setNotificationPermission] =
    useState<PermissionStatus>("undetermined");
  const [pushToken, setPushToken] = useState<string | null>(null);

  // Initialize notification handlers
  useNotificationHandler();

  useEffect(() => {
    checkNotificationPermissions();
    setupPushNotifications();
  }, []);

  const checkNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setNotificationPermission(status as PermissionStatus);
  };

  const setupPushNotifications = async () => {
    const token = await registerForPushNotificationsAsync();
    setPushToken(token);
  };

  const handleProfilePress = () => {
    router.push("/settings/profile");
  };

  const handleConnectionTest = () => {
    router.push("/settings/connection-test");
  };

  const handleSerialNumber = () => {
    router.push("/settings/serial-number");
  };

  const handlePushNotification = async () => {
    try {
      // Check if we have permission
      const { status } = await Notifications.getPermissionsAsync();

      if (status !== "granted") {
        // Request permission if not granted
        const { status: newStatus } =
          await Notifications.requestPermissionsAsync();
        setNotificationPermission(newStatus as PermissionStatus);

        if (newStatus !== "granted") {
          Alert.alert(
            "Permission Required",
            "Please enable notifications in your device settings to test push notifications."
          );
          return;
        }
      }

      // Send test notification
      await scheduleLocalNotification(
        "Test Notification",
        "Push notifications are working",
        { screen: "settings" }
      );
    } catch (error) {
      Alert.alert("Error", "Failed to send test notification");
      console.error("Test notification error:", error);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background px-6 py-4 border-b border-border">
        <Text className="text-foreground text-2xl font-semibold">Settings</Text>
      </View>

      <ScrollView className="flex-1 m-6" showsVerticalScrollIndicator={false}>
        <View className="gap-6">
          <TouchableOpacity
            className="flex-row items-center justify-between bg-primary p-4 rounded-3xl"
            onPress={handleProfilePress}
          >
            <View className="flex-row items-center gap-3">
              <View className="flex items-center justify-center h-20 w-20 bg-white/20 rounded-full">
                <Text className="text-2xl font-semibold text-primary-foreground">
                  AS
                </Text>
              </View>
              <View>
                <Text className="text-primary-foreground text-2xl font-semibold">
                  Aliyan Sajid
                </Text>
                <Text className="text-muted text-base">
                  aliyansajid@gmail.com
                </Text>
              </View>
            </View>
            <ChevronRight color={"#fff"} size={20} />
          </TouchableOpacity>

          <View className="gap-3">
            <Text className="text-muted-foreground text-base font-medium px-2">
              General
            </Text>

            <View className="bg-secondary rounded-3xl">
              <TouchableOpacity
                className="p-4 flex-row items-center gap-3 border-b border-border"
                onPress={handleConnectionTest}
              >
                <View className="bg-primary-accent flex-row items-center justify-center h-12 w-12 rounded-full">
                  <Wifi color={"#00bc7d"} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Connection test
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                className="p-4 flex-row items-center gap-3 border-b border-border"
                onPress={handleSerialNumber}
              >
                <View className="bg-primary-accent flex-row items-center justify-center h-12 w-12 rounded-full">
                  <Hash color={"#00bc7d"} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Serial number
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                className="p-4 flex-row items-center gap-3"
                onPress={handlePushNotification}
              >
                <View className="bg-primary-accent flex-row items-center justify-center h-12 w-12 rounded-full">
                  <Bell color={"#00bc7d"} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Push notification
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <View className="mx-6">
        <CustomButton title="Logout" variant="destructive" />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
