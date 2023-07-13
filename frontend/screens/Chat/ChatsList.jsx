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
import MessageCard2 from "./MessageCard2";

const messages = [
  {
    name: "Jon",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't really want to deal with dishonest people",
    date: "31/08/21",
    profilePhoto: "https://image.pbs.org/video-assets/Vtw3T4t-asset-mezzanine-16x9-Bf5n3hO.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "Smith, not John Smith yuh yuh yuh",
    listingName: "SUTD Hoodie",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://image.pbs.org/video-assets/Vtw3T4t-asset-mezzanine-16x9-Bf5n3hO.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "Alfred",
    listingName: "SUTD most exclusive T-shirt",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://image.pbs.org/video-assets/Vtw3T4t-asset-mezzanine-16x9-Bf5n3hO.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "Amy",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://image.pbs.org/video-assets/Vtw3T4t-asset-mezzanine-16x9-Bf5n3hO.png",
    listingPhoto: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    name: "David",
    listingName: "SUTD T-shirt",
    lastMessage: "Sorry I don't",
    date: "31/08/21",
    profilePhoto: "https://image.pbs.org/video-assets/Vtw3T4t-asset-mezzanine-16x9-Bf5n3hO.png",
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
            <MessageCard2
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
