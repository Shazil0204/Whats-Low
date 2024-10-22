import React from "react";
import { Image as RNImage, StyleSheet, ImageStyle } from "react-native";

interface ImageComponentProps {
  source: { uri: string }; // Define the type for the image source
  style?: ImageStyle; // Optional additional styles
}

const ImageComponent: React.FC<ImageComponentProps> = ({ source, style }) => {
  return (
    <RNImage
      source={source}
      style={[styles.image, style]}
      resizeMode="contain"
    />
  );
};

export default ImageComponent;

const styles = StyleSheet.create({
  image: {
    width: "60%", // Full width of the container
    height: "auto", // Set the height as needed
  },
});
