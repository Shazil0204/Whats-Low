import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "./logo";
import HeaderNavigationLink from "./navigationLinks";

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Logo />
      <HeaderNavigationLink />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: "#193940",
    marginTop: 42,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
