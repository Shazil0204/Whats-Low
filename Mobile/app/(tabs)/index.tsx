import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Link style={styles.text} href="/(auth)/profile">
          Go
        </Link>
        <Text style={styles.text}>Item 1</Text>
        <Text style={styles.text}>Item 2</Text>
        <Text style={styles.text}>Item 3</Text>
        <Text style={styles.text}>Item 4</Text>
        <Text style={styles.text}>Item 5</Text>
      </View>
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
  text: {
    fontSize: 50,
    color: "green",
    fontWeight: "bold",
  },
});
