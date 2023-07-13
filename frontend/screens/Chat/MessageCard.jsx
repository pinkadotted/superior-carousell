import { Avatar, Button, Card, Text } from "react-native-paper";
import React from "react";
import { chatsListStyles, fontSize } from "../../styles/styles";
import { View } from "react-native";

const MessageCard = ({
  name,
  listingName,
  lastMessage,
  date,
  profilePhoto,
  listingPhoto,
}) => {
  return (
    <View style={chatsListStyles.messagecardcontainer}>
      <View style={chatsListStyles.profilephoto}>
        <Avatar.Image source={{ uri: profilePhoto }} />
      </View>
      <View style={chatsListStyles.cardcontent}>
        <View style={chatsListStyles.nameanddate}>
          <Text  style={chatsListStyles.greytext}>
            {name}
          </Text>
          <Text style={chatsListStyles.greytext}>
            {date}
          </Text>
        </View>
        <View style={chatsListStyles.listingdetails}>
          <View style={chatsListStyles.listingandmessage}>
            <Text
              variant="bodyMedium"
              style={{ fontWeight: "bold", fontSize: fontSize * 1.2}}
              numberOfLines={1}
            >
              {listingName}
            </Text>
            <Text style={chatsListStyles.greytext} numberOfLines={1}>
              {lastMessage}
            </Text>
          </View>
          <View style={chatsListStyles.chatdetails}>
            <Avatar.Image
              // source={{ uri: listingPhoto }}
              style={{ ...chatsListStyles.listingPhoto, borderRadius: 10 }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessageCard;
