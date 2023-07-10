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

const Sell = () => {
  return (
    <>
      {/* Header section */}
      <SafeAreaView style={styles.container}>
        {/* Back button */}

        <ScrollView>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: 'center',
              alignItems: 'center',
              minWidth: "95%",
              maxWidth: "95%",
              borderWidth: 2,
              borderColor: "cyan",
            }}
          >
            <Text style={{ fontWeight: "bold", fontSize: 25 }}>
              Choose 1 or more photos
            </Text>
            <View
              style={{
                flex: 1,
                flexDirection: "row",
                justifyContent: "space-between",
                // justifyContent: 'center',
                alignItems: 'center',
                minWidth: '100%',
                maxWidth: '100%',
                borderWidth: 2,
                borderColor: "blue",
              }}
            >
              <AddImageCard />
              <AddImageCard />
              <TouchableOpacity>
                <Avatar.Icon icon="folder-image" size={50} />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
    borderWidth: 4,
    borderColor: "red",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: Dimensions.get("window").height,
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
