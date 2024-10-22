import { StyleSheet, Text, View } from "react-native";
import React from "react";
import StatusComponent from "./status";
import ButtonComponent from "./button";
import ImageComponent from "./image";

interface testingItemStylingComponentProps {
  status: "Required" | "HighPriority" | "Critical";
  url: string;
  label: string;
  quantity: number;
  description: string;
  addedBy: string;
  dateAdded: Date;
  dueDate: Date;
  location: string;
}

const handleAddPress = () => {
  // Handle button press logic here
  console.log("Button pressed!");
};

const TestingItemStyling: React.FC<testingItemStylingComponentProps> = ({
  status,
  url,
  label,
  quantity,
  description,
  addedBy,
  dateAdded,
  dueDate,
  location,
}) => {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 25,
        position: "relative",
        padding: 20,
        backgroundColor: "#fff",
        gap: 10,
      }}
    >
      <ImageComponent
        source={{ uri: url }}
        style={{ borderRadius: 10 }} // Optional additional styling
      />
    </View>
  );
};

export default TestingItemStyling;

const styles = StyleSheet.create({});
