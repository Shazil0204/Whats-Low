// ButtonComponent.tsx
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface ButtonComponentProps {
  onPress: () => void; // Function to call when the button is pressed
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        position: "absolute",
        bottom: -1,
        right: -1,
        zIndex: 1,
      }}
    >
      <Ionicons
        name="checkmark-circle-outline"
        size={40}
        color="white"
        backgroundColor="green"
        style={{
          borderTopLeftRadius: 25,
          borderBottomRightRadius: 25,
          padding: 10,
        }}
      />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
