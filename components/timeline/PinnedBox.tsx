import React from "react";
import { Text, View } from "react-native";

export const Chip = () => {
  return (
    <View className="rounded-full bg-[#D9D0C2] py-1 px-2">
      <Text className="text-sm">Thought</Text>
    </View>
  );
};

const PinnedBox = ({ width }: { width: number }) => {
  return (
    <View className={`bg-[#F9F8F0] rounded-xl p-2 mr-4`} style={{ width }}>
      <Text
        className="font-bold text-lg"
        numberOfLines={2}
        ellipsizeMode="tail"
      >
        Morning Reflection
      </Text>
      <Text className="text-sm" numberOfLines={3} ellipsizeMode="tail">
        Focused on setting intentions for the week. Feeling a bit anxious but
        hope
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
