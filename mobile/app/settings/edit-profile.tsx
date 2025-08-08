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
import { ChevronLeft, Camera } from "lucide-react-native";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState } from "react";
import { router } from "expo-router";

interface EditProfileData {
  name: string;
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
}

const EditProfileScreen = () => {
  const [profile, setProfile] = useState<EditProfileData>({
    name: "Aliyan Sajid",
    email: "aliyansajid@gmail.com",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPasswordFields, setShowPasswordFields] = useState<boolean>(false);

  const handleSave = (): void => {
    // Here you would typically save to your backend/storage
    console.log("Profile updated:", profile);
    router.back();
  };

  const handleCancel = (): void => {
    router.back();
  };

  const handleBack = (): void => {
    router.back();
  };

  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar barStyle="dark-content" />

        <View className="bg-background px-6 py-4 border-b border-border flex-row items-center">
          <TouchableOpacity
            onPress={handleBack}
            className="flex-row items-center gap-2"
          >
            <ChevronLeft color="#737373" />
            <Text className="text-foreground text-2xl font-medium">
              Edit Profile
            </Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
          <View className="m-6 gap-6">
            <View className="items-center gap-3">
              <View className="relative">
                <View className="flex items-center justify-center h-32 w-32 bg-primary rounded-full">
                  <Text className="text-4xl font-semibold text-primary-foreground">
                    AS
                  </Text>
                </View>

                <TouchableOpacity className="absolute -bottom-2 -right-2 bg-secondary p-3 rounded-full border-2 border-background">
                  <Camera color="#737373" size={20} />
                </TouchableOpacity>
              </View>
              <Text className="text-muted-foreground text-sm">
                Tap to change profile picture
              </Text>
            </View>

            <CustomInput
              label="Full Name"
              placeholder="Enter your name"
              value={profile.name}
              onChangeText={(text: string) =>
                setProfile({ ...profile, name: text })
              }
            />

            <CustomInput
              label="Email Address"
              placeholder="Enter your email"
              value={profile.email}
              onChangeText={(text: string) =>
                setProfile({ ...profile, email: text })
              }
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <CustomInput
              label="New Password"
              placeholder="Enter new password"
              value={profile.newPassword}
              onChangeText={(text: string) =>
                setProfile({ ...profile, newPassword: text })
              }
              secureTextEntry
              autoCapitalize="none"
            />

            <CustomInput
              label="Confirm New Password"
              placeholder="Confirm new password"
              value={profile.confirmPassword}
              onChangeText={(text: string) =>
                setProfile({ ...profile, confirmPassword: text })
              }
              secureTextEntry
              autoCapitalize="none"
            />

            <View className="gap-3">
              <CustomButton title="Save Changes" onPress={handleSave} />
              <CustomButton
                title="Cancel"
                variant="outline"
                onPress={handleCancel}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
