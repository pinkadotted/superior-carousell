import * as React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import Home from "../../screens/Home";
import Sell from "../../screens/Sell";
import Profile from "../../screens/Profile";
import { View, Text, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

function MyBottomNav({activeRoute = "home-page"}) {
  const navigate = useNavigation();

  const navigationHandler = (key) => {
    switch (key) {
      case 0:
        navigate.navigate("home-page");
        break;
      case 1:
        navigate.navigate("sell-page");
        break;
      case 2:
        navigate.navigate("profile-page");
        break;
      default:
        navigate.navigate("home-page");
        break;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        minWidth: "100%",
        maxWidth: "100%",
        // borderWidth: 2,
        // borderColor: "cyan",
              borderTopColor: 'grey',
        borderTopWidth: 2,
        justifyContent: "space-around",
        alignItems: "center",
        position: "relative",
      }}
    >
      <TouchableOpacity onPress={() => navigationHandler(0)}>
        <Avatar.Icon
          icon={activeRoute === "home-page" ? "shopping" : "shopping-outline"}
          style={{ backgroundColor: "transparent", alignItems: "center" }}
          size={70}
          color="red"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigationHandler(1)}>
        <Avatar.Icon
          icon={activeRoute === "sell-page" ? "plus-box" : "plus-box-outline"}
          style={{ backgroundColor: "transparent", alignItems: "center" }}
          size={70}
          color="red"
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigationHandler(2)}>
        <Avatar.Icon
          icon={activeRoute === "profile-page" ? "account-circle" : "account-circle-outline"}
          style={{ backgroundColor: "transparent", alignItems: "center" }}
          size={70}
          color="red"
        />
      </TouchableOpacity>
    </View>
  );
}
export default MyBottomNav;
