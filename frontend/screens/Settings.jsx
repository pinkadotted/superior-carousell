import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../components/SimpleHeader';

const Settings = () => {
  const navigate = useNavigation();

  const settings = [
    {
      text: "Edit Profile",
      _id: 1,
      iconName: "account-edit-outline",
      route: "edit-profile"
    },
    {
      text: "Change Password",
      _id: 2,
      iconName: "lock-reset",
      route: "change-password"
    },
    {
      text: "Logout",
      _id: 3,
      iconName: "logout-variant",
      route: "logout"
    },
    {
      text: "Deactivate Account",
      _id: 4,
      iconName: "account-remove-outline",
      route: "deactivate-account",
    }
  ];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <SimpleHeader title="Settings"/>
        {/* Editables ScrollView*/}
        <ScrollView style={styles.scrollview}>
          {settings.map((item) => (
            <TouchableOpacity style={styles.settingsbuttons} key={item._id} onPress={() => navigate.navigate(item.route)}>
              <Avatar.Icon 
                icon={item.iconName} 
                style={styles.settingsicons} 
                size={50} 
                color="red"/>
              <Text style={styles.buttontext}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
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
  scrollview: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "blue",
    maxWidth: "95%",
    minWidth: "95%",
    minHeight: "90%",
    maxHeight: "90%",
  },
  settingsbuttons: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
    maxHeight: 60,
    minWidth: "100%",
    maxWidth: "100%",
    borderWidth: 1,
    borderColor: "transparent",
    borderBottomColor: "lightgrey",
  },
  settingsicons: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
    maxHeight: 60,
    minWidth: 60,
    maxWidth: 60,
    backgroundColor: "transparent", 
  },
  buttontext: {
    flex: 1,
    textAlign: "left",
    paddingLeft: 5,
    // borderWidth: 2,
    // borderColor: "yellowgreen",
    fontSize: 15,
  },
});

export default Settings