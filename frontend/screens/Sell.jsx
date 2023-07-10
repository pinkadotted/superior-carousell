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

          {/* Photos section */}
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",

              minHeight: '50%',
              maxHeight: '50%',
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
                  <Avatar.Icon icon="camera-plus-outline" size={50} style={{backgroundColor: 'transparent'}} color="pink"/>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Category section */}
          <View>
              <Text>Category</Text>
              
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
