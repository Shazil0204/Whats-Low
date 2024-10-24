// ItemComponent.tsx
import React, { useRef, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
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
  const [flipped, setFlipped] = useState(false);
  const rotateValue = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    // Toggle the flip state
    setFlipped(!flipped);
    // Start the animation
    Animated.timing(rotateValue, {
      toValue: flipped ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  // Interpolating the rotation value
  const rotateY = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "180deg"],
  });

  const frontAnimatedStyle = {
    transform: [{ rotateY }],
    position: "absolute" as const, // Ensure type is correct
    backfaceVisibility: "hidden" as const, // Ensure type is correct
  };

  const backAnimatedStyle = {
    transform: [
      {
        rotateY: rotateValue.interpolate({
          inputRange: [0, 1],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
    position: "absolute" as const, // Ensure type is correct
    backfaceVisibility: "hidden" as const, // Ensure type is correct
  };

  return (
    <TouchableWithoutFeedback onPress={handlePress}>
      <View style={{ width: "100%", height: 300 }}>
        <Animated.View style={[frontAnimatedStyle, styles.card]}>
          <StatusComponent status={status} />
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.description}>{description}</Text>
          <View style={styles.infoContainer}>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Quantity</Text>
              <Text>{quantity}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Location</Text>
              <Text>{location}</Text>
            </View>
            <View style={styles.infoBox}>
              <Text style={styles.infoTitle}>Due Date</Text>
              <Text>{dueDate.toLocaleDateString()}</Text>
            </View>
          </View>
        </Animated.View>

        <Animated.View
          style={[backAnimatedStyle, styles.card, styles.backCard]}
        >
          <ImageComponent source={{ uri: url }} />
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  card: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 25,
    padding: 20,
    backgroundColor: "#fff",
    gap: 10,
    height: "100%",
  },
  backCard: {
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontWeight: "800",
    fontSize: 40,
    textAlign: "center",
  },
  description: {
    textAlign: "justify",
    lineHeight: 24, 
    paddingHorizontal: 2,
    width: "100%",
    fontWeight: "300",
    fontSize: 15,
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  infoBox: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    borderRadius: 25,
    width: "33%",
    paddingVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  infoTitle: {
    fontWeight: "700",
    fontSize: 18,
  },
});

export default ItemComponent;
