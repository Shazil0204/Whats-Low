import { StyleSheet, Text, View } from "react-native";
import React from "react";

const CardBack = () => {
  return (
    <View
      style={{
        height: 200,
        minWidth: "100%",
        backgroundColor: "orange",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
        position: "absolute",
      }}
    >
      <Text>CardBack</Text>
    </View>
  );
};

export default CardBack;

const styles = StyleSheet.create({});
