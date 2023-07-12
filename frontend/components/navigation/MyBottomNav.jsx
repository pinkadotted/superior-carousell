import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MyIcon from "../utils/MyIcon";
import { colors } from "../../styles/palette";
import { simpleComponents } from "../../styles/styles";

function MyBottomNav({ activeRoute = "home-page" }) {
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
    <View style={simpleComponents.bottomnav}>
      <TouchableOpacity onPress={() => navigationHandler(0)}>
        <MyIcon
          icon={activeRoute === "home-page" ? "shopping" : "shopping-outline"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigationHandler(1)}>
        <MyIcon
          icon={activeRoute === "sell-page" ? "plus-box" : "plus-box-outline"}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigationHandler(2)}>
        <MyIcon
          icon={
            activeRoute === "profile-page"
              ? "account-circle"
              : "account-circle-outline"
          }
        />
      </TouchableOpacity>
    </View>
  );
}
export default MyBottomNav;
