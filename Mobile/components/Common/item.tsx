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
        nestedScrollEnabled={true} // Allows for better scrolling experience if nested
      >
        <Text style={styles.description}>
          Description of the item. This description can be long and will scroll
          within the container without expanding it. Add more text here to
          testexpanding it. Add more text here to testexpanding it. Add more
          text here to test the scroll functionality.
        </Text>
      </ScrollView>
      {/* Action Container for Quantity and Button */}
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
    borderWidth: 2,
    borderColor: "yellow",
    borderRadius: 25,
    padding: 20,
    height: 320, // Height for the card
    width: "48%", // Adjust width as needed
    marginBottom: 20,
    backgroundColor: "#008080", // Example background color
    justifyContent: "space-between", // Ensure space between elements
    elevation: 5, // Adds shadow on Android
    shadowColor: "#000", // Shadow color for iOS
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
  descriptionContainer: {
    maxHeight: 60, // Maximum height for the description area
    marginBottom: 10, // Space between description and action container
  },
  descriptionContent: {
    paddingVertical: 10, // Padding inside the description container
  },
  description: {
    color: "#fff", // Text color for description
    fontSize: 16, // Increase font size for better readability
  },
  actionContainer: {
    flexDirection: "row", // Aligns quantity and button side by side
    justifyContent: "space-between", // Space them out evenly
    alignItems: "center", // Center items vertically
    width: "100%", // Ensure it takes the full width of itemDiv
  },
});
