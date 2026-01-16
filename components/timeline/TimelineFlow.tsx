import { Entypo } from "@expo/vector-icons";
import React from "react";
import { Text, View } from "react-native";
import { Chip } from "./PinnedBox";

interface TimelineFlowType {
  chronology: string;
  logs: {
    title: string;
    description: string;
    time: string;
    tags: string[];
  }[];
}

const TimelineFlow = ({ chronology, logs }: TimelineFlowType) => {
  return (
    <View>
      <View className="flex-row items-center">
        <Entypo
          name="dot-single"
          size={24}
          color="#E3DCCF"
          style={{
            marginLeft: -3,
          }}
        />
        <Text className="text-[#746E68] font-bold ml-2">{chronology}</Text>
      </View>
      <View className="flex-row flex-wrap border-[#E3DCCF] border-l-2 ml-2 pl-3">
        {logs.map((item, key) => (
          <View className="p-2 w-1/2" key={key}>
            <View
              className={` bg-[#F9F8F0] rounded-xl p-2`}
              style={{
                backgroundColor: "#F9F8F0", // REQUIRED for Android
                borderRadius: 16, // REQUIRED for Android
                padding: 12,

                // Android
                elevation: 6,

                // iOS
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.15,
                shadowRadius: 6,
              }}
            >
              <Text className="font-bold text-lg">{item.title}</Text>
              <Text className="text-sm">{item.description}</Text>
              <Text className="text-sm">{item.time}</Text>
              <View className="flex-row gap-2 py-2">
                <Chip />
                <Chip />
              </View>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default TimelineFlow;
