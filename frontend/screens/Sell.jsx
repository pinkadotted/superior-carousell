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
import React from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import Header from "../components/Header";


const Sell = () => {
  return (
    <>
      {/* Header section */}
      <SafeAreaView style={styles.container}>
        <Header />

        <View
          style={{
            alignItems: "flex-end",
            minHeight: "10%",
            maxHeight: "10%",
            position: "relative",
          }}
        >
          <MyBottomNav activeRoute="sell-page"/>
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

export default Sell;
