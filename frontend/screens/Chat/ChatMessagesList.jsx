import { View, Text, ScrollView, Dimensions } from "react-native";
import React, { useRef, useState } from "react";
import Message from "./Message";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const ChatMessagesList = () => {
  const [messages, setMessages] = useState([
    {
      user: 0,
      time: "12:00",
      content: "Hey, is this available?",
    },
    {
      user: 1,
      time: "12:01",
      content: "Hi, yes it is!",
    },
    {
      user: 0,
      time: "12:04",
      content: "How much is it?",
    },
    {
      user: 1,
      time: "12:10",
      content: "$20!",
    },
    {
      user: 0,
      time: "12:10",
      content: "Man that is pretty expensive",
    },
    {
      user: 1,
      time: "12:10",
      content: "How about we do $10?",
    },
    {
      user: 0,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
    {
      user: 0,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
    {
      user: 0,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
    {
      user: 0,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
    {
      user: 0,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
    {
      user: 0,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
    {
      user: 1,
      time: "12:10",
      content: "Sounds good to me, done deal. ",
    },
  ]);

  const user = useRef(0);
  const scrollView = useRef();
  return (
    <ScrollView
      enableAutomaticScroll={true}
      showsVerticalScrollIndicator={false}
      style={{
        flex:1,
        // borderWidth: 2,
        // borderColor: "magenta",
        minWidth: "95%",
        maxWidth: "95%",
      }}
      ref={(ref) => (scrollView.current = ref)}
      onContentChange={() => {
        scrollView.current.scrollToEnd({ animated: true });
      }}
      on
    >
      {messages.map((message, index) => (
        <Message
          key={index}
          time={message.time}
          isLeft={message.user !== user.current}
          message={message.content}
        />
      ))}
    </ScrollView>
  );
};

export default ChatMessagesList;
