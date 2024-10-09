import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "expo-router";

const ProfileLink = () => {
  return (
    <View style={styles.mainView}>
      <Link href="/(auth)/profile">
        <Ionicons name="person-circle-outline" size={60} color="white" />
      </Link>
    </View>
  );
};

export default ProfileLink;

const styles = StyleSheet.create({
  mainView: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});
