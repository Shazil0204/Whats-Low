// ButtonComponent.tsx
import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonComponentProps {
  onPress: () => void; // Function to call when the button is pressed
  title: string; // Button text
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  onPress,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonComponent;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007BFF", // Button background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    elevation: 3, // Adds shadow on Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 3.5, // Shadow radius
  },
  buttonText: {
    color: "#fff", // Text color for button
  },
});
