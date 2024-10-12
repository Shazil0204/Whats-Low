// ItemComponent.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageComponent from "./image";
import ButtonComponent from "./button";
import QuantityComponent from "./quantity";
import StatusComponent from "./status";

const ItemComponent: React.FC = () => {
  const handleAddPress = () => {
    // Handle button press logic here
    console.log("Button pressed!");
  };

  return (
    <View
      style={{
        width: "100%",
        padding: 5,
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "row",
        gap: 5,
        position: "relative",
      }}
    >
      <StatusComponent status="Needed" />
      <ImageComponent
        source={{
          uri: "https://i1.sndcdn.com/artworks-000494127912-y4jdnu-t1080x1080.jpg",
        }}
      />
      <View style={{ gap: 5 }}>
        <Text>Name: </Text>
        <QuantityComponent quantity={1} />
        <ScrollView
          style={{ maxHeight: 50, maxWidth: "70%" }}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <Text>
            Description of the item. This description can be long and will
            scroll within the container without expanding it. Add more text here
            to testexpanding it. Add more text here to testexpanding it. Add
            more text here to test the scroll functionality.
          </Text>
        </ScrollView>
        <ButtonComponent title="Add" onPress={handleAddPress} />
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({});
