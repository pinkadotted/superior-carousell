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
import MainNavContainer from "../components/navigation/MainNavContainer";
import Header from "../components/Header";
import Categories from "../components/Categories";
import ListingsGrid from "../components/ListingsGrid";

const Home = ({ navigation }) => {
  

  return (
    <>
      {/* Header section */}
      <SafeAreaView style={styles.container}>
        <View style={{ flex:1, maxHeight: "10%", minHeight:"10%" }}>
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
          <View style={{ justifyContent: "center", alignItems: "center" }}>
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
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              What are you looking for today?
            </Text>
          </View>

          {/* Categories heading section*/}
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text
              style={{
                fontSize: 30,
                fontWeight: "bold",
                justifyContent: "center",
                alignItems: "center",
                // borderRadius: 2,
                // borderColor: 'red'
              }}
            >
              Categories
            </Text>
          </View>

          {/* Categories icons section*/}
          <Categories style={{ position: "sticky" }} />

          {/* Listings */}
          <View>
            <ListingsGrid />
          </View>
        </ScrollView>
        {/* End of scrollview section */}

        <View style={{ alignItems: "flex-end", minHeight: '10%', maxHeight: '10%', position: "relative" }}>
          <MyBottomNav activeRoute="home-page"/>
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
    // borderColor: "red",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: Dimensions.get('window').height
  },
  headertext: {
    fontSize: 40,
    fontWeight: "bold",
  },
  categoriescontainer: {
    borderWidth: 2,
    borderColor: "green",
    minHeight: "40%",
    minWidth: "90%",
  },
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Home;
