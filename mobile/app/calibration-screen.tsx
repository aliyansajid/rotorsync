import {
  StatusBar,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Alert,
  Modal,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  ChevronLeft,
  Share2,
  X,
  Check,
  ArrowRight,
  ChevronRight,
  PencilLine,
  Trash,
  Import,
} from "lucide-react-native";
import { router } from "expo-router";
import { useState } from "react";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

interface CalibrationPoint {
  point: number;
  gallons: number;
}

interface ShareUser {
  id: string;
  name: string;
  avatar: string;
  isSelected: boolean;
}

const CalibrationScreen = () => {
  const [tankSize, setTankSize] = useState("20.3");
  const [calibrationPoints, setCalibrationPoints] = useState("10");
  const [showShareModal, setShowShareModal] = useState(false);
  const [calibrationData, setCalibrationData] = useState<CalibrationPoint[]>([
    { point: 1, gallons: 0.2 },
    { point: 5, gallons: 1.0 },
    { point: 10, gallons: 2.0 },
    { point: 25, gallons: 5.1 },
    { point: 50, gallons: 10.2 },
    { point: 75, gallons: 15.2 },
    { point: 100, gallons: 20.3 },
  ]);

  const [shareUsers, setShareUsers] = useState<ShareUser[]>([
    { id: "1", name: "John Smith", avatar: "JS", isSelected: false },
    { id: "2", name: "Sarah Wilson", avatar: "SW", isSelected: false },
    { id: "3", name: "Mike Johnson", avatar: "MJ", isSelected: false },
    { id: "4", name: "Emily Davis", avatar: "ED", isSelected: false },
    { id: "5", name: "Alex Brown", avatar: "AB", isSelected: false },
    { id: "6", name: "Lisa Chen", avatar: "LC", isSelected: false },
  ]);

  const handleBack = (): void => {
    router.back();
  };

  const handleContinueCalibration = () => {
    Alert.alert(
      "Start Manual Calibration",
      "This will guide you through the manual calibration process. Make sure your tank is accessible.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Start",
          onPress: () => console.log("Starting calibration..."),
        },
      ]
    );
  };

  const handleEditCalibration = () => {
    router.push("/edit-calibration");
  };

  const handleResetCalibration = () => {
    Alert.alert(
      "Reset Calibration",
      "This will clear all calibration data. Are you sure?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Reset",
          style: "destructive",
          onPress: () => {
            setCalibrationData([]);
            Alert.alert("Success", "Calibration data has been reset.");
          },
        },
      ]
    );
  };

  const handleShare = () => {
    setShowShareModal(true);
  };

  const handleImportCSV = () => {
    Alert.alert(
      "Import Calibration Data",
      "Select a CSV file with calibration points. File should contain 'point' and 'gallons' columns.",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Select File",
          onPress: () => console.log("Opening file picker..."),
        },
      ]
    );
  };

  const toggleUserSelection = (userId: string) => {
    setShareUsers((prev) =>
      prev.map((user) =>
        user.id === userId ? { ...user, isSelected: !user.isSelected } : user
      )
    );
  };

  const handleSendShare = () => {
    const selectedUsers = shareUsers.filter((user) => user.isSelected);
    if (selectedUsers.length === 0) {
      Alert.alert(
        "No Users Selected",
        "Please select at least one user to share with."
      );
      return;
    }

    Alert.alert(
      "Share Calibration",
      `Calibration data will be shared with ${selectedUsers.length} user(s).`,
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Send",
          onPress: () => {
            setShowShareModal(false);
            setShareUsers((prev) =>
              prev.map((user) => ({ ...user, isSelected: false }))
            );
            Alert.alert("Success", "Calibration data has been shared!");
          },
        },
      ]
    );
  };

  const ActionButton = ({
    icon,
    title,
    onPress,
    color = "#00bc7d",
  }: {
    icon: React.ReactNode;
    title: string;
    onPress: () => void;
    color?: string;
  }) => (
    <TouchableOpacity
      onPress={onPress}
      className="flex-row items-center gap-3 bg-secondary rounded-xl p-4"
    >
      <View
        style={{ backgroundColor: `${color}20` }}
        className="w-10 h-10 rounded-lg items-center justify-center"
      >
        {icon}
      </View>
      <Text className="text-foreground text-lg font-medium flex-1">
        {title}
      </Text>
      <View
        className="w-6 h-6 rounded-full items-center justify-center"
        style={{ backgroundColor: color }}
      >
        <Text className="text-white text-xs font-bold">→</Text>
      </View>
    </TouchableOpacity>
  );

  const CalibrationPointCard = ({ point }: { point: CalibrationPoint }) => (
    <View className="bg-secondary rounded-lg p-3 flex-row justify-between items-center">
      <Text className="text-foreground font-medium">Point {point.point}%</Text>
      <Text className="text-muted-foreground">{point.gallons} gal</Text>
    </View>
  );

  const ShareUserItem = ({ user }: { user: ShareUser }) => (
    <TouchableOpacity
      onPress={() => toggleUserSelection(user.id)}
      className={`flex-row items-center p-3 rounded-xl mb-3 ${
        user.isSelected
          ? "bg-primary-accent border border-green-300"
          : "bg-secondary"
      }`}
    >
      <View className="w-12 h-12 bg-primary-accent rounded-full items-center justify-center mr-3">
        <Text className="text-primary font-semibold">{user.avatar}</Text>
      </View>
      <Text className="text-foreground font-medium flex-1">{user.name}</Text>
      {user.isSelected && <Check color="#00bc7d" size={20} />}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView className="flex-1 bg-background">
      <StatusBar barStyle="dark-content" />

      <View className="bg-background px-6 py-4 border-b border-border flex-row items-center justify-between">
        <TouchableOpacity
          onPress={handleBack}
          className="flex-row items-center gap-2"
        >
          <ChevronLeft color="#737373" />
          <Text className="text-foreground text-2xl font-medium">
            Calibration Setup
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1" showsVerticalScrollIndicator={false}>
        <View className="m-6 gap-6">
          <View className="mb-2 gap-2">
            <Text className="text-foreground text-xl font-semibold">
              Tank Configuration
            </Text>
            <Text className="text-muted-foreground text-base">
              Configure your tank settings
            </Text>
          </View>

          <View className="gap-4">
            <CustomInput
              label="Tank size (gallons)"
              placeholder="1000"
              keyboardType="decimal-pad"
              onChangeText={setTankSize}
              value={tankSize}
            />
            <CustomInput
              label="Calibration points"
              placeholder="50"
              keyboardType="decimal-pad"
              onChangeText={setTankSize}
              value={tankSize}
            />
          </View>

          <View className="gap-3">
            <Text className="text-muted-foreground text-base font-medium px-2">
              Actions
            </Text>

            <View className="bg-secondary rounded-3xl">
              <TouchableOpacity
                className="p-4 flex-row items-center gap-3 border-b border-border"
                onPress={handleContinueCalibration}
              >
                <View className="flex-row items-center justify-center rounded-xl">
                  <ArrowRight color={"#00bc7d"} size={20} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Continue manual calibration
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                className="p-4 flex-row items-center gap-3 border-b border-border"
                onPress={handleContinueCalibration}
              >
                <View className="flex-row items-center justify-center rounded-xl">
                  <Import color={"#00bc7d"} size={20} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Import from csv
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                className="p-4 flex-row items-center border-b border-border gap-3"
                onPress={handleEditCalibration}
              >
                <View className="flex-row items-center justify-center rounded-xl">
                  <PencilLine color={"#00bc7d"} size={20} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Edit calibration points
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>

              <TouchableOpacity
                className="p-4 flex-row items-center border-b border-border gap-3"
                onPress={handleResetCalibration}
              >
                <View className="flex-row items-center justify-center rounded-xl">
                  <Trash color={"#00bc7d"} size={20} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Reset calibration points
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                className="p-4 flex-row items-center gap-3"
                onPress={handleShare}
              >
                <View className="flex-row items-center justify-center rounded-xl">
                  <Share2 color={"#00bc7d"} size={20} />
                </View>

                <View className="flex-1">
                  <Text className="text-foreground text-lg font-medium">
                    Share
                  </Text>
                </View>
                <ChevronRight color={"#737373"} size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showShareModal}
        animationType="slide"
        presentationStyle="pageSheet"
        onRequestClose={() => setShowShareModal(false)}
      >
        <SafeAreaView className="flex-1 bg-background">
          <View className="flex-row items-center justify-between p-6 border-b border-border">
            <Text className="text-foreground text-xl font-semibold">
              Share Calibration
            </Text>
            <TouchableOpacity onPress={() => setShowShareModal(false)}>
              <X color="#737373" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 p-6">
            <Text className="text-muted-foreground text-sm mb-4">
              Select users to share calibration data with:
            </Text>

            <FlatList
              data={shareUsers}
              renderItem={({ item }) => <ShareUserItem user={item} />}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
            />
          </View>

          <View className="p-6 border-t border-border">
            <CustomButton title="Share" onPress={handleSendShare} />
          </View>
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

export default CalibrationScreen;
