import SafeScreen from "@/components/SafeScreen";
import PinnedBox from "@/components/timeline/PinnedBox";
import TimelineFlow from "@/components/timeline/TimelineFlow";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const Timeline = () => {
  const [pinnedViewLayoutWidth, setPinnedViewLayoutWidth] = useState(0);
  return (
    <SafeScreen>
      <View className="p-2">
        <Text className="text-center text-[#2F2A25] text-3xl font-bold">
          LogLoom
        </Text>
        <Ionicons
          name="ellipsis-horizontal-circle-outline"
          size={24}
          color="#2F2A25"
          className="absolute right-5 top-2"
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ====Resume Last Entry==== */}
        <View className="my-3 mx-1 flex-col gap-1 rounded-xl bg-[#E1D9C7] p-2 px-4">
          <Text className="text-xl font-bold">Resume last entry</Text>
          <Text className="text-lg">
            You started capturing a thought earlier
          </Text>
          <View className="flex-row gap-2">
            <TouchableOpacity className="rounded-full bg-[#2F2A25] py-1 px-4 w-auto">
              <Text className="text-sm text-white">Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* ====Pinned Timeline==== */}
        <View className="rounded-xl bg-[#E1D9C7] px-4 py-3">
          <View className="flex-row items-center gap-1 mb-2">
            <MaterialCommunityIcons name="pin" size={16} color="#A19B93" />
            <Text>Pinned</Text>
          </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            onLayout={(e) => {
              setPinnedViewLayoutWidth(e.nativeEvent.layout.width);
            }}
          >
            {Array.from({ length: 10 }).map((_, index) => (
              <PinnedBox key={index} width={pinnedViewLayoutWidth / 2.25} />
            ))}
          </ScrollView>
        </View>
        {/* ====Timeline Flow==== */}
        <View className="py-2">
          <TimelineFlow
            chronology="Today"
            logs={[
              {
                title: "Morning Reflection",
                description:
                  "Focused on setting intentions for the week. Feeling a bit anxious but hope...",
                time: "12:00 AM",
                tags: ["Thought", "Anxiety"],
              },
              {
                title: "Morning Reflection",
                description:
                  "Focused on setting intentions for the week. Feeling a bit anxious but hope...",
                time: "12:00 AM",
                tags: ["Thought", "Anxiety"],
              },
              {
                title: "Morning Reflection",
                description:
                  "Focused on setting intentions for the week. Feeling a bit anxious but hope...",
                time: "12:00 AM",
                tags: ["Thought", "Anxiety"],
              },
            ]}
          />

          <TimelineFlow
            chronology="Tomorrow"
            logs={[
              {
                title: "Morning Reflection",
                description:
                  "Focused on setting intentions for the week. Feeling a bit anxious but hope...",
                time: "12:00 AM",
                tags: ["Thought", "Anxiety"],
              },
              {
                title: "Morning Reflection",
                description:
                  "Focused on setting intentions for the week. Feeling a bit anxious but hope...",
                time: "12:00 AM",
                tags: ["Thought", "Anxiety"],
              },
              {
                title: "Morning Reflection",
                description:
                  "Focused on setting intentions for the week. Feeling a bit anxious but hope...",
                time: "12:00 AM",
                tags: ["Thought", "Anxiety"],
              },
            ]}
          />
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default Timeline;
