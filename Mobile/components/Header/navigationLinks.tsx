import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link, useSegments } from "expo-router";

const HeaderNavigationLink = () => {
  const segments = useSegments();
  return (
    <View style={styles.mainView}>
      {segments[1] === "profile" ||
      segments[1] === "team" ||
      segments[1] === "setting" ? (
        <Link href="/(tabs)/">
          <Ionicons name="return-up-back-outline" size={60} color="black" />
        </Link>
      ) : (
        <Link href="/(auth)/profile">
          <Ionicons name="person-circle-outline" size={60} color="black" />
        </Link>
      )}
    </View>
  );
};

export default HeaderNavigationLink;

const styles = StyleSheet.create({
  mainView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
