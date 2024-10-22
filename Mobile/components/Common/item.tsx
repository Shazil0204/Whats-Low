// ItemComponent.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageComponent from "./image";
import ButtonComponent from "./button";
import QuantityComponent from "./quantity";
import StatusComponent from "./status";

interface ItemComponentProps {
  itemStatus: "Needed" | "Urgent" | "Critical";
  itemUrl: string;
  itemText: string;
  itemQuantity: number;
  itemDescription: string;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  itemStatus,
  itemUrl,
  itemText,
  itemQuantity,
  itemDescription,
}) => {
  const handleAddPress = () => {
    // Handle button press logic here
    console.log("Button pressed!");
  };

  return (
    <View style={styles.itemContainer}>
      {/* <StatusComponent status={itemStatus} /> */}
      <ImageComponent
        source={{
          uri: itemUrl,
        }}
      />
      <View style={{ maxWidth: "auto", gap: 5, position: "relative" }}>
        <Text>Name: {itemText}</Text>
        <QuantityComponent quantity={itemQuantity} />
        <Text style={{ borderColor: "black", borderWidth: 2 }}>hello</Text>
        <View style={{ position: "absolute", bottom: 2, right: "50%" }}>
          <ButtonComponent onPress={handleAddPress} />
        </View>
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: 5,
    backgroundColor: "#9bf272",
    display: "flex",
    flexDirection: "row",
    gap: 5,
    position: "relative",
    borderRadius: 10,
  },
  scrollViewStyle: {
    maxHeight: 50,
    maxWidth: "70%",
  },
});
