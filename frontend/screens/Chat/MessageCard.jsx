import { Avatar, Button, Card, Text } from "react-native-paper";
import React from "react";
import { chatsListStyles } from "../../styles/styles";
import { View } from "react-native";

const MessageCard = ({
  name,
  listingName,
  lastMessage,
  date,
  profilePhoto,
  listingPhoto,
}) => {
  console.log("profilephoto: ", listingPhoto);
  return (
    <Card style={chatsListStyles.messagecardcontainer}>
          <Avatar.Image source={{ uri: profilePhoto }} style={ chatsListStyles.profilephoto} />
      <Card.Content style={chatsListStyles.cardcontent}>
        <View style={chatsListStyles.nameanddate}>
          <Text variant="bodyMedium">{name}</Text>
          <Text variant="bodyMedium">{date}</Text>
        </View>
        <View style={chatsListStyles.listingdetails}>
          <View style={chatsListStyles.chatdetails}>
            <Text variant="bodyMedium">{listingName}</Text>
            <Text variant="bodyMedium">{lastMessage}</Text>
          </View>
          <View style={chatsListStyles.chatdetails}>
            <Card.Cover source={{ uri: listingPhoto }} />
          </View>
        </View>
      </Card.Content>
    </Card>
  );
};

export default MessageCard;
