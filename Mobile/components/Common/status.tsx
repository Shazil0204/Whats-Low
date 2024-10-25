import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

interface StatusComponentProps {
  status: "Required" | "HighPriority" | "Critical";
}

const StatusComponent: React.FC<StatusComponentProps> = ({ status }) => {
  const [useClicked, setUseClicked] = useState(false);

  const handleClick = () => {
    setUseClicked(!useClicked);
  };

  let statusColor: string;
  let textColor: string;

  switch (status) {
    case "Required":
      statusColor = "#8BC34A";
      textColor = "#000";
      break;
    case "HighPriority":
      statusColor = "#FFC107";
      textColor = "#000";
      break;
    case "Critical":
      statusColor = "#F44336";
      textColor = "#fff";
      break;
    default:
      statusColor = "gray";
      textColor = "#fff";
  }

  return (
    <TouchableOpacity
      onPress={handleClick}
      style={{
        top: -2,
        right: -2,
        height: 30,
        minWidth: 30,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 10,
        borderRadius: 25,
        backgroundColor: statusColor,
        borderWidth: 1,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: textColor,
          fontSize: 20,
        }}
      >
        {useClicked ? status : ""}
      </Text>
    </TouchableOpacity>
  );
};

export default StatusComponent;

const styles = StyleSheet.create({});
