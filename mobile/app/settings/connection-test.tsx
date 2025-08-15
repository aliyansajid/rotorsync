import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Radio } from "lucide-react-native";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import { useMqtt } from "@/hooks/useMqtt";

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

  const [subscribedTopics, setSubscribedTopics] = useState<string[]>([]);
  const [messages, setMessages] = useState<MqttMessage[]>([]);

  const {
    isConnected: mqttConnected,
    isConnecting: mqttConnecting,
    subscribe,
    onMessage,
    publish,
  } = useMqtt();

  // Set up MQTT message handling
  useEffect(() => {
    onMessage((topic, message) => {
      console.log(`Received message on topic ${topic}: ${message.toString()}`);

      const newMessage: MqttMessage = {
        id: Date.now().toString(),
        topic,
        message: message.toString(),
        timestamp: new Date().toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        }),
        type: "received",
      };

      setMessages((prev) => [newMessage, ...prev]);
    });
  }, [onMessage]);

  const handleBack = (): void => {
    router.back();
  };

  const handleSubscribe = (): void => {
    if (!connectionData.topic.trim()) {
      Alert.alert("Error", "Please enter a topic to subscribe to");
      return;
    }

    if (!mqttConnected) {
      Alert.alert(
        "Error",
        "MQTT is not connected. Please enable MQTT from the home screen first."
      );
      return;
    }

    if (subscribedTopics.includes(connectionData.topic)) {
      Alert.alert("Error", "Already subscribed to this topic");
      return;
    }

    subscribe(connectionData.topic);
    setSubscribedTopics((prev) => [...prev, connectionData.topic]);

    // Add subscription confirmation message
    const subscriptionMessage: MqttMessage = {
      id: Date.now().toString(),
      topic: connectionData.topic,
      message: `Subscribed to topic: ${connectionData.topic}`,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
      type: "received",
    };
    setMessages((prev) => [subscriptionMessage, ...prev]);

    // Clear topic input after subscribing
    setConnectionData((prev) => ({ ...prev, topic: "" }));
  };

  const handlePublish = (): void => {
    if (!connectionData.topic.trim() || !connectionData.message.trim()) {
      Alert.alert("Error", "Please enter both topic and message");
      return;
    }

    if (!mqttConnected) {
      Alert.alert(
        "Error",
        "MQTT is not connected. Please enable MQTT from the home screen first."
      );
      return;
    }

    publish(connectionData.topic, connectionData.message);

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

    // Clear inputs after publishing
    setConnectionData({ topic: "", message: "" });
  };

  const formatJsonMessage = (message: string): string => {
    try {
      const parsed = JSON.parse(message);
      return JSON.stringify(parsed, null, 2);
    } catch {
      return message;
    }
  };

  const getConnectionStatus = () => {
    if (mqttConnecting) return "Connecting...";
    if (mqttConnected) return "Connected";
    return "Disconnected";
  };

  const getConnectionColor = () => {
    if (mqttConnecting) return "text-orange";
    if (mqttConnected) return "text-primary";
    return "text-destructive";
  };

  const getConnectionDotColor = () => {
    if (mqttConnecting) return "bg-orange";
    if (mqttConnected) return "bg-primary";
    return "bg-destructive";
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
              className={`w-2 h-2 rounded-full ${getConnectionDotColor()}`}
            />
            <Text className={`text-sm font-medium ${getConnectionColor()}`}>
              {getConnectionStatus()}
            </Text>
          </View>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="m-6 gap-6">
            {!mqttConnected && (
              <View className="bg-orange-accent border border-orange-300 rounded-xl p-4">
                <Text className="text-orange-800 text-sm font-medium">
                  MQTT is not connected. Please go back to the home screen and
                  enable MQTT to start testing.
                </Text>
              </View>
            )}

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
                  disabled={!mqttConnected}
                />
              </View>
              <View className="flex-1">
                <CustomButton
                  title="Publish"
                  onPress={handlePublish}
                  disabled={!mqttConnected}
                />
              </View>
            </View>

            {subscribedTopics.length > 0 && (
              <View className="gap-2">
                <Text className="text-muted-foreground text-sm font-medium">
                  Subscribed Topics:
                </Text>
                {subscribedTopics.map((topic, index) => (
                  <View
                    key={index}
                    className="bg-primary-accent border border-green-300 rounded-xl p-3"
                  >
                    <View className="flex-row items-center gap-2">
                      <Radio color="#00bc7d" size={16} />
                      <Text className="text-primary text-sm font-medium">
                        {topic}
                      </Text>
                    </View>
                  </View>
                ))}
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
                  {mqttConnected
                    ? "Subscribe or publish to see messages here"
                    : "Connect MQTT from home screen to start testing"}
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
                              ? "bg-blue"
                              : "bg-primary"
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
