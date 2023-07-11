import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const ProductDetails = () => {

    const navigate = useNavigation();

  return (
    <SafeAreaView style={styles.safeareacontainer}>
      {/* Top Buttons */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Avatar.Icon
            size={50}
            color="red"
            icon="keyboard-backspace"
            style={{ backgroundColor: "transparent", alignItems: "center" }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar.Icon
            size={50}
            color="red"
            icon="share-variant-outline"
            style={{ backgroundColor: "transparent", alignItems: "center" }}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        {/* Images section */}
        <View style={styles.verticalscrollviewcontainer}></View>
      </ScrollView>

      {/* Bottom Buttons */}
      <View style={styles.footer}>
        <View
          style={{
            // borderWidth: 2,
            // borderColor: "red",
            minWidth: "40%",
            maxWidth: "40%",
            maxHeight: "80%",
            minHeight: "80%",
          }}
        >
          <Button text="Chat" bgColor="white" textColor="black" />
        </View>
        <View
          style={{
            // borderWidth: 2,
            // borderColor: "red",
            minWidth: "40%",
            maxWidth: "40%",
            maxHeight: "80%",
            minHeight: "80%",
          }}
        >
          <Button text="Buy" bgColor="red" textColor="white" />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeareacontainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // borderWidth: 2,
    // borderColor: "magenta",
  },
  verticalscrollviewcontainer: {
    flex: 1,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "10%",
    maxHeight: "10%",
    paddingHorizontal: "5%",
    // borderWidth: 2,
    // borderColor: "cyan",
  },
  footer: {
    flex: 1,
    flexDirection: "row",
    minHeight: "10%",
    maxHeight: "10%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "2%",
    // borderWidth: 2,
    // borderColor: "cyan",
  },
});

export default ProductDetails;
