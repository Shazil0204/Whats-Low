import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}></View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#001F3F",
  },
  content: {
    padding: 20,
  },
});
