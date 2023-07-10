import * as React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Home from "../../screens/Home";
import Sell from "../../screens/Sell";
import Profile from "../../screens/Profile";

const Tab = createMaterialBottomTabNavigator();

function MyBottomNav() {
  const HomeName = "Home";
  const ProfileName = "Profile";
  const SellName = "Sell";
  return (
    <Tab.Navigator>
      <Tab.Screen name={HomeName} component={Home} />
      <Tab.Screen name={SellName} component={Sell} />
      <Tab.Screen name={ProfileName} component={Profile} />
    </Tab.Navigator>
  );
}
export default MyBottomNav;
