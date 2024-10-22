// ItemComponent.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageComponent from "./image";
import ButtonComponent from "./button";
import QuantityComponent from "./quantity";
import StatusComponent from "./status";

interface ItemComponentProps {
  status: "Required" | "HighPriority" | "Critical";
  url: string;
  label: string;
  quantity: number;
  description: string;
  addedBy: string;
  dateAdded: Date;
  dueDate: Date;
  location: string;
}

const handleAddPress = () => {
  // Handle button press logic here
  console.log("Button pressed!");
};

const ItemComponent: React.FC<ItemComponentProps> = ({
  status,
  url,
  label,
  quantity,
  description,
  addedBy,
  dateAdded,
  dueDate,
  location,
}) => {
  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 25,
        position: "relative",
        padding: 20,
        backgroundColor: "#9BF272",
        gap: 10,
      }}
    >
      <StatusComponent status={status} />

      {/* this is for the top bar with title and add button */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            minWidth: "80%",
            maxWidth: "80%",
            fontWeight: "900",
          }}
        >
          {label}
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ButtonComponent onPress={handleAddPress} />
        </View>
      </View>

      {/* this is for the descripton */}
      <View style={{ width: "100%" }}>
        <Text style={{ fontSize: 20, fontWeight: "300" }}>{description}</Text>
      </View>

      {/* this is for the images and all other info */}
      <View style={{ flexDirection: "row", gap: 10 }}>
        {/* This is the Image component */}
        <ImageComponent
          source={{
            uri: url,
          }}
        />
        {/* this is all the information */}
        <View style={{ maxWidth: "28%", gap: 20 }}>
          {/* <Text style={{ fontSize: 40, fontWeight: "700" }}>{addedBy}</Text> */}
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Quantity</Text>
            <Text style={{ fontSize: 40, fontWeight: "700" }}>{quantity}</Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>location</Text>
            <Text style={{ fontSize: 40, fontWeight: "700" }}>{location}</Text>
          </View>

          <View>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Date Added </Text>
            <Text style={{ fontSize: 23, fontWeight: "700" }}>
              {dateAdded.toLocaleDateString()}
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 20, fontWeight: "500" }}>Due Date </Text>
            <Text style={{ fontSize: 23, fontWeight: "700" }}>
              {dueDate.toLocaleDateString()}
            </Text>
          </View>
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
