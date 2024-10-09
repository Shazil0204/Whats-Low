import { Tabs } from "expo-router";
import TabBar from "../../components/Tab-Bar-component/tabbar";

const AuthLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{ headerShown: false }}
        tabBar={(props) => <TabBar {...props} />}
      >
        <Tabs.Screen name="profile" options={{ title: "Profile" }} />
        <Tabs.Screen name="team" options={{ title: "Team" }} />
        <Tabs.Screen name="setting" options={{ title: "Setting" }} />
      </Tabs>
    </>
  );
};

export default AuthLayout;
