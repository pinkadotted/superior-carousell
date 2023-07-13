import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import { defaultStyles, fontSize } from "../../styles/styles";
import SimpleHeader from "../../components/SimpleHeader";
import MessageCard from "./MessageCard";

const messages = [
  {
    name: "Jon",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't really want to deal with dishonest people",
    date: "31/08/21",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "smith",
    listingName: "SUTD Hoodie that is reaaaaaallllly cooooll",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "Jon",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "Jon",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "Jon",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
];

const ChatsList = () => {
  return (
    <SafeAreaView style={defaultStyles.safecontainer}>
      {/* Header */}
      <SimpleHeader title="Messages" />

      {/* Messages */}
      {/* Editables ScrollView*/}
      <ScrollView style={styles.scrollview}>
        {messages.map((item) => (
          <TouchableOpacity activeOpacity={0.7}>
            <MessageCard
              name={item.name}
              listingName={item.listingName}
              lastMessage={item.lastMessage}
              date={item.date}
              profilePhoto={item.profilePhoto}
              listingPhoto={item.listingPhoto}
            />
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
});

export default ChatsList;
