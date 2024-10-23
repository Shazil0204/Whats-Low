import React, { useEffect, useState } from "react";
import { Image, View, ImageStyle, StyleSheet } from "react-native";

interface ImageComponentProps {
  source: { uri: string };
  style?: ImageStyle;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ source, style }) => {
  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  useEffect(() => {
    Image.getSize(
      source.uri,
      (width, height) => {
        console.log(`Image dimensions: ${width}x${height}`); // Debugging line
        setAspectRatio(width / height);
      },
      (error) => {
        console.error("Failed to get image size:", error);
      }
    );
  }, [source.uri]);

  return (
    <View
      style={[styles.container, style, aspectRatio ? { aspectRatio } : null]}
    >
      {aspectRatio !== null ? (
        <Image
          source={source}
          style={[styles.image, { aspectRatio }]} // Set the aspect ratio dynamically
          resizeMode="contain"
          onLoad={() => console.log("Image loaded")}
          onError={(error) => console.error("Error loading image:", error)}
        />
      ) : (
        <View style={styles.placeholder} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%", // Full width of the parent
    backgroundColor: "lightgray", // Example background color for visibility
  },
  image: {
    width: "100%",
    height: undefined, // This allows the height to auto adjust
  },
  placeholder: {
    width: "100%",
    height: 200, // Placeholder height
    backgroundColor: "transparent", // or any color you prefer
  },
});

export default ImageComponent;
