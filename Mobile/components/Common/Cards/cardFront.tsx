import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

interface FrontSideComponent {
  onPressFlip: () => void;
}

const CardFront: React.FC<FrontSideComponent> = ({onPressFlip}) => {
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
      <Text>CardFront</Text>
      <Button title="see image" onPress={onPressFlip} />
    </View>
  );
};

export default CardFront;

const styles = StyleSheet.create({});
