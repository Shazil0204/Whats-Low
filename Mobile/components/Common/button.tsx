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
    position: "absolute",
    bottom: 1,
    width: 185, // Fixed width, you can adjust this value
    backgroundColor: "#007BFF",
    paddingVertical: 10, // Padding for vertical space
    borderRadius: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3.5,
    alignSelf: "center", // Centers the button within its parent container
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
  },
});
