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
  Dimensions,
} from "react-native";
import React from "react";
import Button from "../components/Button";
import { Avatar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import HorizontalImagesScroll from "../components/HorizontalImagesScroll";

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
      <ScrollView
        // style={styles.verticalscrollviewcontainer}
        // contentContainerStyle={{
        //   justifyContent: "flex-start",
        //   alignItems: "center",
        //   flex: 1,
        // }}
      >
        {/* Images section */}
        <View style={styles.imagescontainer}>
          <HorizontalImagesScroll />
        </View>

        {/* Product Details section */}
        <View style={styles.productdetails}>
          <Text style={styles.titletext}>Limited Edition SUTD T-shirt</Text>
          <Text style={styles.pricetext}>S$10</Text>
          <Text style={styles.detailsheading}>Details</Text>
          <Text style={styles.brandheading}>Brand</Text>
          <Text style={styles.brandtext}>Nike</Text>
          <Text style={styles.brandheading}>Size</Text>
          <Text style={styles.brandtext}>Large</Text>
          <Text style={styles.detailsheading}>Condition</Text>
          <Text style={styles.brandtext}>Like New</Text>
          <Text style={styles.brandtext}>Like New</Text>
          <Text style={styles.brandtext}>Like New</Text>
          <Text style={styles.brandtext}>Like New</Text>
        </View>
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
    minHeight: Dimensions.get("window").height,
    // borderWidth: 2,
    // borderColor: "magenta",
  },
  verticalscrollviewcontainer: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 4,
    borderColor: "cyan",
    // backgroundColor: "pink",

    // maxHeight: "83%",
    // minHeight: "83%",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "7%",
    maxHeight: "7%",
    paddingHorizontal: "5%",
    backgroundColor: "transparent",
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
  imagescontainer: {
    flex: 1,
    // flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "100%",
    maxWidth: "100%",
    borderWidth: 5,
    borderColor: "purple",
    minHeight: "50%",
    maxHeight: "50%",
  },
  productdetails: {
    flex: 1,
    flexDirection: "column",
    borderWidth: 5,
    borderColor: "green",
    minWidth: "100%",
    maxWidth: "100%",
    // minHeight: Dimensions.get('screen').height,
    // maxHeight: "90%",
    paddingHorizontal: "3%",
  },
  titletext: {
    fontSize: 25,
  },
  pricetext: {
    fontSize: 25,
    fontWeight: "bold",
  },
  detailsheading: {
    fontSize: 25,
    fontWeight: "bold",
    paddingTop: "5%",
  },
  brandheading: {
    fontSize: 15,
    paddingTop: "5%",
    color: "grey",
  },
  brandtext: {
    fontSize: 20,
    color: "black",
  },
});

export default ProductDetails;
