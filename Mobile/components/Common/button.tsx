import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from "react-native";

interface CustomButtonProps {
  title: string;
  onPress: () => void; // Function to call when the button is pressed
  buttonStyle?: ViewStyle; // Optional style for the button
  titleStyle?: TextStyle; // Optional style for the title text
}
const ButtonComponent: React.FC<CustomButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity style={[buttonStyle]} onPress={onPress}>
      <Text style={[titleStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;
