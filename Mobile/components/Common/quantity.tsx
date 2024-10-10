// QuantityComponent.tsx
import React from "react";
import { Text, StyleSheet } from "react-native";

interface QuantityComponentProps {
  quantity: number; // Number of items
}

const QuantityComponent: React.FC<QuantityComponentProps> = ({ quantity }) => {
  return <Text style={styles.quantity}>Qty: {quantity}</Text>;
};

export default QuantityComponent;

const styles = StyleSheet.create({
  quantity: {
    color: "#fff", // Color for quantity text
    fontSize: 16, // Increase font size for better visibility
  },
});
