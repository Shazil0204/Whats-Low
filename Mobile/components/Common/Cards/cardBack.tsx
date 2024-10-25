import { Button, StyleSheet, Image, View } from "react-native";
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
          uri: "https://digitalassets.sallinggroup.com/image/upload/e_trim:2/e_sharpen:80,q_auto,f_auto,b_white,w_500/d70a98f5-599f-4599-94b2-0a6f4cbffbad",
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
