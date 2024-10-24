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
        top: -2,
        right: -2,
        height: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
        borderTopRightRadius: 25,
        backgroundColor: statusColor,
        borderWidth: 1,
      }}
    >
      <Text style={{ textAlign: "center", color: "#fff" }}>{status}</Text>
    </View>
  );
};

export default StatusComponent;

const styles = StyleSheet.create({});
