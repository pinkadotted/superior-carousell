import { View, Text } from "react-native";
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

const MainNavContainer = () => {
  return (
      <Tab.Navigator
          initialRouteName={HomeName}
          screenOptions={({ route }) => ({
              tabBarShowLabel: false,
              headerShown: false,
          tabBarStyle: {paddingBottom: 20,paddingTop: 20, height: '10%', alignItems: 'center', justifyContent: 'center'},
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
                  style={{ backgroundColor: 'transparent', alignItems: 'center' }}
                  size={50}
                  color="red"

                  
            />
          );
        },
      })}
    >
      <Tab.Screen
        name={HomeName}
        component={Home}
        // options={{
        //     tabBarLabel: "Home",
        //     tabBarLabelStyle: { fontSize: 15 }
        // }}
      />
      <Tab.Screen
        name={SellName}
        component={Sell}
        // options={{
        //     tabBarLabel: "Sell",
        //     tabBarLabelStyle: { fontSize: 15 }
        // }}
      />
      <Tab.Screen
        name={ProfileName}
        component={Profile}
            //   options={{
            //       tabBarShowLabel: false,
            //       tabBarActiveTintColor: 'red'
            //   }}
      />
    </Tab.Navigator>
  );
};

export default MainNavContainer;
