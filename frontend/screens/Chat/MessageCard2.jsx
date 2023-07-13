import { Avatar, Text } from "react-native-paper";
import React from "react";
import { testStyles } from "../../styles/styles";
import { Image, View } from "react-native";

const MessageCard2 = ({
  name,
  listingName,
  lastMessage,
  date,
  profilePhoto,
  listingPhoto,
}) => {
  return (
    <View style={testStyles.messagecardcontainer}>

      <View style={testStyles.profilephoto}>
        <Avatar.Image
          size={60}
          source={{uri: profilePhoto}}
        />
      </View>

      {/* Card Content */}
      <View style={testStyles.cardcontent}>
        {/* Name + Date */}
        <View style={testStyles.nameanddate}>
                      {/* Name */}
          <View style={{...testStyles.uppergroup, flex: 0, maxWidth: "70%"}}>
            <Text style={testStyles.smalltext} numberOfLines={1}>
              {name}
            </Text>
          </View>
                      {/* Date */}
          <View style={{...testStyles.uppergroup, justifyContent: "flex-end"}}>
            <Text style={testStyles.smalltext} numberOfLines={1}>
              {date}
            </Text>
          </View>
        </View>
        {/* Listing Name + Last Message + Listing Photo */}
        <View style={testStyles.chatdetails}>
          {/* Listing Name + Last Message */}
          <View style={testStyles.listingdetails}>
            <Text style={{...testStyles.smalltext, color:"black", fontWeight:"bold"}} numberOfLines={1}>{listingName}</Text>
            <Text style={testStyles.smalltext} numberOfLines={1}>{lastMessage}</Text>
          </View>
          {/* Listing Photo */}
          <View style={testStyles.listingimage}>
            <Image style={testStyles.imagestyle} source={{ uri: listingPhoto }} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MessageCard2;
