import "../global.css";
import { Stack } from "expo-router";
import { useNotificationHandler } from "@/services/notificationHandler";

export default function RootLayout() {
  useNotificationHandler();

  return <Stack screenOptions={{ headerShown: false }} />;
}
