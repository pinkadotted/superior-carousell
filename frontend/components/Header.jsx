import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import MySearchBar from "./MySearchBar";

const Header = () => {
  const _goBack = () => console.log("Went back");

  const _handleSearch = () => console.log("Searching");

  const _handleMore = () => console.log("Shown more");

  return (
    <Appbar.Header style={styles.container} statusBarHeight={0}>
      {/* <Appbar.BackAction onPress={_goBack} /> */}
          <Appbar.Action icon="menu" onPress={_handleSearch} size={30} />
      <MySearchBar />
      <Appbar.Action icon="chat-outline" onPress={_handleSearch} size={30}/>
      {/* <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    maxWidth: "100%",
    minWidth: "100%",
    // borderWidth: 2,
    // borderColor: "cyan",
  },
});

export default Header;
