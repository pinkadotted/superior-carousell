import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Dimensions,
} from "react-native";
import React, { useState } from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import Header from "../components/Header";
import Categories from "../components/Categories";
import ListingsGrid from "../components/ListingsGrid";
import { colors } from "../styles/palette";
import { defaultStyles } from "../styles/styles";

const Home = ({ navigation }) => {
  return (
    <>
      {/* Header section */}
      <SafeAreaView style={defaultStyles.safecontainer}>
        <View style={defaultStyles.headercontainer}>
          <Header />
        </View>
        {/* Start of scrollview section */}
        <ScrollView
          showsVerticalScrollIndicator={false}
          stickyHeaderIndices={[2]}
          style={{
            flex: 1,
            maxHeight: "80%",
            minHeight: "80%",
          }}
        >
          {/* Header Text */}
          <View style={defaultStyles.container}>
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
              }}
            >
              Welcome John!
            </Text>
            <Text
              style={{
                fontSize: 30,
              }}
            >
              What are you looking for today?
            </Text>
          </View>

          {/* Categories heading section*/}
          <View style={defaultStyles.container}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
              }}
            >
              Categories
            </Text>
          </View>

          {/* Categories icons section*/}
          <Categories />

          {/* Listings */}
          <View>
            <ListingsGrid />
          </View>
        </ScrollView>
        {/* End of scrollview section */}

        <View style={defaultStyles.bottomnavcontainer}>
          <MyBottomNav activeRoute="home-page" />
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;
