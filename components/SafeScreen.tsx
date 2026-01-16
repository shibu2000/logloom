import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreen = ({ children }: { children: React.ReactNode }) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      className="flex-1 bg-[#F8F1E6] px-3"
      style={{ paddingTop: insets.top }}
    >
      {children}
    </View>
  );
};

export default SafeScreen;
