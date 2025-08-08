import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Radio } from "lucide-react-native";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import { router } from "expo-router";

interface ConnectionData {
  topic: string;
  message: string;
}

interface MqttMessage {
  id: string;
  topic: string;
  message: string;
  timestamp: string;
  type: "published" | "received";
}

const ConnectionTestScreen = () => {
  const [connectionData, setConnectionData] = useState<ConnectionData>({
    topic: "",
    message: "",
  });

  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [isSubscribed, setIsSubscribed] = useState<boolean>(false);
  const [messages, setMessages] = useState<MqttMessage[]>([
    {
      id: "1",
      topic: "sensors/temperature",
      message:
        '{"temperature": 25.6, "humidity": 60.2, "timestamp": "2024-08-07T10:30:00Z"}',
      timestamp: "10:30 AM",
      type: "received",
    },
    {
      id: "2",
      topic: "devices/control",
      message: '{"device_id": "pump_01", "action": "start", "duration": 300}',
      timestamp: "10:25 AM",
      type: "published",
    },
    {
      id: "3",
      topic: "alerts/system",
      message:
        '{"level": "warning", "message": "Low water level detected", "location": "tank_2"}',
      timestamp: "10:20 AM",
      type: "received",
    },
  ]);

  const handleBack = (): void => {
    router.back();
  };

  const handleSubscribe = (): void => {
    if (!connectionData.topic.trim()) {
      console.log("Please enter a topic");
      return;
    }

    setIsSubscribed(true);
    setIsConnected(true);
    console.log("Subscribed to topic:", connectionData.topic);

    // Simulate receiving a message after subscribing
    setTimeout(() => {
      const newMessage: MqttMessage = {
        id: Date.now().toString(),
        topic: connectionData.topic,
        message:
          '{"status": "subscribed", "topic": "' + connectionData.topic + '"}',
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "received",
      };
      setMessages((prev) => [newMessage, ...prev]);
    }, 1000);
  };

  const handlePublish = (): void => {
    if (!connectionData.topic.trim() || !connectionData.message.trim()) {
      console.log("Please enter both topic and message");
      return;
    }

    setIsConnected(true);
    console.log(
      "Publishing to topic:",
      connectionData.topic,
      "Message:",
      connectionData.message
    );

    // Add published message to the list
    const newMessage: MqttMessage = {
      id: Date.now().toString(),
      topic: connectionData.topic,
      message: connectionData.message,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "published",
    };

    setMessages((prev) => [newMessage, ...prev]);
  };

  const formatJsonMessage = (message: string): string => {
    try {
      const parsed = JSON.parse(message);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return message;
    }
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar barStyle="dark-content" />

        <View className="bg-background px-6 py-4 border-b border-border flex-row items-center justify-between">
          <TouchableOpacity
            onPress={handleBack}
            className="flex-row items-center gap-2"
          >
            <ChevronLeft color="#737373" />
            <Text className="text-foreground text-2xl font-medium">
              Connection Test
            </Text>
          </TouchableOpacity>

          <View className="flex-row items-center gap-2">
            <View
              className={`w-2 h-2 rounded-full ${isConnected ? "bg-green-500" : "bg-red-500"}`}
            />
            <Text
              className={`text-sm font-medium ${isConnected ? "text-green-600" : "text-red-600"}`}
            >
              {isConnected ? "Connected" : "Disconnected"}
            </Text>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="m-6 gap-6">
            <CustomInput
              label="MQTT Topic"
              placeholder="e.g. sensors/temperature"
              value={connectionData.topic}
              onChangeText={(text: string) =>
                setConnectionData({ ...connectionData, topic: text })
              }
              autoCapitalize="none"
            />

            <CustomInput
              label="Message"
              placeholder="e.g. Hello from Rotorsync"
              value={connectionData.message}
              onChangeText={(text: string) =>
                setConnectionData({ ...connectionData, message: text })
              }
            />

            <View className="flex-row gap-3">
              <View className="flex-1">
                <CustomButton
                  title="Subscribe"
                  onPress={handleSubscribe}
                  variant="outline"
                />
              </View>
              <View className="flex-1">
                <CustomButton title="Publish" onPress={handlePublish} />
              </View>
            </View>

            {isSubscribed && (
              <View className="bg-[#E0FFF5] border border-green-300 rounded-xl p-3">
                <View className="flex-row items-center gap-2">
                  <Radio color="#00bc7d" size={16} />
                  <Text className="text-primary text-sm font-medium">
                    Subscribed to: {connectionData.topic}
                  </Text>
                </View>
              </View>
            )}

            <View className="flex-row items-center justify-between">
              <Text className="text-foreground text-lg font-semibold">
                Message Log
              </Text>
              <Text className="text-muted-foreground text-sm">
                {messages.length} messages
              </Text>
            </View>

            {messages.length === 0 ? (
              <View className="py-8 items-center">
                <Text className="text-muted-foreground text-base">
                  No messages yet
                </Text>
                <Text className="text-muted-foreground text-sm mt-1">
                  Subscribe or publish to see messages here
                </Text>
              </View>
            ) : (
              <View className="gap-3">
                {messages.map((message) => (
                  <View
                    key={message.id}
                    className="bg-secondary border border-border rounded-xl p-4 gap-3"
                  >
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center gap-2">
                        <View
                          className={`w-2 h-2 rounded-full ${
                            message.type === "published"
                              ? "bg-blue-500"
                              : "bg-green-500"
                          }`}
                        />
                        <Text className="text-foreground font-medium">
                          {message.topic}
                        </Text>
                      </View>
                      <View className="flex-row items-center gap-2">
                        <Text className="text-muted-foreground text-xs uppercase tracking-wide">
                          {message.type}
                        </Text>
                        <Text className="text-muted-foreground text-sm">
                          {message.timestamp}
                        </Text>
                      </View>
                    </View>

                    <Text className="text-foreground text-sm font-mono leading-6">
                      {formatJsonMessage(message.message)}
                    </Text>
                  </View>
                ))}
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default ConnectionTestScreen;
