import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Item from "../../components/Common/item";
import TestingItemStyling from "../../components/Common/testingItemStyling";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <TestingItemStyling
          status="Required"
          url="https://digitalassets.sallinggroup.com/image/upload/e_trim:2/w_287,h_287,c_pad,dpr_2.0,ar_1,q_40,f_auto,b_white,e_sharpen:80/49ddb9806dd086b3bacdb65b24099a9b"
          label="Bread"
          quantity={99}
          description="description"
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
