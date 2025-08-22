import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Edit3 } from "lucide-react-native";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { authService, User } from "@/services/authService";
import { getUserInitials, formatRole, formatMemberSince } from "@/lib/utils";

const ProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);

  // Load user data from AsyncStorage
  const loadUserData = () => {
    const currentUser = authService.getCurrentUser();
    setUser(currentUser);
  };

  useEffect(() => {
    loadUserData();
  }, []);

  // Reload user data when screen comes into focus to catch any updates
  useFocusEffect(
    useCallback(() => {
      loadUserData();
    }, [])
  );

  const handleBack = (): void => {
    router.back();
  };

  const handleEditProfile = (): void => {
    router.push("/settings/edit-profile");
  };

  if (!user) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar barStyle="dark-content" />
        <View className="flex-1 items-center justify-center">
          <ActivityIndicator size="large" color="#00BC7D" />
          <Text className="text-muted-foreground text-lg mt-4">Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background px-6 py-4 border-b border-border flex-row items-center justify-between">
        <TouchableOpacity
          onPress={handleBack}
          className="flex-row items-center gap-2"
        >
          <ChevronLeft color="#737373" />
          <Text className="text-foreground text-2xl font-medium">Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleEditProfile}>
          <Edit3 color="#737373" />
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1 m-6">
        <View className="gap-6">
          <View className="items-center">
            <View className="flex items-center justify-center h-32 w-32 bg-primary rounded-full overflow-hidden">
              {user.image ? (
                <Image
                  source={{ uri: user.image }}
                  className="w-full h-full"
                  style={{ resizeMode: "cover" }}
                />
              ) : (
                <Text className="text-4xl font-semibold text-primary-foreground">
                  {getUserInitials(user.name)}
                </Text>
              )}
            </View>
          </View>

          <View className="gap-6">
            <View className="bg-secondary rounded-3xl p-6 gap-3">
              <Text className="text-muted-foreground text-base font-medium mb-3">
                Personal Information
              </Text>

              <View className="gap-2">
                <Text className="text-muted-foreground text-sm font-medium">
                  Name
                </Text>
                <Text className="text-foreground text-lg font-medium">
                  {user.name}
                </Text>
              </View>

              <View className="gap-2">
                <Text className="text-muted-foreground text-sm font-medium">
                  Email Address
                </Text>
                <Text className="text-foreground text-lg font-medium">
                  {user.email}
                </Text>
              </View>
            </View>

            <View className="bg-secondary rounded-3xl p-6 gap-3">
              <Text className="text-muted-foreground text-base font-medium mb-3">
                Account Information
              </Text>

              <View className="flex-row items-center justify-between">
                <Text className="text-foreground text-base font-medium">
                  Role
                </Text>
                <Text className="text-muted-foreground text-base">
                  {formatRole(user.role)}
                </Text>
              </View>

              <View className="border-b border-border" />

              <View className="flex-row items-center justify-between">
                <Text className="text-foreground text-base font-medium">
                  Member Since
                </Text>
                <Text className="text-muted-foreground text-base">
                  {formatMemberSince(user.createdAt)}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfileScreen;
