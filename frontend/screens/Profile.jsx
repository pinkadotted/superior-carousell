import {
  SafeAreaView,
  Platform,
  StatusBar,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import ListingsGrid from "../components/ListingsGrid";
import MyBottomNav from '../components/navigation/MyBottomNav';

const Profile = () => {
  let profiledetails = {
    name: "John",
    balance: 20,
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Settings bar */}
      <TouchableOpacity style={styles.settingsbutton}>
        <Avatar.Icon
          size={40}
          color="red"
          icon="cog-outline"
          style={{ backgroundColor: "transparent", alignItems: "center" }}
        />
      </TouchableOpacity>
      {/* Profile Details */}
      <View style={styles.profiledetails}>
        {/* Profile Photo */}
        <View style={styles.profilephoto}>
          <Avatar.Image
            size={100}
            source={require("../assets/images/penguin.jpg")}
          />
        </View>
        {/* Profile Text */}
        <View style={styles.profiletextcontainer}>
          {/* Name */}
          <View style={styles.profiletextgroup}>
            <Text style={styles.profiletext}>Name: </Text>
            <Text style={{ ...styles.profiletext, fontWeight: "bold" }}>
              {profiledetails.name}
            </Text>
          </View>
          {/* Balance */}
          <View style={styles.profiletextgroup}>
            <Text style={styles.profiletext}>Your Balance: </Text>
            <Text style={{ ...styles.profiletext, fontWeight: "bold" }}>
              ${profiledetails.balance}
            </Text>
          </View>
        </View>
        </View>
        {/* Your Listings */}
        <View style={styles.yourlistings}>
          {/* Header */}
          <View>
            <Text style={styles.headertext}>Your Listings</Text>
          </View>
          {/* ScrollView of Listings */}
          <ScrollView showsVerticalScrollIndicator={false} style={styles.scrollview}>
            <ListingsGrid />
          </ScrollView>
        </View>
        {/* Nav Bar */}
        <View style={{ alignItems: "flex-end", minHeight: '10%', maxHeight: '10%'}}>
          <MyBottomNav activeRoute="profile-page"/>
        </View>
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "red",
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  settingsbutton: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "yellow",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "8%",
    maxHeight: "8%",
    width: "95%",
  },
  profiledetails:{
    // borderWidth: 2,
    // borderColor: "teal",
    minHeight: "20%",
    maxHeight: "20%",
    minWidth: "95%",
    maxWidth: "95%",
  },
  profilephoto: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 100,
    maxWidth: "100%",
  },
  profiletextcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "transparent",
    // borderColor: "blue",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: 40,
    maxHeight: "20%",
    borderBottomColor: "grey",
  },
  profiletextgroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // borderWidth: 2,
    // borderColor: "greenyellow",
    maxWidth: "100%",
  },
  profiletext: {
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "green",
    maxWidth: "100%",
    fontSize: 15,
  },
  yourlistings: {
    // borderWidth: 2,
    // borderColor: "powderblue",
    minHeight: "62%",
    maxHeight: "62%",
    minWidth: "100%",
    maxWidth: "100%",
  },
  headertext: {
    // borderWidth: 2,
    // borderColor: "cyan",
    fontWeight: "bold",
    fontSize: 30,
    padding: "3%",
    maxWidth: "100%",
    justifyContent: "flex-start",
  },
  scrollview: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "blue",
    maxWidth: "100%",
    minWidth: '100%'
  },
});

export default Profile;
