import React from "react";
import { Text, View } from "react-native";

export const Chip = () => {
  return (
    <View className="rounded-full bg-[#D9D0C2] py-1 px-2">
      <Text className="text-sm">Thought</Text>
    </View>
  );
};

const PinnedBox = ({ width = "180px" }: { width?: string }) => {
  return (
    <View className={`w-[${width}] bg-[#F9F8F0] rounded-xl p-2 mr-4`}>
      <Text className="font-bold text-lg">Morning Reflection</Text>
      <Text className="text-sm">
        Focused on setting intentions for the week. Feeling a bit anxious but
        hope...
      </Text>
      <Text className="text-sm">12:00 AM</Text>
      <View className="flex-row gap-2 py-2">
        <Chip />
        <Chip />
      </View>
    </View>
  );
};

export default PinnedBox;
