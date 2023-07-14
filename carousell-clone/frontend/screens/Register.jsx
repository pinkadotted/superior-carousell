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
import React, { useState } from "react";
import MyBottomNav from "../components/navigation/MyBottomNav";
import Header from "../components/Header";
import AddImageCard from "../components/AddImageCard";
import { Avatar } from "react-native-paper";
import MyTextInput from "../components/MyTextInput";
import MyRadioButton from "../components/MyRadioButton";
import MyDropdown from "../components/MyDropdown";
import HorizontalImagesScroll from "../components/HorizontalImagesScroll";
import Button from "../components/utils/Button";
import { defaultStyles, fontSize, height } from "../styles/styles";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../styles/palette";

const Register = () => {
  const navigate = useNavigation();
  return (
    // <View style={{ backgroundColor: colors.springgreen }}>
    <SafeAreaView style={defaultStyles.safecontainer}>
      <View
        style={{
          paddingTop: fontSize * 2,
          // borderWidth: 3
        }}
      >
        <Text style={{ fontSize: fontSize * 2.3, fontWeight: "bold" }}>
          Create Account
        </Text>
      </View>
      <ScrollView
        style={{
          flex: 1,
          // borderWidth: 3,
          // borderColor: "yellow",
          maxHeight: "90%",
        }}
      >
        {/* Title section */}
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            minWidth: "100%",
            paddingBottom: 20,
            // borderWidth: 2,
            // borderColor: "cyan",
          }}
        >
          <Text
            style={{
              fontSize: fontSize * 1.3,
              fontWeight: "bold",
              alignSelf: "flex-start",
              paddingHorizontal: 20,
            }}
          >
            Name
          </Text>
          <View
            style={{
              flex: 1,
              maxWidth: "90%",
              minWidth: "90%",
              // borderWidth: 2,
              // borderColor: 'purple'
            }}
          >
            <MyTextInput
            // sendDataToParent={sendTitleToParent}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            minWidth: "100%",
            paddingBottom: 20,
            // borderWidth: 2,
            // borderColor: "cyan",
          }}
        >
          <Text
            style={{
              fontSize: fontSize * 1.3,
              fontWeight: "bold",
              alignSelf: "flex-start",
              paddingHorizontal: 20,
            }}
          >
            Email
          </Text>
          <View
            style={{
              flex: 1,
              maxWidth: "90%",
              minWidth: "90%",
              // borderWidth: 2,
              // borderColor: 'purple'
            }}
          >
            <MyTextInput
              isEmail={true}
              // sendDataToParent={sendTitleToParent}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            minWidth: "100%",
            paddingBottom: 20,
            // borderWidth: 2,
            // borderColor: "cyan",
          }}
        >
          <Text
            style={{
              fontSize: fontSize * 1.3,
              fontWeight: "bold",
              alignSelf: "flex-start",
              paddingHorizontal: 20,
            }}
          >
            Password
          </Text>
          <View
            style={{
              flex: 1,
              maxWidth: "90%",
              minWidth: "90%",
              // borderWidth: 2,
              // borderColor: 'purple'
            }}
          >
            <MyTextInput
              isPassword={true}
              // sendDataToParent={sendTitleToParent}
            />
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
            minWidth: "100%",
            paddingBottom: 20,
            // borderWidth: 2,
            // borderColor: "cyan",
          }}
        >
          <Text
            style={{
              fontSize: fontSize * 1.3,
              fontWeight: "bold",
              alignSelf: "flex-start",
              paddingHorizontal: 20,
            }}
          >
            Re-enter Password
          </Text>
          <View
            style={{
              flex: 1,
              maxWidth: "90%",
              minWidth: "90%",
              // borderWidth: 2,
              // borderColor: 'purple'
            }}
          >
            <MyTextInput
              isPassword={true}
              // sendDataToParent={sendTitleToParent}
            />
          </View>
        </View>

        {/* Submit button */}
        <View
          style={{
            minHeight: height * 0.3,
            maxHeight: height * 0.3,
            // borderWidth: 4,
            // borderColor: "pink",
            flex: 1,
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <View
            style={{
              minWidth: "80%",
              maxWidth: "80%",
              maxHeight: "30%",
              minHeight: "30%",
              // borderWidth: 3
            }}
          >
            <Button
              text={"Register"}
              // onSubmit={submitListingHandler}
              navigateTo={"home-page"}
            />
          </View>
          <View
            style={{
              // flex: 1,
              // borderWidth: 2,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: fontSize * 0.3,
            }}
          >
            <Text style={{ color: colors.licorice, fontWeight: "bold" }}>
              Already have an account?
            </Text>
            <TouchableOpacity onPress={() => navigate.navigate("login")}>
              <Text
                style={{ color: colors.caribbeancurrent, fontWeight: "bold" }}
              >
                Log in
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
    // </View>
  );
};

const styles = StyleSheet.create({});

export default Register;
