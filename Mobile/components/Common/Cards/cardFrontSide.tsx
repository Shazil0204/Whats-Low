import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import StatusComponent from "../status";
import ButtonComponent from "../button";

interface FrontSideComponent {
  onPressFlip: () => void;
  id: number;
  status: "Required" | "HighPriority" | "Critical";
  label: string;
  quantity: number;
  description: string;
  addedBy: string;
  addedDate: Date;
  dueDate: Date;
  location: string;
}

function truncateText(text: string): string {
  return text.length > 30 ? text.slice(0, 40) + " ..." : text;
}

const CardFront: React.FC<FrontSideComponent> = ({
  onPressFlip,
  id,
  status,
  label,
  quantity,
  description,
  addedBy,
  addedDate,
  dueDate,
  location,
}) => {
  const showItemID = () => {
    console.log(id);
  };

  return (
    // This is my main View also my card main styling
    <View
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "#187272",
        borderRadius: 25,
      }}
    >
      {/* This is for my card header */}
      <View
        style={{
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 10,
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.3)",
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "500", fontSize: 25 }}>
          {label}
        </Text>
        <StatusComponent status={status} />
      </View>

      {/* This is my description and on click it will show me a model with full description */}
      <TouchableOpacity
        // onpress i will call a model that will show the whole description
        style={{
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.3)",
        }}
      >
        <Text style={{ color: "#fff", padding: 10, lineHeight: 22 }}>
          {truncateText(description)}
        </Text>
      </TouchableOpacity>

      {/* This is my basic Data for the item */}
      <View
        style={{
          flexDirection: "row",
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.3)",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Due Date */}
        <View style={{ gap: 10, paddingVertical: 5, alignItems: "center" }}>
          <Text style={{ color: "#fff", fontWeight: "300", fontSize: 15 }}>
            Due Date
          </Text>
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 17 }}>
            {dueDate.toLocaleDateString()}
          </Text>
        </View>

        {/* For style and seperate */}
        <View
          style={{
            height: "100%",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.3)",
          }}
        ></View>

        {/* Location */}
        <View style={{ gap: 10, paddingVertical: 5, alignItems: "center" }}>
          <Text style={{ color: "#fff", fontWeight: "300", fontSize: 15 }}>
            Location
          </Text>
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 17 }}>
            {location}
          </Text>
        </View>

        {/* For style and seperate */}
        <View
          style={{
            height: "100%",
            borderWidth: 1,
            borderColor: "rgba(255,255,255,0.3)",
          }}
        ></View>

        {/* Quantity */}
        <View style={{ gap: 10, paddingVertical: 5, alignItems: "center" }}>
          <Text style={{ color: "#fff", fontWeight: "300", fontSize: 15 }}>
            Quantity
          </Text>
          <Text style={{ color: "#fff", fontWeight: "500", fontSize: 17 }}>
            {quantity}
          </Text>
        </View>
      </View>

      {/* This is for my buttons */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          padding: 5,
          paddingHorizontal: 25,
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.3)",
          gap: 30,
        }}
      >
        <ButtonComponent
          buttonStyle={{
            flex: 1,
            backgroundColor: "#50C878",
            paddingVertical: 7,
            borderRadius: 25,
          }}
          titleStyle={{ textAlign: "center" }}
          title="See Image"
          onPress={onPressFlip}
        />
        <ButtonComponent
          buttonStyle={{
            flex: 1,
            backgroundColor: "#50C878",
            paddingVertical: 7,
            borderRadius: 25,
          }}
          titleStyle={{ textAlign: "center" }}
          title="Accept Task"
          onPress={showItemID}
        />
      </View>

      {/* this is just some extra details */}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 25,
          height: "auto",
          alignItems: "center",
          borderWidth: 2,
          borderColor: "rgba(255,255,255,0.3)",
          flex: 1,
          borderBottomLeftRadius: 25,
          borderBottomRightRadius: 25,
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "100", fontSize: 10 }}>
          {addedBy}
        </Text>
        <Text style={{ color: "#fff", fontWeight: "100", fontSize: 10 }}>
          {addedDate.toLocaleDateString()}
        </Text>
      </View>
    </View>
  );
};

export default CardFront;

const styles = StyleSheet.create({});

{
  /* <Button title="see image" onPress={onPressFlip} /> */
}
