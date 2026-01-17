import InputField from "@/components/capture/InputField";
import SafeScreen from "@/components/SafeScreen";
import { AntDesign } from "@expo/vector-icons";
import { Link } from "expo-router";
import React from "react";
import { ScrollView, Text, TextInput, View } from "react-native";

const Capture = () => {
  return (
    <SafeScreen>
      <View className="flex-row items-center p-2">
        <Link href="/">
          <AntDesign name="close" size={24} color="#8C867F" />
        </Link>

        <Text className="flex-1 text-center text-[#2F2A25] text-3xl font-light">
          New Entry
        </Text>

        {/* Spacer to balance left icon */}
        <View style={{ width: 24 }} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="mt-8 px-2">
        <View className="flex-col gap-2">
          <Text className="text-3xl">Situation</Text>
          <View
            style={{
              // Android
              elevation: 6,

              // iOS
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.15,
              shadowRadius: 6,
            }}
            className="rounded-3xl"
          >
            <TextInput
              placeholder="What triggered this moment?"
              placeholderTextColor="#9A948C"
              className="bg-[#FCFCFC] rounded-2xl h-14 px-4 text-lg"
            />
          </View>
        </View>
        <View className="ps-4">
          <View className="flex-col gap-5 py-5 mt-4 pl-4 relative">
            <InputField
              label="Problem"
              placeholder="What was the core issue?"
            />
            <InputField
              label="Action"
              placeholder="What did you do or plan to do?"
            />
            <InputField
              label="Outcome"
              placeholder="What happened or what do you expect?"
            />

            {/* Flow indicator */}
            <View className="absolute left-0 inset-y-0 items-center">
              <View className="w-px flex-1 bg-[#D0C9BB]" />
              <AntDesign name="arrow-down" size={14} color="#D0C9BB" />
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeScreen>
  );
};

export default Capture;
