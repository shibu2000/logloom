import React from "react";
import { Text, TextInput, View } from "react-native";

const InputField = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  return (
    <View>
      <Text className="text-lg">{label}</Text>
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
      >
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#9A948C"
          className="bg-transparent border border-[#D9D1C2]  rounded-2xl h-12 px-4 text-md"
        />
      </View>
    </View>
  );
};

export default InputField;
