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
import { useNavigation } from "@react-navigation/native";
import { defaultStyles, profileStyles } from "../styles/styles";
import { colors } from "../styles/palette";

const Profile = () => {
  const navigate = useNavigation();

  let profiledetails = {
    name: "John",
    balance: 20,
  };

  return (
    <SafeAreaView style={defaultStyles.safecontainer}>
      {/* Settings bar */}
      <View style={profileStyles.settingsbar}>
        <TouchableOpacity onPress={() => navigate.navigate('settings')}>
          <Avatar.Icon
            size={40}
            color={colors.caribbeancurrent}
            icon="cog-outline"
            style={defaultStyles.icon}
          />
        </TouchableOpacity>
      </View>
      {/* Profile Details */}
      <View style={profileStyles.profiledetailscontainer}>
        {/* Profile Photo */}
        <View style={profileStyles.profilephoto}>
          <Avatar.Image
            size={100}
            source={require("../assets/images/penguin.jpg")}
          />
        </View>
        {/* Profile Text */}
        <View style={profileStyles.profiletextcontainer}>
          {/* Name */}
          <View style={profileStyles.profiletextgroup}>
            <Text style={profileStyles.profiletext}>Name: </Text>
            <Text style={{ ...profileStyles.profiletext, fontWeight: "bold" }}>
              {profiledetails.name}
            </Text>
          </View>
          {/* Balance */}
          <View style={profileStyles.profiletextgroup}>
            <Text style={profileStyles.profiletext}>Your Balance: </Text>
            <Text style={{ ...profileStyles.profiletext, fontWeight: "bold" }}>
              ${profiledetails.balance}
            </Text>
          </View>
        </View>
        </View>
        {/* Your Listings */}
        <View style={profileStyles.yourlistings}>
          {/* Header */}
          <View>
            <Text style={profileStyles.headertext}>Your Listings</Text>
          </View>
          {/* ScrollView of Listings */}
          <ScrollView showsVerticalScrollIndicator={false} style={profileStyles.scrollview}>
            <ListingsGrid />
          </ScrollView>
        </View>
        {/* Nav Bar */}
        <View style={defaultStyles.bottomnavcontainer}>
          <MyBottomNav activeRoute="profile-page"/>
        </View>
      </SafeAreaView>
  );
};

export default Profile;
