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
import { defaultStyles } from "../styles/styles";

const Sell = () => {
  return (
    <>
      {/* Header section */}
      <SafeAreaView style={defaultStyles.safecontainer}>
        {/* Back button */}

        <ScrollView style={{flex:1, minHeight:"90%", maxHeight:"90%"}}>
          {/* Photos section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 20,
              minHeight: "20%",
              maxHeight: "20%",
              // borderWidth: 2,
              // borderColor: "green",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
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
            <Text style={{ fontSize: 25, fontWeight: "bold" }}>Category</Text>
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
                fontSize: 20,
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
              <MyTextInput cursorColor="teal" />
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
                fontSize: 20,
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
              <MyTextInput multiline={true} />
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
                fontSize: 20,
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
              <MyTextInput />
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
                  fontSize: 20,
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
              <MyRadioButton />
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
              <Button text={"Submit Listing"} />
            </View>
          </View>
        </ScrollView>

        <View
          style={defaultStyles.bottomnavcontainer}
        >
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
  headertext: {
    fontSize: 40,
    fontWeight: "bold",
  },
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
