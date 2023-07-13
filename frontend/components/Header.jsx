import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import MySearchBar from "./MySearchBar";
import { colors } from "../styles/palette";

const Header = ({ isIdle }) => {
  const _handleSearch = () => console.log("Searching");

  return (
    <Appbar.Header
      style={{ backgroundColor: "transparent" }}
      statusBarHeight={0}
    >
      <MySearchBar isIdle={isIdle}/>
      <Appbar.Action
        icon="chat-outline"
        color={colors.caribbeancurrent}
        onPress={_handleSearch}
        size={30}
      />
    </Appbar.Header>
  );
};

export default Header;
