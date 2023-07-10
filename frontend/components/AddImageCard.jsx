import { View, Text } from "react-native";
import * as React from "react";
import { Avatar, Card } from "react-native-paper";

const AddImageCard = () => {
  return (
      <Card
          style={{minWidth: '35%', maxHeight: '90%', minHeight: '90%', alignItems: 'center', justifyContent: 'center'}}
      >
          {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
          <Avatar.Icon icon="plus-box-outline" style={{backgroundColor: 'transparent'}} color="lightgrey" size={80}/>
    </Card>
  );
};

export default AddImageCard;
