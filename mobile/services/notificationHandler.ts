import * as Notifications from "expo-notifications";
import { useEffect, useRef } from "react";
import * as Device from "expo-device";
import Constants from "expo-constants";
import { Platform } from "react-native";

// Define types for notification data
interface NotificationData {
  screen?: string;
  deviceKey?: string;
  alertType?: "warning" | "error" | "info" | "success";
  timestamp?: string;
  [key: string]: any;
}

// Configure how notifications are handled when app is in foreground
Notifications.setNotificationHandler({
  handleNotification: async (notification) => {
    const data = notification.request.content.data as NotificationData;

    return {
      shouldShowAlert: true,
      shouldPlaySound: true, // Always play sound
      shouldSetBadge: true,
      shouldShowBanner: true, // Always show banner
      shouldShowList: true,
    };
  },
});

// Create notification channels for Android
const createNotificationChannels = async () => {
  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("mqtt-status", {
      name: "MQTT Connection Status",
      importance: Notifications.AndroidImportance.HIGH, // Changed to HIGH
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#00BC7D",
      sound: "default",
      description: "MQTT connection status notifications",
      enableLights: true,
      enableVibrate: true,
      showBadge: true,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
    });

    await Notifications.setNotificationChannelAsync("system-alerts", {
      name: "System Alerts",
      importance: Notifications.AndroidImportance.HIGH,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
      sound: "default",
      description: "Important system alerts and errors",
      enableLights: true,
      enableVibrate: true,
      showBadge: true,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.PUBLIC,
    });

    await Notifications.setNotificationChannelAsync("background-service", {
      name: "Background Service",
      importance: Notifications.AndroidImportance.LOW,
      sound: undefined, // Changed from null to undefined
      description: "Background MQTT service notifications",
      enableLights: false,
      enableVibrate: false,
      showBadge: false,
      lockscreenVisibility: Notifications.AndroidNotificationVisibility.SECRET,
    });
  }
};

export const useNotificationHandler = () => {
  const notificationListener = useRef<Notifications.Subscription | undefined>(
    undefined
  );
  const responseListener = useRef<Notifications.Subscription | undefined>(
    undefined
  );

  useEffect(() => {
    // Create notification channels
    createNotificationChannels();

    // Listen for notifications received while app is running
    notificationListener.current =
      Notifications.addNotificationReceivedListener(
        (notification: Notifications.Notification) => {
          console.log("Notification received:", notification);
        }
      );

    // Listen for user interactions with notifications
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(
        (response: Notifications.NotificationResponse) => {
          console.log("Notification response:", response);
          const data = response.notification.request.content
            .data as NotificationData;

          // Handle navigation or actions based on notification data
          if (data.screen) {
            console.log(`Should navigate to: ${data.screen}`);
            // You can implement navigation logic here if needed
          }
        }
      );

    return () => {
      if (notificationListener.current) {
        notificationListener.current.remove();
      }
      if (responseListener.current) {
        responseListener.current.remove();
      }
    };
  }, []);
};

// Helper function to register for push notifications
export const registerForPushNotificationsAsync = async (): Promise<
  string | null
> => {
  let token: string | null = null;

  // Check if running on physical device
  if (!Device.isDevice) {
    console.log("Must use physical device for Push Notifications");
    return null;
  }

  // Check existing permissions
  const { status: existingStatus } = await Notifications.getPermissionsAsync();
  let finalStatus = existingStatus;

  // Request permissions if not granted
  if (existingStatus !== "granted") {
    const { status } = await Notifications.requestPermissionsAsync({
      ios: {
        allowAlert: true,
        allowBadge: true,
        allowSound: true,
        allowCriticalAlerts: true,
      },
    });
    finalStatus = status;
  }

  if (finalStatus !== "granted") {
    console.log("Failed to get push token for push notification!");
    return null;
  }

  // Get the token
  try {
    const projectId =
      Constants.expoConfig?.extra?.eas?.projectId ??
      Constants.easConfig?.projectId;
    if (!projectId) {
      throw new Error("Project ID not found");
    }

    token = (await Notifications.getExpoPushTokenAsync({ projectId })).data;
    console.log("Expo Push Token:", token);
  } catch (error) {
    console.error("Error getting push token:", error);
  }

  return token;
};

// Enhanced local notification function
export const scheduleLocalNotification = async (
  title: string,
  body: string,
  data: NotificationData = {},
  priority: "default" | "high" = "default"
) => {
  const channelId =
    data.alertType === "error" || data.alertType === "warning"
      ? "system-alerts"
      : "mqtt-status";

  await Notifications.scheduleNotificationAsync({
    content: {
      title,
      body,
      data: {
        ...data,
        timestamp: new Date().toISOString(),
      },
      sound: true, // Always enable sound
      priority:
        priority === "high"
          ? Notifications.AndroidNotificationPriority.HIGH
          : Notifications.AndroidNotificationPriority.DEFAULT,
      vibrate: [0, 250, 250, 250],
      ...(Platform.OS === "android" && {
        channelId,
      }),
    },
    trigger: null,
  });
};

// Enhanced MQTT status notifications
export const notifyMqttStatus = async (
  status: "connected" | "disconnected" | "reconnecting",
  details?: string
) => {
  const config = {
    connected: {
      title: "MQTT Connected",
      body: "Successfully connected to MQTT broker",
      alertType: "success" as const,
      priority: "high" as const,
    },
    disconnected: {
      title: "MQTT Disconnected",
      body: details || "Lost connection to MQTT broker",
      alertType: "warning" as const,
      priority: "high" as const,
    },
    reconnecting: {
      title: "MQTT Reconnecting",
      body: details || "Attempting to reconnect to MQTT broker...",
      alertType: "info" as const,
      priority: "default" as const,
    },
  };

  const { title, body, alertType, priority } = config[status];

  await scheduleLocalNotification(
    title,
    body,
    {
      alertType,
      screen: "home",
    },
    priority
  );
};

// Background service notification (persistent)
export const showBackgroundServiceNotification = async () => {
  await Notifications.scheduleNotificationAsync({
    content: {
      title: "MQTT Service Running",
      body: "Maintaining connection in background",
      data: {
        persistent: true,
        alertType: "info",
      },
      sound: false,
      priority: Notifications.AndroidNotificationPriority.LOW,
      ...(Platform.OS === "android" && {
        channelId: "background-service",
        sticky: true,
        ongoing: true,
      }),
    },
    trigger: null,
    identifier: "mqtt-background-service",
  });
};

// Remove background service notification
export const removeBackgroundServiceNotification = async () => {
  await Notifications.dismissNotificationAsync("mqtt-background-service");
};
