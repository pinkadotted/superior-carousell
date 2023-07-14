import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import Header from "../components/Header";
import Categories from "../components/Categories";
import ListingsGrid from "../components/ListingsGrid";
import { colors } from "../styles/palette";
import { defaultStyles, fontSize, height } from "../styles/styles";

const Home = () => {
  // Setting search bar idle status
  const [idle, setIdle] = useState(true);
  const isIdle = (idleStatus) => {
    setIdle(idleStatus);
  };
  // Adding keyboard event listener to determine whether to show bottom nav or not
  const [keyboardDown, setKeyboardDown] = useState(true);
  const isKeyboardDown = (keyboardStatus) => setKeyboardDown(keyboardStatus);
  const keyboardShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => { isKeyboardDown(false) }
  );
  const keyboardHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => { isKeyboardDown(true) }
  );

  return (
    <>
      {/* Header section */}
      <SafeAreaView style={defaultStyles.safecontainer}>
        {/* <View style={{...defaultStyles.staticsafecontaineroverlay, justifyContent: "flex-start", }}> */}
          <View style={defaultStyles.headercontainer}>
            <Header isIdle={isIdle} />
          </View>
        {/* </View> */}
        {/* Start of scrollview section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[2]}
          style={{
            flex: 1,
            maxHeight: height*0.8,
          }}
        >
          {/* Header Text */}
          {keyboardDown && idle && <View style={defaultStyles.container}>
            <Text
              style={{
                fontSize: fontSize * 2,
                fontWeight: "bold",
                paddingVertical: "2%"
              }}
            >
              Welcome John!
            </Text>
            <Text
              style={{
                fontSize: fontSize * 1.5,
              }}
            >
              What are you looking for today?
            </Text>
          </View>}

          {/* Categories heading section*/}
          {keyboardDown && idle && <View style={defaultStyles.container}>
            <Text
              style={{
                fontSize: fontSize * 2,
                fontWeight: "bold",
                paddingVertical: "2%",
                marginTop: "2%",
              }}
            >
              Categories
            </Text>
          </View>}

          {/* Categories icons section*/}
          <Categories />

          {/* Listings */}
          <View>
            {keyboardDown && idle && <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
              <Text style={{ fontSize: fontSize * 2, fontWeight: "bold", paddingVertical: "2%", marginTop: "2%" }}>
                Recent Listings
              </Text>
            </View>}
            <ListingsGrid />
          </View>
        </ScrollView>
        {/* End of scrollview section */}

        {keyboardDown && <View style={defaultStyles.bottomnavcontainer}>
          <MyBottomNav activeRoute="home-page" />
        </View>}
      </SafeAreaView>

    </>
  );
};

export default Home;
