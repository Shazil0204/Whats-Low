import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface StatusComponentProps {
  status: "Required" | "HighPriority" | "Critical";
}

const StatusComponent: React.FC<StatusComponentProps> = ({ status }) => {
  let statusColor: string;

  switch (status) {
    case "Required":
      statusColor = "#8BC34A";
      break;
    case "HighPriority":
      statusColor = "#FFC107";
      break;
    case "Critical":
      statusColor = "#F44336";
      break;
    default:
      statusColor = "gray";
  }

  return (
    <View
      style={{
        position: "absolute",
        top: -10,
        left: -10,
        height: 20,
        width: 20,
        borderRadius: 25,
        backgroundColor: statusColor,
        zIndex: 1,
        borderWidth: 1,
      }}
    />
  );
};

export default StatusComponent;

const styles = StyleSheet.create({});
