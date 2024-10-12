import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import React, { useEffect, useState } from "react";
import * as Font from "expo-font";
import { Link } from "expo-router";

const loadFonts = async () => {
  await Font.loadAsync({
    "Caveat-Bold": require("../../assets/font/Caveat-Bold.ttf"),
  });
};

const Logo = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    loadFonts().then(() => setFontsLoaded(true));
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View>
      <Text style={styles.logoText}>
        <Link href="/(tabs)/">What's Low? </Link>
      </Text>
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logoText: {
    fontSize: 40,
    color: "#fff",
    padding: 20,
    fontFamily: "Caveat-Bold",
    transform: [{ rotate: "-5deg" }],
    textShadowColor: "black",
    textShadowRadius: 1,
    textShadowOffset: {
      width: 2,
      height: 2,
    },
  },
});
