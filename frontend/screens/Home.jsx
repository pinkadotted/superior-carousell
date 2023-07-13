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
import { defaultStyles, fontSize } from "../styles/styles";

const Home = () => {
  const [idle, setIdle] = useState(true);
  const isIdle = (idleStatus) => {
    setIdle(idleStatus);
  };

  return (
    <>
      {/* Header section */}
      <SafeAreaView style={defaultStyles.safecontainer}>
        <View style={defaultStyles.headercontainer}>
          <Header isIdle={isIdle} />
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
          {idle && <View style={defaultStyles.container}>
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
          {idle && <View style={defaultStyles.container}>
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
            {idle && <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
              <Text style={{ fontSize: fontSize * 2, fontWeight: "bold", paddingVertical: "2%", marginTop: "2%" }}>
                Recent Listings
              </Text>
            </View>}
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
