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
    listingPhoto: "https://wearesutd.sutd.edu.sg/wp-content/uploads/2018/11/SUTD-Starter-Pack-Items-8377-full-res-screen-res.jpg",
  },
  {
    name: "Smith, not John Smith yuh yuh yuh",
    listingName: "SUTD Hoodie",
    lastMessage: "Hello, can I ask if this is legit bc I don't recall there being a hoodie like this, thanks.",
    date: "31/08/21",
    profilePhoto: "https://www.quarkexpeditions.com/sites/default/files/blog-images/SamEdmonds---Chinstrap-closeup.jpg",
    listingPhoto: "https://sutdmerch.files.wordpress.com/2013/04/shafiq.jpg",
  },
  {
    name: "Alfred",
    listingName: "Continental Autonomous Robot",
    lastMessage: "This is Corriere",
    date: "31/08/21",
    profilePhoto: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/MSNBC/Components/Photo/_new/120413-PenguinPhoto-hmed-0135p_files.jpg",
    listingPhoto: "https://i.ytimg.com/vi/-oQ_hkzkU4Y/maxresdefault.jpg",
  },
  {
    name: "Amy",
    listingName: "Grapefruit Soju",
    lastMessage: "Vertical img test",
    date: "31/08/21",
    profilePhoto: "https://scx2.b-cdn.net/gfx/news/2019/emperorpengu.jpg",
    listingPhoto: "https://m.media-amazon.com/images/I/51jP3hXqpKL.jpg",
  },
  {
    name: "David the Penguin",
    listingName: "Cool Pebbles",
    lastMessage: "Looking for a date ;)",
    date: "31/08/21",
    profilePhoto: "https://www.wwf.org.uk/sites/default/files/styles/fundraising_slice_1900/public/2016-10/Original_WW22776.jpg",
    listingPhoto: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Beach_Stones_2.jpg",
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
