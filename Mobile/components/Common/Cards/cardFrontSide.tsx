import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

interface FrontSideComponent {
  onPressFlip: () => void;
  id: number;
  status: "Required" | "HighPriority" | "Critical";
  label: string;
  quantity: number;
  description: string;
  addedBy: string;
  dueDate: Date;
  location: string;
}

const CardFront: React.FC<FrontSideComponent> = ({
  onPressFlip,
  id,
  status,
  label,
  quantity,
  description,
  addedBy,
  dueDate,
  location,
}) => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "cyan",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Text>{label}</Text>
      <Button title="see image" onPress={onPressFlip} />
    </View>
  );
};

export default CardFront;

const styles = StyleSheet.create({});
