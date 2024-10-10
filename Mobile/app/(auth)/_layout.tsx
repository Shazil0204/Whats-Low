import { StyleSheet, View } from "react-native";
import { Tabs } from "expo-router";
import TabBar from "../../components/Tab-Bar-component/tabbar";
import Header from "../../components/Header/header";

const AuthLayout = () => {
  return (
    <View style={styles.mainView}>
      <Header />
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen name="team" options={{ title: "Team" }} />
        <Tabs.Screen name="setting" options={{ title: "Setting" }} />
      </Tabs>
    </View>
  );
};

export default AuthLayout;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: "#001F3F",
  },
});
