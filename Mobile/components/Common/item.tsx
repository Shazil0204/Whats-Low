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
  buttonTitle: string;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  itemStatus,
  itemUrl,
  itemText,
  itemQuantity,
  itemDescription,
  buttonTitle,
}) => {
  const handleAddPress = () => {
    // Handle button press logic here
    console.log("Button pressed!");
  };

  return (
    <View style={styles.itemContainer}>
      <StatusComponent status={itemStatus} />
      <ImageComponent
        source={{
          uri: itemUrl,
        }}
      />
      <View style={{ gap: 5 }}>
        <Text>Name: {itemText}</Text>
        <QuantityComponent quantity={itemQuantity} />
        <ScrollView
          style={styles.scrollViewStyle}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          <Text>
            hellohellohellohellohellohello hellohellohellohellohellohello
            hellohellohellohellohellohello hellohellohellohellohellohello
          </Text>
        </ScrollView>
        <ButtonComponent title={buttonTitle} onPress={handleAddPress} />
      </View>
    </View>
  );
};

export default ItemComponent;

const styles = StyleSheet.create({
  itemContainer: {
    width: "100%",
    padding: 5,
    backgroundColor: "#fff",
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
