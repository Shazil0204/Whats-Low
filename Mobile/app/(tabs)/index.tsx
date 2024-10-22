import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Item from "../../components/Common/item";

const Home = () => {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.content}>
        <Item
          itemStatus="Urgent"
          itemUrl="https://i1.sndcdn.com/artworks-000494127912-y4jdnu-t1080x1080.jpg"
          itemText="bread"
          itemQuantity={99}
          itemDescription="Nothing"
          buttonTitle="Accept the task"
        />
        <Item
          itemStatus="Urgent"
          itemUrl="https://i1.sndcdn.com/artworks-000494127912-y4jdnu-t1080x1080.jpg"
          itemText="bread"
          itemQuantity={99}
          itemDescription="Nothing"
          buttonTitle="Accept the task"
        />
        <Item
          itemStatus="Urgent"
          itemUrl="https://i1.sndcdn.com/artworks-000494127912-y4jdnu-t1080x1080.jpg"
          itemText="bread"
          itemQuantity={99}
          itemDescription="Nothing"
          buttonTitle="Accept the task"
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eaeaea",
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
