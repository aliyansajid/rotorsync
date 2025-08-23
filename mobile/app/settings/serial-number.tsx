import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, ChevronDown } from "lucide-react-native";
import CustomButton from "@/components/CustomButton";
import { useState, useEffect } from "react";
import { router } from "expo-router";
import {
  serialNumberService,
  SerialNumber,
} from "@/services/serialNumberService";
import { authService } from "@/services/authService";

const SerialNumberScreen = () => {
  const [selectedAssetType, setSelectedAssetType] = useState<string>("");
  const [selectedSerialNumber, setSelectedSerialNumber] =
    useState<SerialNumber | null>(null);
  const [showAssetDropdown, setShowAssetDropdown] = useState<boolean>(false);
  const [showSerialDropdown, setShowSerialDropdown] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState<boolean>(false);
  const [serialNumbersByType, setSerialNumbersByType] = useState<{
    [key: string]: SerialNumber[];
  }>({});
  const [assetTypes, setAssetTypes] = useState<string[]>([]);

  // Get current user's serial number
  const currentSerialNumber = authService.getCurrentUser()?.serialNumber;
  const currentAssetType = currentSerialNumber?.assetType || "";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);

      const response = await serialNumberService.getSerialNumbers();

      if (!response.success || !response.data) {
        Alert.alert("Error", response.error || "Failed to load serial numbers");
        return;
      }

      const serialNumbers: SerialNumber[] = response.data;

      // Group by asset type
      const grouped = serialNumbers.reduce<{ [key: string]: SerialNumber[] }>(
        (acc, serialNumber) => {
          const assetType = serialNumber.assetType;
          if (!acc[assetType]) {
            acc[assetType] = [];
          }
          acc[assetType].push(serialNumber);
          return acc;
        },
        {}
      );

      // Get unique asset types
      const types = Array.from(
        new Set(serialNumbers.map((item) => item.assetType))
      ).sort();

      setSerialNumbersByType(grouped);
      setAssetTypes(types);
    } catch (error) {
      console.error("Error loading data:", error);
      Alert.alert("Error", "Failed to load serial numbers");
    } finally {
      setLoading(false);
    }
  };

  const handleBack = (): void => {
    router.back();
  };

  const handleSave = async (): Promise<void> => {
    if (!selectedSerialNumber) return;

    try {
      setSaving(true);

      const result = await serialNumberService.updateUserSerialNumber(
        selectedSerialNumber.id
      );

      if (result.success) {
        Alert.alert(
          "Success",
          result.message || "Serial number updated successfully",
          [
            {
              text: "OK",
              onPress: () => router.back(),
            },
          ]
        );
      } else {
        Alert.alert("Error", result.error || "Failed to save serial number");
      }
    } catch (error) {
      console.error("Error saving serial number:", error);
      Alert.alert("Error", "Failed to save serial number");
    } finally {
      setSaving(false);
    }
  };

  const getSerialNumbers = (): SerialNumber[] => {
    const assetType = selectedAssetType || currentAssetType;
    return serialNumbersByType[assetType] || [];
  };

  const handleAssetTypeChange = (assetType: string): void => {
    setSelectedAssetType(assetType);
    setSelectedSerialNumber(null);
    setShowAssetDropdown(false);
  };

  const getCurrentAssetType = (): string => {
    return selectedAssetType || currentAssetType;
  };

  const hasAssetTypeSelected = (): boolean => {
    return !!(selectedAssetType || currentAssetType);
  };

  useEffect(() => {
    if (currentAssetType && !selectedAssetType) {
      setSelectedAssetType(currentAssetType);
    }
  }, [currentAssetType]);

  if (loading) {
    return (
      <SafeAreaView className="flex-1 bg-background">
        <StatusBar barStyle="dark-content" />

        <View className="bg-background px-6 py-4 border-b border-border flex-row items-center">
          <TouchableOpacity
            onPress={handleBack}
            className="flex-row items-center gap-2"
          >
            <ChevronLeft color="#737373" />
            <Text className="text-foreground text-2xl font-medium">
              Serial Numbers
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-1 justify-center items-center">
          <ActivityIndicator size="large" color="#00BC7D" />
          <Text className="text-muted-foreground text-lg mt-4">Loading...</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background px-6 py-4 border-b border-border flex-row items-center">
        <TouchableOpacity
          onPress={handleBack}
          className="flex-row items-center gap-2"
        >
          <ChevronLeft color="#737373" />
          <Text className="text-foreground text-2xl font-medium">
            Serial Numbers
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          <View className="mb-2 gap-2">
            <Text className="text-foreground text-xl font-semibold">
              Equipment Selection
            </Text>
            <Text className="text-muted-foreground text-base">
              Select the asset type and serial number for the equipment you are
              currently operating
            </Text>
          </View>

          <View className="gap-2">
            <Text className="text-muted-foreground text-sm font-medium">
              Asset Type
            </Text>
            <TouchableOpacity
              className="border border-border rounded-xl px-4 h-16 flex-row items-center justify-between"
              onPress={() => setShowAssetDropdown(!showAssetDropdown)}
            >
              <Text
                className={
                  getCurrentAssetType()
                    ? "text-foreground text-base"
                    : "text-muted-foreground text-base"
                }
              >
                {getCurrentAssetType() || "Select asset type"}
              </Text>
              <ChevronDown
                color="#737373"
                size={20}
                style={{
                  transform: [
                    { rotate: showAssetDropdown ? "180deg" : "0deg" },
                  ],
                }}
              />
            </TouchableOpacity>

            {showAssetDropdown && (
              <View className="bg-secondary border border-border rounded-xl overflow-hidden">
                {assetTypes.map((assetType, index) => (
                  <TouchableOpacity
                    key={assetType}
                    className={`p-4 ${index < assetTypes.length - 1 ? "border-b border-border" : ""}`}
                    onPress={() => handleAssetTypeChange(assetType)}
                  >
                    <Text className="text-foreground text-base">
                      {assetType}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <View className="gap-2">
            <Text className="text-muted-foreground text-sm font-medium">
              Serial Number
            </Text>
            <TouchableOpacity
              className={`border border-border rounded-xl px-4 h-16 flex-row items-center justify-between ${!hasAssetTypeSelected() ? "opacity-50" : ""}`}
              onPress={() =>
                hasAssetTypeSelected() &&
                setShowSerialDropdown(!showSerialDropdown)
              }
              disabled={!hasAssetTypeSelected()}
            >
              <View className="flex-row items-center gap-1 flex-1">
                <Text
                  className={
                    selectedSerialNumber || currentSerialNumber
                      ? "text-foreground text-base font-medium"
                      : "text-muted-foreground text-base"
                  }
                >
                  {selectedSerialNumber
                    ? selectedSerialNumber.name
                    : currentSerialNumber
                      ? currentSerialNumber.name
                      : hasAssetTypeSelected()
                        ? "Select serial number"
                        : "Select asset type first"}
                </Text>
                {(selectedSerialNumber || currentSerialNumber) && (
                  <Text className="text-muted-foreground text-sm">
                    (
                    {selectedSerialNumber?.serialNumber ||
                      currentSerialNumber?.serialNumber}
                    )
                  </Text>
                )}
              </View>
              <ChevronDown
                color="#737373"
                size={20}
                style={{
                  transform: [
                    { rotate: showSerialDropdown ? "180deg" : "0deg" },
                  ],
                }}
              />
            </TouchableOpacity>

            {showSerialDropdown && hasAssetTypeSelected() && (
              <View className="bg-secondary border border-border rounded-xl overflow-hidden">
                {getSerialNumbers().map((serialNumber, index) => {
                  return (
                    <TouchableOpacity
                      key={serialNumber.id}
                      className={`flex-row items-center gap-1 p-4 ${
                        index < getSerialNumbers().length - 1
                          ? "border-b border-border"
                          : ""
                      }`}
                      onPress={() => {
                        setSelectedSerialNumber(serialNumber);
                        setShowSerialDropdown(false);
                      }}
                    >
                      <Text className="text-foreground text-base font-medium">
                        {serialNumber.name}
                      </Text>
                      <Text className="text-muted-foreground text-sm">
                        ({serialNumber.serialNumber})
                      </Text>
                    </TouchableOpacity>
                  );
                })}
              </View>
            )}
          </View>

          <CustomButton
            title="Save"
            onPress={handleSave}
            disabled={!selectedAssetType || !selectedSerialNumber || saving}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SerialNumberScreen;
