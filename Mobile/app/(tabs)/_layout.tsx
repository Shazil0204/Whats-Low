import React, { useEffect } from "react";
import { Tabs } from "expo-router";
import TabBar from "../../components/Tab-Bar-component/tabbar";
import { StatusBar, StyleSheet, View } from "react-native";
import Header from "../../components/Header/header";

const FrontTabLayout = () => {
  useEffect(() => {
    StatusBar.setBarStyle("light-content");
  }, []);

  return (
    <View style={styles.mainView}>
      <Header />
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="index" options={{ title: "Home" }} />
        <Tabs.Screen name="gallery" options={{ title: "Gallery" }} />
        <Tabs.Screen name="create" options={{ title: "Create" }} />
        <Tabs.Screen name="modify" options={{ title: "Modify" }} />
      </Tabs>
    </View>
  );
};

export default FrontTabLayout;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#001F3F",
  },
});
