import {
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";
import {
  defaultStyles,
} from "../../styles/styles";
import SimpleHeader from "../../components/SimpleHeader";
import { Avatar } from "react-native-paper";
import ChatBottomNav from "./ChatBottomNav";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import ChatMessagesList from "./ChatMessagesList";

const Chat = () => {

  return (
    <SafeAreaView style={defaultStyles.safecontainer}>
      {/* Header */}
      <SimpleHeader title="SUTD T-shirt" />
      <ChatMessagesList />
      <ChatBottomNav />
    </SafeAreaView>
  );
};

export default Chat;
