import React, { useEffect, useState } from "react";
import { Image, View, ImageStyle, StyleSheet } from "react-native";

interface ImageComponentProps {
  source: { uri: string };
  style?: ImageStyle;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ source, style }) => {
  const [imageSize, setImageSize] = useState<{
    width: number;
    height: number;
  } | null>(null);

  useEffect(() => {
    Image.getSize(
      source.uri,
      (width, height) => {
        console.log(`Original Image dimensions: ${width}x${height}`); // Debugging line
        setImageSize({ width: width / 3, height: height / 3 }); // Scaling down by 1/3
      },
      (error) => {
        console.error("Failed to get image size:", error);
      }
    );
  }, [source.uri]);

  return (
    <View style={[styles.container, style]}>
      {imageSize ? (
        <Image
          source={source}
          style={[{ width: imageSize.width, height: imageSize.height }]} // Set reduced width & height
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
    alignItems: "center", // Centers the image horizontally
    justifyContent: "center", // Centers the image vertically
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.1)",
    padding: 2,
  },
  placeholder: {
    width: "100%",
    height: 200, // Placeholder height
    backgroundColor: "transparent", // or any color you prefer
  },
});

export default ImageComponent;
