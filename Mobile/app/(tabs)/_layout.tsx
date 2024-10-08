import React from "react";
import { Tabs } from "expo-router";

const FrontTabLayout = () => {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen name="gallery" options={{ title: "Gallery" }} />
      <Tabs.Screen name="create" options={{ title: "Create" }} />
      <Tabs.Screen name="modify" options={{ title: "Modify" }} />
    </Tabs>
  );
};

export default FrontTabLayout;
