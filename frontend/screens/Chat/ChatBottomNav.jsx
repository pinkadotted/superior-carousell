import { View, Text, Dimensions } from "react-native";
import React from "react";
import MyIcon from "../../components/utils/MyIcon";
import MyTextInput from "../../components/MyTextInput";

const h = Dimensions.get("window").height * 0.1

const ChatBottomNav = ({handleKeyboard}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        maxHeight: h,
        minHeight: h,
        minWidth: "100%",
        maxWidth: "100%",
        paddingHorizontal: 10,
        alignItems: "center",
        justifyContent: "center",
        // borderWidth: 2,
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: "85%",
          minWidth: "85%",
          maxHeight: "70%",
          minHeight: "70%",
        }}
      >
        <MyTextInput placeholder={"Type your message here"} />
      </View>
      <View style={{ flex: 1 }}>
        <MyIcon icon="folder-image" />
      </View>
    </View>
  );
};

export default ChatBottomNav;
