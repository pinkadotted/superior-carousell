import { View, Text, Platform, SafeAreaView } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NewLanding from "./screens/NewLanding";
import Register from "./screens/Register";
import Login from "./screens/Login";
import Home from "./screens/Home";
import Profile from "./screens/Profile";
import MainNavContainer from "./components/navigation/MainNavContainer";
import Sell from "./screens/Sell";
import Settings from "./screens/Settings";
import EditProfile from "./screens/settings/EditProfile";
import ChangePassword from "./screens/settings/ChangePassword";
import Logout from "./screens/settings/Logout";
import DeactivateAccount from "./screens/settings/DeactivateAccount";
import ProductDetails from "./screens/ProductDetails";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false, animation: 'fade' }} >
        <Stack.Group>
          <Stack.Screen name="new-landing" component={NewLanding} />
          <Stack.Screen name="email-register" component={Register} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="home-page" component={Home} />
          <Stack.Screen name="sell-page" component={Sell} />
          <Stack.Screen name="profile-page" component={Profile} />
          <Stack.Screen name="settings" component={Settings} />
          <Stack.Screen name="edit-profile" component={EditProfile} />
          <Stack.Screen name="change-password" component={ChangePassword} />
          <Stack.Screen name="logout" component={Logout} />
          <Stack.Screen name="deactivate-account" component={DeactivateAccount} />
          <Stack.Screen name="product-details" component={ProductDetails} />
          {/* <Stack.Screen name="main-nav" component={MainNavContainer} /> */}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Main;
