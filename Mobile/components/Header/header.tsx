import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from "./logo";
import ProfileLink from "./profileLink";

const Header = () => {
  return (
    <View style={styles.mainView}>
      <Logo />
      <ProfileLink />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  mainView: {
    marginTop: 50,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
