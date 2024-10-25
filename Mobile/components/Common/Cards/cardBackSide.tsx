import { Button, StyleSheet, Image, View } from "react-native";
import React from "react";

interface BackSideComponent {
  onPressFlip: () => void;
  url: string;
}

const CardBack: React.FC<BackSideComponent> = ({ onPressFlip, url }) => {
  return (
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 10,
      }}
    >
      <Image
        style={{ width: "100%", height: "100%" }}
        resizeMode="contain"
        source={{
          uri: url,
        }}
      />
      <View style={{ position: "absolute", top: 0, zIndex: 0 }}>
        <Button title="See Details" onPress={onPressFlip} />
      </View>
    </View>
  );
};

export default CardBack;

const styles = StyleSheet.create({});
