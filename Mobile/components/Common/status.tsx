import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface StatusComponentProps {
  status: "Needed" | "Urgent" | "Critical";
}

const StatusComponent: React.FC<StatusComponentProps> = ({ status }) => {
  let statusColor: string;

  switch (status) {
    case "Needed":
      statusColor = "#8BC34A";
      break;
    case "Urgent":
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
        top: -5,
        left: -5,
        height: 20,
        width: 20,
        borderRadius: 25,
        backgroundColor: statusColor,
        zIndex: 1,
      }}
    />
  );
};

export default StatusComponent;

const styles = StyleSheet.create({});
