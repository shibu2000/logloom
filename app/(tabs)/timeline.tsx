import React from "react";
import { Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const Timeline = () => {
  const insects = useSafeAreaInsets();
  return (
    <View
      className={`flex-1`}
      style={{
        paddingTop: insects.top,
      }}
    >
      <Text>Timeline</Text>
    </View>
  );
};

export default Timeline;
