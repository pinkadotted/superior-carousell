import { View, Text, Dimensions, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "../../screens/Home";
import Profile from "../../screens/Profile";
import Sell from "../../screens/Sell";
import { Avatar } from "react-native-paper";

const HomeName = "Home";
const ProfileName = "Profile";
const SellName = "Sell";

const Tab = createBottomTabNavigator();
const { width, height } = Dimensions.get("window");

const MainNavContainer = () => {
  return (
      <Tab.Navigator
        initialRouteName={HomeName}
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: "8%",
            alignItems: "center",
            justifyContent: "center",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === HomeName) {
              iconName = focused ? "shopping" : "shopping-outline";
            } else if (route.name === ProfileName) {
              iconName = focused ? "account-circle" : "account-circle-outline";
            } else if (route.name === SellName) {
              iconName = focused ? "plus-box" : "plus";
            }

            return (
              <Avatar.Icon
                icon={iconName}
                style={{ backgroundColor: "transparent", alignItems: "center" }}
                size={50}
                color="red"
              />
            );
          },
        })}
      >
        <Tab.Screen name={HomeName} component={Home} />
        <Tab.Screen name={SellName} component={Sell} />
        <Tab.Screen name={ProfileName} component={Profile} />
      </Tab.Navigator>
  );
};

export default MainNavContainer;
