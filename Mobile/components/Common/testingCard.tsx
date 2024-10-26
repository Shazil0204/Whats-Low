import {
  Dimensions,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import CardFront from "./Cards/cardFrontSide";
import CardBack from "./Cards/cardBackSide";

interface CardProps {
  // For Card Back Side Component
  url: string;

  // For Card Front Side Component
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

const testingCard: React.FC<CardProps> = ({
  url,
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
  const [isFlipped, setIsFlipped] = useState(false);

  const flipAnimation = useRef(new Animated.Value(0)).current;

  const frontInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["0deg", "180deg"],
  });

  const flipToFrontStyle = {
    transform: [{ rotateY: frontInterpolate }],
  };

  const backInterpolate = flipAnimation.interpolate({
    inputRange: [0, 180],
    outputRange: ["180deg", "360deg"],
  });

  const flipToBackStyle = {
    transform: [{ rotateY: backInterpolate }],
  };

  const flipCard = () => {
    if (isFlipped) {
      Animated.spring(flipAnimation, {
        toValue: 0,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
      console.log(isFlipped);
    } else {
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
      console.log(isFlipped);
    }
    setIsFlipped(!isFlipped);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.cardContainer}>
          <Animated.View
            style={[
              styles.front,
              styles.card,
              flipToFrontStyle,
              { zIndex: isFlipped ? 0 : 1 }, // ensures front is clickable when not flipped
            ]}
          >
            <CardFront
              onPressFlip={flipCard}
              id={id}
              status={status}
              label={label}
              quantity={quantity}
              description={description}
              addedBy={addedBy}
              dueDate={dueDate}
              location={location}
              addedDate={addedDate}
            />
          </Animated.View>
          <Animated.View
            style={[
              styles.back,
              styles.card,
              flipToBackStyle,
              { zIndex: isFlipped ? 1 : 0 }, // ensures back is clickable when flipped
            ]}
          >
            <CardBack onPressFlip={flipCard} url={url} />
          </Animated.View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

const { width, height } = Dimensions.get("screen");

export default testingCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    height: height / 4,
  },
  front: {
    minWidth: "100%",
  },
  back: {
    minWidth: "100%",
  },
  card: {
    height: height / 4,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    position: "absolute",
    backfaceVisibility: "hidden",
  },
  text: {
    color: "#fff",
  },
});
