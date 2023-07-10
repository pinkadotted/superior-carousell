import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import MainNavContainer from "../components/navigation/MainNavContainer";
import Header from "../components/Header";
import Categories from "../components/Categories";



const Home = ({ navigation }) => {
  return (
    <>
      {/* Header section */}
      <SafeAreaView style={styles.container}>
        <Header />

        {/* Header Text */}
        <View>
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

        {/* Categories */}
        <Categories />
        
        {/* Listings */}
        
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
    borderWidth: 2,
    borderColor: "red",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headertext: {
    fontSize: 40,
    fontWeight: "bold",
  },
  categoriescontainer: {
    borderWidth: 2,
    borderColor: "green",
    minHeight: "40%",
    minWidth: '90%'
  },
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default Home;
