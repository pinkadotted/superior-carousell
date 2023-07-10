import { SafeAreaView, Platform, StatusBar, View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import React from 'react';
import { Avatar } from 'react-native-paper';

const Profile = () => {
  let profiledetails = {
    name: "John",
    balance: 20,
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Settings bar */}
      <TouchableOpacity style={styles.settingsbutton}>
        <Avatar.Icon size={40} color="red" icon="cog-outline" style={{ backgroundColor: 'transparent', alignItems: 'center' }}/>
      </TouchableOpacity>
      {/* Profile Details */}
      <View>
        {/* Profile Photo */}
        <View style={styles.horizontalcontainer}>
          <Avatar.Image size={100} source={require('../assets/images/penguin.jpg')} />
        </View>
        {/* Profile Text */}
        <View style={styles.profiletextcontainer}>
          {/* Name */}
          <View style={styles.profiletextgroup}>
            <Text style={styles.profiletext}>Name: </Text>
            <Text style={{...styles.profiletext, fontWeight:"bold"}}>{profiledetails.name}</Text>
          </View>
          {/* Balance */}
          <View style={styles.profiletextgroup}>
            <Text style={styles.profiletext}>Your Balance: </Text>
            <Text style={{...styles.profiletext, fontWeight:"bold"}}>${profiledetails.balance}</Text>
          </View>
        </View>
        {/* Your Listings */}
        <View>
          {/* Header */}
          <View>
            <Text style={styles.headertext}>Your Listings</Text>
          </View>
          {/* ScrollView of Listings */}
          {/* <ScrollView>

          </ScrollView> */}
        </View>
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
    borderWidth: 2,
    borderColor: "red",
    justifyContent: "flex-start",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  horizontalcontainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 100,
    maxWidth: "90%",
  },
  settingsbutton: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "yellow",
    justifyContent: "flex-end",
    alignItems: "center",
    maxHeight: 40,
    width: "90%",
  },
  profiletextcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "transparent",
    // borderColor: "blue",
    minWidth: "90%",
    maxWidth: "90%",
    minHeight: 40,
    maxHeight: "20%",
    borderBottomColor: "grey",
  },
  profiletextgroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    borderWidth: 2,
    borderColor: "greenyellow",
    maxWidth: "100%",
  },
  profiletext: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
    maxWidth: "100%",
    fontSize: 15,
  },
  headertext: {
    fontWeight: "bold",
    fontSize: 30,
  },
});

export default Profile