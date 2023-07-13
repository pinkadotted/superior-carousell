import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import Header from "../components/Header";
import AddImageCard from "../components/AddImageCard";
import { Avatar } from "react-native-paper";
import MyTextInput from "../components/MyTextInput";
import MyRadioButton from "../components/MyRadioButton";
import MyDropdown from "../components/MyDropdown";
import HorizontalImagesScroll from "../components/HorizontalImagesScroll";
import Button from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/palette";
import { fontSize } from "../styles/styles";

const ProductDetails = () => {
  const navigate = useNavigation();

  return (
    <>
      {/* Header section */}
      <SafeAreaView style={styles.container}>
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
          {/* Photos section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "20%",
              maxHeight: 200,
              // borderWidth: 2,
              // borderColor: "green",
            }}
          >
            <View
              style={{
                flex: 1,    
                // flexDirection: "row",
                // justifyContent: "space-around",
                justifyContent: "center",
                alignItems: "center",
                // minHeight: '50%',
                // maxHeight: '50%',
                minWidth: "100%",
                maxWidth: "100%",
                // borderWidth: 2,
                // borderColor: "blue",
              }}
            >
              {/* Horizontal scrollview for image uploading */}
              <HorizontalImagesScroll />
            </View>
          </View>

          {/* Title section */}

          {/* Title section */}
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
            <Text style={styles.detailsheading}>Description</Text>
            <Text style={styles.brandtext}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
              maiores quas quisquam molestiae, officia ipsum exercitationem
              debitis optio! Sequi, accusamus.
            </Text>
          </View>
        </ScrollView>

        {/* Bottom Buttons */}
        <View style={styles.footer}>
          <View
            style={{
              minWidth: "40%",
              maxWidth: "40%",
              maxHeight: "80%",
              minHeight: "80%",
            }}
          >
            <Button text="Chat" navigateTo='chat' />
          </View>
          <View
            style={{
              minWidth: "40%",
              maxWidth: "40%",
              maxHeight: "80%",
              minHeight: "80%",
            }}
          >
            <Button text="Buy" bgColor={colors.caribbeancurrent} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  productdetails: {
    flex: 1,
    flexDirection: "column",
    // borderWidth: 5,
    // borderColor: "green",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: Dimensions.get("screen").height,
    maxHeight: "50%",
    paddingHorizontal: "3%",
  },
  safeareacontainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: Dimensions.get("window").height,
    // borderWidth: 2,
    // borderColor: "magenta",
    backgroundColor: "transparent",
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "7%",
    maxHeight: "7%",
    minWidth: "100%",
    maxWidth: "100%",
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
    minWidth: "100%",
    maxWidth: "100%",
    justifyContent: "space-around",
    alignItems: "center",
    paddingBottom: "2%",
    // borderWidth: 2,
    // borderColor: "cyan",
  },
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "space-between",
    // borderWidth: 4,
    // borderColor: "green",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: Dimensions.get("window").height,
  },
  // headertext: {
  //   fontSize: 40,
  //   fontWeight: "bold",
  // },
  categoriescontainer: {
    // borderWidth: 2,
    // borderColor: "green",
    minHeight: "40%",
    minWidth: "90%",
  },
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titletext: {
    fontSize: fontSize*1.7,
  },
  pricetext: {
    fontSize: fontSize*1.7,
    fontWeight: "bold",
  },
  detailsheading: {
    fontSize: fontSize*1.7,
    fontWeight: "bold",
    paddingTop: "5%",
  },
  brandheading: {
    fontSize: fontSize*1.1,
    paddingTop: "5%",
    color: "grey",
  },
  brandtext: {
    fontSize: fontSize*1.3,
    color: "black",
  },
});

export default ProductDetails;
