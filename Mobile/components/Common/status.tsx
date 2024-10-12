import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface StatusComponentProps {
  status: "Needed" | "Urgent" | "Critical";
}

const StatusComponent: React.FC<StatusComponentProps> = ({ status }) => {
  let statusColor: string;

  switch (status) {
    case "Needed":
      statusColor = "green";
      break;
    case "Urgent":
      statusColor = "yellow";
      break;
    case "Critical":
      statusColor = "red";
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
      }}
    />
  );
};

export default StatusComponent;

const styles = StyleSheet.create({});
