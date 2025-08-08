import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ChevronLeft, ChevronDown } from "lucide-react-native";
import CustomButton from "@/components/CustomButton";
import { useState } from "react";
import { router } from "expo-router";

const SerialNumberScreen = () => {
  const [selectedAssetType, setSelectedAssetType] = useState<string>("");
  const [selectedSerialNumber, setSelectedSerialNumber] = useState<string>("");
  const [showAssetDropdown, setShowAssetDropdown] = useState<boolean>(false);
  const [showSerialDropdown, setShowSerialDropdown] = useState<boolean>(false);

  // Asset types
  const assetTypes = ["Helicopter", "Trailer"];

  // Serial numbers based on asset type
  const helicopterSerials = [
    "H-2024-001",
    "H-2024-002",
    "H-2024-003",
    "H-2023-045",
    "H-2023-046",
  ];

  const trailerSerials = [
    "T-2024-101",
    "T-2024-102",
    "T-2024-103",
    "T-2023-089",
    "T-2023-090",
    "T-2023-091",
  ];

  const handleBack = (): void => {
    router.back();
  };

  const handleSave = (): void => {
    console.log("Saved:", {
      assetType: selectedAssetType,
      serialNumber: selectedSerialNumber,
    });
    // Handle save logic here
  };

  const getSerialNumbers = (): string[] => {
    if (selectedAssetType === "Helicopter") {
      return helicopterSerials;
    } else if (selectedAssetType === "Trailer") {
      return trailerSerials;
    }
    return [];
  };

  const handleAssetTypeChange = (assetType: string): void => {
    setSelectedAssetType(assetType);
    setSelectedSerialNumber(""); // Reset serial number when asset type changes
    setShowAssetDropdown(false);
  };

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
                  selectedAssetType
                    ? "text-foreground text-base"
                    : "text-muted-foreground text-base"
                }
              >
                {selectedAssetType || "Select asset type"}
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
              className={`border border-border rounded-xl px-4 h-16 flex-row items-center justify-between ${!selectedAssetType ? "opacity-50" : ""}`}
              onPress={() =>
                selectedAssetType && setShowSerialDropdown(!showSerialDropdown)
              }
              disabled={!selectedAssetType}
            >
              <Text
                className={
                  selectedSerialNumber
                    ? "text-foreground text-base"
                    : "text-muted-foreground text-base"
                }
              >
                {selectedSerialNumber ||
                  (selectedAssetType
                    ? "Select serial number"
                    : "Select asset type first")}
              </Text>
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

            {showSerialDropdown && selectedAssetType && (
              <View className="bg-secondary border border-border rounded-xl overflow-hidden">
                {getSerialNumbers().map((serialNumber, index) => (
                  <TouchableOpacity
                    key={serialNumber}
                    className={`p-4 ${index < getSerialNumbers().length - 1 ? "border-b border-border" : ""}`}
                    onPress={() => {
                      setSelectedSerialNumber(serialNumber);
                      setShowSerialDropdown(false);
                    }}
                  >
                    <Text className="text-foreground text-base">
                      {serialNumber}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          </View>

          <CustomButton
            title="Save"
            onPress={handleSave}
            disabled={!selectedAssetType || !selectedSerialNumber}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SerialNumberScreen;
