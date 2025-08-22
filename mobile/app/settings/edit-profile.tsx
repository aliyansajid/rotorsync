import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
  Image,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, Camera } from "lucide-react-native";
import CustomButton from "@/components/CustomButton";
import CustomInput from "@/components/CustomInput";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import * as ImagePicker from "expo-image-picker";
import { authService, User } from "@/services/authService";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { editProfileSchema } from "@/schema";
import { getUserInitials } from "@/lib/utils";

const EditProfileScreen = () => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm<z.infer<typeof editProfileSchema>>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      name: "",
      email: "",
      image: "",
      newPassword: "",
    },
    mode: "onChange",
  });

  useEffect(() => {
    loadUserData();
    requestPermissions();
  }, []);

  const loadUserData = () => {
    // Use cached data from AsyncStorage for instant display
    const currentUser = authService.getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
      // Set form values with user data
      form.reset({
        name: currentUser.name,
        email: currentUser.email,
        image: currentUser.image || "",
        newPassword: "",
      });
    }
  };

  // Request permissions for image picker
  const requestPermissions = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== "granted") {
      Alert.alert(
        "Permission Required",
        "Sorry, we need camera roll permissions to change your profile picture."
      );
    }
  };

  const pickImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: "images",
        allowsEditing: true,
        aspect: [1, 1],
        quality: 0.8,
      });

      if (!result.canceled && result.assets[0]) {
        form.setValue("image", result.assets[0].uri);
      }
    } catch (error) {
      console.error("Error picking image:", error);
      Alert.alert("Error", "Failed to pick image. Please try again.");
    }
  };

  const onSubmit = async (values: z.infer<typeof editProfileSchema>) => {
    setLoading(true);

    try {
      // Prepare update data
      const updateData: any = {
        name: values.name.trim(),
        email: values.email.trim().toLowerCase(),
      };

      // Add image if it's changed and not empty
      if (values.image && values.image !== user?.image) {
        updateData.image = values.image;
      }

      // Add password if provided and not empty
      if (values.newPassword && values.newPassword.trim()) {
        updateData.newPassword = values.newPassword;
      }

      const result = await authService.updateProfile(updateData);

      if (!result.success) {
        form.setError("root", {
          type: "server",
          message: result.error || "Unable to update profile",
        });
        return;
      }

      // Update local user state with new data
      const updatedUser = authService.getCurrentUser();
      if (updatedUser) {
        setUser(updatedUser);
      }

      Alert.alert("Success", result.message, [
        {
          text: "OK",
          onPress: () => {
            router.back();
          },
        },
      ]);
    } catch (error) {
      console.error("Profile update error:", error);
      form.setError("root", {
        type: "server",
        message: "Network error. Please check your connection and try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = (): void => {
    router.back();
  };

  const handleBack = (): void => {
    router.back();
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

  const currentImage = form.watch("image");
  const currentName = form.watch("name");

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
            {form.formState.errors.root && (
              <View className="bg-red-50 border border-red-200 rounded-lg p-4">
                <Text className="text-red-600 text-sm">
                  {form.formState.errors.root.message}
                </Text>
              </View>
            )}

            <View className="items-center gap-3">
              <View className="relative">
                <TouchableOpacity onPress={pickImage}>
                  <View className="flex items-center justify-center h-32 w-32 bg-primary rounded-full overflow-hidden">
                    {currentImage ? (
                      <Image
                        source={{ uri: currentImage }}
                        className="w-full h-full"
                        style={{ resizeMode: "cover" }}
                      />
                    ) : (
                      <Text className="text-4xl font-semibold text-primary-foreground">
                        {getUserInitials(currentName)}
                      </Text>
                    )}
                  </View>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={pickImage}
                  className="absolute -bottom-2 -right-2 bg-secondary p-3 rounded-full border-2 border-background"
                >
                  <Camera color="#737373" size={20} />
                </TouchableOpacity>
              </View>
              <Text className="text-muted-foreground text-sm text-center">
                Tap to change profile picture
              </Text>
              {form.formState.errors.image && (
                <Text className="text-red-500 text-sm">
                  {form.formState.errors.image.message}
                </Text>
              )}
            </View>

            <Controller
              control={form.control}
              name="name"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInput
                  label="Name"
                  placeholder="John Doe"
                  value={value}
                  onChangeText={onChange}
                  autoCapitalize="words"
                  error={error?.message}
                />
              )}
            />

            <Controller
              control={form.control}
              name="email"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInput
                  label="Email Address"
                  placeholder="m@example.com"
                  value={value}
                  onChangeText={onChange}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  error={error?.message}
                />
              )}
            />

            <Controller
              control={form.control}
              name="newPassword"
              render={({
                field: { onChange, value },
                fieldState: { error },
              }) => (
                <CustomInput
                  label="New Password (Optional)"
                  placeholder="Enter new password"
                  value={value || ""}
                  onChangeText={onChange}
                  secureTextEntry
                  autoCapitalize="none"
                  error={error?.message}
                />
              )}
            />

            <View className="gap-3">
              <CustomButton
                title="Save Changes"
                onPress={form.handleSubmit(onSubmit)}
                loading={loading}
                disabled={loading}
              />
              <CustomButton
                title="Cancel"
                variant="outline"
                onPress={handleCancel}
                disabled={loading}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

export default EditProfileScreen;
