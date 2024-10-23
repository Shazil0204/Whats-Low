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
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
