// ItemComponent.tsx
import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import ImageComponent from "./image";
import ButtonComponent from "./button";
import StatusComponent from "./status";

interface ItemComponentProps {
  id: number;
  status: "Required" | "HighPriority" | "Critical";
  url: string;
  label: string;
  quantity: number;
  description: string;
  addedBy: string;
  dueDate: Date;
  location: string;
}

const ItemComponent: React.FC<ItemComponentProps> = ({
  id,
  status,
  url,
  label,
  quantity,
  description,
  addedBy,
  dueDate,
  location,
}) => {
  const handleAddPress = () => {
    console.log("item id: ", id);
  };

  return (
    <View
      style={{
        width: "100%",
        borderWidth: 1,
        borderColor: "#fff",
        borderRadius: 25,
        position: "relative",
        padding: 20,
        backgroundColor: "#fff",
        gap: 10,
      }}
    >
      <StatusComponent status={status} />
      <ButtonComponent onPress={handleAddPress} />
      <Text style={{ fontWeight: "800", fontSize: 40 }}>{label}</Text>
      <ImageComponent
        source={{ uri: url }}
        style={{ borderRadius: 10 }} // Optional additional styling
      />
      <Text style={{ width: "100%", fontWeight: "300", fontSize: 25 }}>
        {description}
      </Text>
      <View style={{ gap: 20 }}>
        <View
          style={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <View style={{ width: "70%" }}>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Added by</Text>
            <Text style={{ fontWeight: "800", fontSize: 40 }}>{addedBy}</Text>
          </View>
          <View>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Location</Text>
            <Text style={{ fontWeight: "800", fontSize: 40 }}>{location}</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            gap: 2,
          }}
        >
          <View style={{ width: "70%" }}>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Due Date</Text>
            <Text style={{ fontWeight: "800", fontSize: 40 }}>
              {dueDate.toLocaleDateString()}
            </Text>
          </View>
          <View>
            <Text style={{ fontWeight: "800", fontSize: 20 }}>Quantity</Text>
            <Text style={{ fontWeight: "800", fontSize: 40 }}>{quantity}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemComponent;
