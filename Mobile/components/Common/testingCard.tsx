import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Animated,
  Button,
} from "react-native";
import React, { useRef, useState } from "react";
import CardFront from "./Cards/cardFront";
import CardBack from "./Cards/cardBack";

const testingCard = () => {
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
    } else {
      Animated.spring(flipAnimation, {
        toValue: 180,
        friction: 8,
        tension: 10,
        useNativeDriver: true,
      }).start();
    }
    setIsFlipped(!isFlipped);
  };
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback>
        <View style={styles.cardContainer}>
          <Animated.View style={[styles.front, styles.card, flipToFrontStyle]}>
            <CardFront onPressFlip={flipCard} />
          </Animated.View>
          <Animated.View style={[styles.back, styles.card, flipToBackStyle]}>
            <CardBack onPressFlip={flipCard} />
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
    backgroundColor: "teal",
  },
  back: {
    minWidth: "100%",
    backgroundColor: "green",
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
