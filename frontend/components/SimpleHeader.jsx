import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import MyIcon from "./utils/MyIcon";
import { fontSize } from "../styles/styles";

const SimpleHeader = (props) => {
  const navigate = useNavigation();
  return (
    <View style={styles.header}>
      <TouchableOpacity
        style={styles.backbutton}
        onPress={() => navigate.goBack()}
      >
        <MyIcon size={50} icon="keyboard-backspace" />
      </TouchableOpacity>
      <Text style={styles.headertext}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    minHeight: Dimensions.get("window").height * 0.1,
    maxHeight: Dimensions.get("window").height * 0.1,
    minWidth: "95%",
    maxWidth: "95%",
    // borderWidth: 2,
    // borderColor: "grey",
    padding: "2%",
  },
  headertext: {
    flex: 1,
    paddingRight: 50,
    textAlign: "center",
    // borderWidth: 2,
    // borderColor: "cyan",
    fontWeight: "bold",
    fontSize: fontSize*1.5,
  },
  backbutton: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 50,
    maxHeight: 50,
    minWidth: 50,
    maxWidth: 50,
  },
});
export default SimpleHeader;
