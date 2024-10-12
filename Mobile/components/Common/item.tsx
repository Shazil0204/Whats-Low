// ItemComponent.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageComponent from "./image";
import ButtonComponent from "./button";
import QuantityComponent from "./quantity";

const ItemComponent: React.FC = () => {
  const handleAddPress = () => {
    // Handle button press logic here
    console.log("Button pressed!");
  };

  return (
    <View style={styles.itemDiv}>
      {/* Image at the top */}
      <ImageComponent source={{ uri: "https://via.placeholder.com/150" }} />
      {/* Description */}
      <ScrollView
        style={styles.descriptionContainer}
        contentContainerStyle={styles.descriptionContent}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled={true}
      >
        <Text style={styles.description}>
          Description of the item. This description can be long and will scroll
          within the container without expanding it. Add more text here to
          testexpanding it. Add more text here to testexpanding it. Add more
          text here to test the scroll functionality.
        </Text>
      </ScrollView>
      <View style={styles.actionContainer}>
        <QuantityComponent quantity={1} />
        <ButtonComponent title="Add" onPress={handleAddPress} />
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  itemDiv: {
    borderRadius: 5,
    padding: 20,
    height: 320,
    width: "48%",
    marginBottom: 20,
    backgroundColor: "#2e4574",
    justifyContent: "space-between",
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  descriptionContainer: {
    maxHeight: 60,
    marginBottom: 10,
  },
  descriptionContent: {
    paddingVertical: 10,
  },
  description: {
    color: "#fff",
    fontSize: 16,
  },
  actionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
});
