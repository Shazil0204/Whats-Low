import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import ItemComponent from "../../components/Common/item";
import TestingCard from "../../components/Common/testingCard";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <TestingCard
          id={2}
          status="Critical"
          url="https://digitalassets.sallinggroup.com/image/upload/e_trim:2/e_sharpen:80,q_auto,f_auto,b_white,w_500/d70a98f5-599f-4599-94b2-0a6f4cbffbad"
          label="SØDMÆLK"
          quantity={99}
          description="Sødmælk 3,5% fra Arla 24 er en fyldig mælk med en sød smag."
          addedBy="John"
          dueDate={new Date("2024-12-31")}
          location="Bilka"
        />
        <TestingCard
          id={2}
          status="HighPriority"
          url="https://digitalassets.sallinggroup.com/image/upload/e_trim:2/e_sharpen:80,q_auto,f_auto,b_white,w_500/6250dd9f-e862-446f-b17c-4517f66f5d9c"
          label="SØDMÆLK"
          quantity={99}
          description="Sødmælk 3,5% fra Arla 24 er en fyldig mælk med en sød smag."
          addedBy="John"
          dueDate={new Date("2024-12-31")}
          location="Bilka"
        />
        <TestingCard
          id={2}
          status="Critical"
          url="https://digitalassets.sallinggroup.com/image/upload/e_trim:2/e_sharpen:80,q_auto,f_auto,b_white,w_1200,h_1200,c_pad/9ebfb843-b621-4b11-adac-6175774ae0ba"
          label="SØDMÆLK"
          quantity={99}
          description="Sødmælk 3,5% fra Arla 24 er en fyldig mælk med en sød smag."
          addedBy="John"
          dueDate={new Date("2024-12-31")}
          location="Bilka"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#193940",
  },
  content: {
    justifyContent: "space-between", // Ensures space between items
    padding: 20,
    paddingBottom: 150,
    gap: 20,
  },
});
