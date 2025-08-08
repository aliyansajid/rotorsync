import { Tabs } from "expo-router";
import { Home, Activity, Map, Settings } from "lucide-react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#00bc7d",
        tabBarInactiveTintColor: "#737373",
        tabBarStyle: {
          backgroundColor: "#ffffff",
          borderTopWidth: 1,
          borderTopColor: "#e5e5e5",
          height: 84,
          paddingBottom: 8,
          paddingTop: 8,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
        },
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="monitoring"
        options={{
          title: "Monitoring",
          tabBarIcon: ({ color, size }) => (
            <Activity size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: "Map",
          tabBarIcon: ({ color, size }) => <Map size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Settings size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
