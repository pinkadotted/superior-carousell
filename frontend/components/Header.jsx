import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Header = () => {
  return (
    <>
      <View style={styles.container}></View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "flex-start",
    // paddingTop: 50,
  },
});

export default Header;
