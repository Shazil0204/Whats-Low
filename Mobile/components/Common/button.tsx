// ButtonComponent.tsx
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

interface ButtonComponentProps {
  onPress: () => void; // Function to call when the button is pressed
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Ionicons name="add-circle" size={40} color="black" />
    </TouchableOpacity>
  );
};

export default ButtonComponent;
