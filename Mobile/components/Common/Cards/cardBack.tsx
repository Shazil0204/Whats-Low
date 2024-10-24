import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

interface BackSideComponent {
  onPressFlip: () => void;
}

const CardBack: React.FC<BackSideComponent> = ({ onPressFlip }) => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "teal",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Text>CardBack</Text>
      <Button title="See Details" onPress={onPressFlip} />
    </View>
  );
};

export default CardBack;

const styles = StyleSheet.create({});
