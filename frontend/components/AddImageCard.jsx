import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import * as React from "react";
import { Avatar, Card } from "react-native-paper";

const AddImageCard = () => {
  return (
    <Pressable
      onPress={() => console.log("Pressed!")}
      // style={({ pressed }) => {
      //   backgroundColor: pressed ? "green" : "cyan";
      // }}
      // style={{backgroundColor: 'blue'}}
    >
      <Card
        mode="contained"
        style={{
          minWidth: "40%",
          maxHeight: "90%",
          minHeight: "90%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: '#ffeaf6'
        }}
      >
        {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
        <Avatar.Icon
          icon="camera-plus-outline"
          style={{ backgroundColor: "transparent" }}
          color="red"
          size={80}
        />
      </Card>
    </Pressable>
  );
};

export default AddImageCard;
