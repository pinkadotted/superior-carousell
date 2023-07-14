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
import React, { useState } from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import Header from "../components/Header";
import AddImageCard from "../components/AddImageCard";
import { Avatar } from "react-native-paper";
import MyTextInput from "../components/MyTextInput";
import MyRadioButton from "../components/MyRadioButton";
import MyDropdown from "../components/MyDropdown";
import HorizontalImagesScroll from "../components/HorizontalImagesScroll";
import Button from "../components/utils/Button";
import { defaultStyles, fontSize } from "../styles/styles";

const listings = [];  

const Sell = () => {
  const [listingTitle, setListingTitle] = useState("");
  const [listingDescription, setListingDescription] = useState("");
  const [listingPrice, setListingPrice] = useState("");
  const [dealMethod, setDealMethod] = useState("Cash on Delivery / Meetup");

  const sendTitleToParent = (input) => setListingTitle(input);
  console.log("listingTitle is: ", listingTitle);

  const sendDescToParent = (input) => setListingDescription(input);
  console.log("listingDescription is: ", listingDescription);

  const sendPriceToParent = (input) => setListingPrice(input);
  console.log("listingPrice is: ", listingPrice);

  const sendDealMethodToParent = (input) => setDealMethod(input);
  console.log("dealMethod is: ", dealMethod);

  const submitListingHandler = () => {
    // replace following lines w code to send the object to db later on
    const newListing = {
      listingTitle: listingTitle,
      listingDescription: listingDescription,
      listingPrice: listingPrice,
      dealMethod: dealMethod,
    };
    listings.push(newListing);
    console.log("listings: ", listings);
  };

  return (
    <>
      {/* Header section */}
      <SafeAreaView style={defaultStyles.safecontainer}>
        {/* Back button */}

        <ScrollView style={{
          flex: 1,
          // minHeight: "90%", maxHeight: "90%"
        }}>
          {/* Photos section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: "3%",
              minHeight: "20%",
              maxHeight: "20%",
              // borderWidth: 2,
              // borderColor: "green",
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                fontSize: fontSize * 1.7,
                paddingVertical: "2%",
              }}
            >
              Choose 1 or more photos
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-around",
                // justifyContent: 'center',
                alignItems: "center",
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

          {/* Category section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              // borderWidth: 3,
              // borderColor: 'magenta'
            }}
          >
            <Text style={{ fontSize: fontSize * 1.7, fontWeight: "bold" }}>
              Category
            </Text>
            <MyDropdown />
          </View>

          {/* Title section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              minWidth: "100%",
              paddingBottom: 20,
              // borderWidth: 2,
              // borderColor: 'cyan'
            }}
          >
            <Text
              style={{
                fontSize: fontSize * 1.3,
                fontWeight: "bold",
                alignSelf: "flex-start",
                paddingHorizontal: 20,
              }}
            >
              Title
            </Text>
            <View
              style={{
                flex: 1,
                maxWidth: "90%",
                minWidth: "90%",
                // borderWidth: 2,
                // borderColor: 'purple'
              }}
            >
              <MyTextInput
                cursorColor="teal"
                sendDataToParent={sendTitleToParent}
              />
            </View>
          </View>

          {/* Description section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              minWidth: "100%",
              // borderWidth: 2,
              // borderColor: 'cyan'
            }}
          >
            <Text
              style={{
                fontSize: fontSize * 1.3,
                fontWeight: "bold",
                alignSelf: "flex-start",
                paddingHorizontal: 20,
                // paddingBottom: 40,
              }}
            >
              Description
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                maxWidth: "90%",
                minWidth: "90%",
                minHeight: "10%",
                // borderWidth: 2,
                // borderColor: 'purple',
              }}
            >
              <MyTextInput
                multiline={true}
                sendDataToParent={sendDescToParent}
              />
            </View>
          </View>

          {/* Price section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              minWidth: "100%",
              paddingBottom: 20,
              paddingTop: 30,
              // borderWidth: 2,
              // borderColor: "cyan",
            }}
          >
            <Text
              style={{
                fontSize: fontSize * 1.3,
                fontWeight: "bold",
                alignSelf: "flex-start",
                paddingHorizontal: 20,
              }}
            >
              Price
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "column",
                maxWidth: "90%",
                minWidth: "90%",
                // borderWidth: 2,
                // borderColor: "purple",
              }}
            >
              <MyTextInput
                isNum={true}
                sendDataToParent={sendPriceToParent} />
            </View>
          </View>

          {/* Deal method section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              maxWidth: "100%",
              minWidth: "100%",
              minHeight: "15%",
              maxHeight: "15%",
              // borderWidth: 3,
              // borderColor: "red",
            }}
          >
            <View>
              <Text
                style={{
                  fontSize: fontSize * 1.3,
                  fontWeight: "bold",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  paddingHorizontal: 20,
                  // borderWidth: 2,
                  // borderColor: "magenta",
                }}
              >
                Deal Method
              </Text>
            </View>

            <View style={{ ...defaultStyles.container, maxHeight: "70%" }}>
              <MyRadioButton sendDataToParent={sendDealMethodToParent} />
            </View>
          </View>

          {/* Submit button */}
          <View
            style={{
              minHeight: "30%",
              maxHeight: "30%",
              // borderWidth: 4,
              // borderColor: "pink",
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                minWidth: "80%",
                maxWidth: "80%",
                maxHeight: "30%",
                minHeight: "30%",
              }}
            >
              <Button text={"Submit Listing"}
                onSubmit={submitListingHandler}
                navigateTo={"home-page"} />
            </View>
          </View>
        </ScrollView>

        <View style={defaultStyles.bottomnavcontainer}>
          <MyBottomNav activeRoute="sell-page" />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
});

export default Sell;
