import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Edit3 } from "lucide-react-native";
import { router } from "expo-router";

interface ProfileData {
  name: string;
  email: string;
  role: string;
  memberSince: string;
  lastLogin: string;
}

const ProfileScreen = () => {
  const profile: ProfileData = {
    name: "Aliyan Sajid",
    email: "aliyansajid@gmail.com",
    role: "Administrator",
    memberSince: "Jan 2024",
    lastLogin: "Today",
  };

  const handleBack = (): void => {
    router.back();
  };

  const handleEditProfile = (): void => {
    router.push("/settings/edit-profile");
  };

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
            <View className="flex items-center justify-center h-32 w-32 bg-primary rounded-full">
              <Text className="text-4xl font-semibold text-primary-foreground">
                AS
              </Text>
            </View>
          </View>
          <View className="gap-6">
            <View className="bg-secondary rounded-3xl p-6 gap-3">
              <Text className="text-muted-foreground text-base font-medium mb-3">
                Personal Information
              </Text>

              <View className="gap-2">
                <Text className="text-muted-foreground text-sm font-medium">
                  Full Name
                </Text>
                <Text className="text-foreground text-lg font-medium">
                  {profile.name}
                </Text>
              </View>

              <View className="gap-2">
                <Text className="text-muted-foreground text-sm font-medium">
                  Email Address
                </Text>
                <Text className="text-foreground text-lg font-medium">
                  {profile.email}
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
                <Text className="text-muted-foreground text-base">Admin</Text>
              </View>

              <View className="border-b border-border" />

              <View className="flex-row items-center justify-between">
                <Text className="text-foreground text-base font-medium">
                  Member Since
                </Text>
                <Text className="text-muted-foreground text-base">
                  Aug 2025
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
