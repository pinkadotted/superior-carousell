import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Platform, StatusBar, ScrollView } from 'react-native'
import React from 'react'
import { Avatar } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import SimpleHeader from '../components/SimpleHeader';
import MyIcon from '../components/utils/MyIcon';
import { defaultStyles, settingsStyles } from '../styles/styles';

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
    <SafeAreaView style={defaultStyles.safecontainer}>
      {/* Header */}
      <SimpleHeader title="Settings"/>
        {/* Editables ScrollView*/}
        <ScrollView style={styles.scrollview}>
          {settings.map((item) => (
            <TouchableOpacity style={settingsStyles.settingsbuttons} key={item._id} onPress={() => navigate.navigate(item.route)}>
              <MyIcon 
                icon={item.iconName} 
                size={50} />
              <Text style={styles.buttontext}>{item.text}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scrollview: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "blue",
    maxWidth: "95%",
    minWidth: "95%",
    minHeight: "90%",
    maxHeight: "90%",
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