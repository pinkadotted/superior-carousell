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

const Sell = () => {
  return (
    <>
      {/* Header section */}
      <SafeAreaView style={styles.container}>
        {/* Back button */}

        <ScrollView>
          {/* Photos section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              minHeight: "20%",
              maxHeight: "20%",
              // borderWidth: 2,
              // borderColor: "cyan",
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
              <View>
                <AddImageCard />
              </View>
              <View>
                <AddImageCard />
              </View>
              <View>
                <TouchableOpacity>
                  <Avatar.Icon
                    icon="camera-plus-outline"
                    size={50}
                    style={{ backgroundColor: "transparent" }}
                    color="pink"
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Category section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ fontSize: 40, fontWeight: "bold" }}>Category</Text>
            <Text>DROPDOWN</Text>
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
                flexDirection: "column",
                maxWidth: "90%",
                minWidth: "90%",
                // borderWidth: 2,
                // borderColor: 'purple'
              }}
            >
              <MyTextInput placeholder={"Enter item's name"} />
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
                paddingBottom: 40,
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
                // borderWidth: 2,
                // borderColor: 'purple',
              }}
            >
              <MyTextInput
                placeholder={"Enter item's description"}
                multiline={true}
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
              paddingTop: 50,
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
              minHeight: "20%",
              maxHeight: "20%",
              // paddingBottom: 20,
              // paddingTop: 50,
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

            <View
              style={{
                // borderWidth: 2,
                // borderColor: "green",
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                maxHeight: "70%",
              }}
            >
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
            <TouchableOpacity
              style={{
                backgroundColor: "pink",
                minWidth: "90%",
                maxWidth: "90%",
                minHeight: "25%",
                maxHeight: "25%",
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            >
              <Text style={{ fontSize: 25, fontWeight: "bold" }}>
                Submit Listing
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        <View
          style={{
            alignItems: "flex-end",
            minHeight: "10%",
            maxHeight: "10%",
            position: "relative",
          }}
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
