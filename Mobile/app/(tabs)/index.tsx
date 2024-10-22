import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import TestingItemStyling from "../../components/Common/testingItemStyling";
import ItemComponent from "../../components/Common/item";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <TestingItemStyling
          status="Critical"
          url="https://digitalassets.sallinggroup.com/image/upload/e_trim:2/e_sharpen:80,q_auto,f_auto,b_white,w_500/d70a98f5-599f-4599-94b2-0a6f4cbffbad"
          label="Solsikkerugbrød"
          quantity={99}
          description="Det Gode Solsikke Rugbrød fra Schulstad er et saftigt brød med en mild og rund smag. Brødet er bagt med Schulstads egen rugsurdej, fintmalet rugmel og en god portion solsikkekerner"
          addedBy="John Doe"
          dateAdded={new Date()}
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
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between", // Ensures space between items
    padding: 20,
    paddingBottom: 100,
    gap: 20,
  },
});
