import CustomButton from "@/components/CustomButton";
import { Bell, ChevronRight, Hash, Wifi } from "lucide-react-native";
import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { useEffect, useState, useCallback } from "react";
import { useFocusEffect } from "@react-navigation/native";
import * as Notifications from "expo-notifications";
import {
  useNotificationHandler,
  registerForPushNotificationsAsync,
  scheduleLocalNotification,
} from "@/services/notificationHandler";
import { authService, User } from "@/services/authService";

type PermissionStatus = "granted" | "denied" | "undetermined";

const SettingsScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const [notificationPermission, setNotificationPermission] =
    useState<PermissionStatus>("undetermined");

  // Initialize notification handlers
  useNotificationHandler();

  // Simple user data loading - just use cached data for instant display
  const loadUserData = () => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  };

  useEffect(() => {
    loadUserData();
    checkNotificationPermissions();
    setupPushNotifications();
  }, []);

  // Reload user data when screen comes into focus (instant from cache)
  useFocusEffect(
    useCallback(() => {
      loadUserData();
    }, [])
  );

  // Function to get user initials
  const getUserInitials = (fullName: string): string => {
    if (!fullName) return "U";

    const names = fullName.trim().split(" ");
    if (names.length === 1) {
      return names[0].charAt(0).toUpperCase();
    }

    return (
      names[0].charAt(0) + names[names.length - 1].charAt(0)
    ).toUpperCase();
  };

  const checkNotificationPermissions = async () => {
    const { status } = await Notifications.getPermissionsAsync();
    setNotificationPermission(status as PermissionStatus);
  };

  const setupPushNotifications = async () => {
    const token = await registerForPushNotificationsAsync();
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

  const handleLogout = async () => {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        style: "cancel",
      },
      {
        text: "Logout",
        style: "destructive",
        onPress: async () => {
          try {
            await authService.logout();
            router.replace("/login");
          } catch (error) {
            console.error("Logout error:", error);
            Alert.alert("Error", "Failed to logout. Please try again.");
          }
        },
      },
    ]);
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
              <View className="flex items-center justify-center h-20 w-20 bg-white/20 rounded-full overflow-hidden">
                {user?.image ? (
                  <Image
                    source={{ uri: user.image }}
                    className="w-full h-full"
                    style={{ resizeMode: "cover" }}
                  />
                ) : (
                  <Text className="text-2xl font-semibold text-primary-foreground">
                    {user ? getUserInitials(user.name) : "U"}
                  </Text>
                )}
              </View>
              <View>
                <Text className="text-primary-foreground text-2xl font-semibold">
                  {user ? user.name : "Loading..."}
                </Text>
                <Text className="text-muted text-base">
                  {user ? user.email : "Loading..."}
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
        <CustomButton
          title="Logout"
          variant="destructive"
          onPress={handleLogout}
        />
      </View>
    </SafeAreaView>
  );
};

export default SettingsScreen;
