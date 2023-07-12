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
      <MySearchBar />
      <Appbar.Action icon="chat-outline" onPress={_handleSearch} size={30}/>
    </Appbar.Header>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },
});

export default Header;
