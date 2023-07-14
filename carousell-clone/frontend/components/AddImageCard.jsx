import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Pressable,
} from "react-native";
import * as React from "react";
import { Avatar, Card } from "react-native-paper";
import { colors } from "../styles/palette";
import { fontSize } from "../styles/styles";

const AddImageCard = () => {
  return (
    <TouchableOpacity
      onPress={() => console.log("Pressed!")}
      activeOpacity={0.6}
    >
      <Card
        mode="contained"
        style={{
          minWidth: "40%",
          maxHeight: "90%",
          minHeight: "90%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.springgreen3,
        }}
      >
        {/* <Card.Cover source={{ uri: "https://picsum.photos/700" }} /> */}
        <Avatar.Icon
          icon="camera-plus-outline"
          style={{ backgroundColor: "transparent" }}
          color={colors.springgreen1}
          size={fontSize * 4.5} // need to change scale factor later
        />
      </Card>
    </TouchableOpacity>
  );
};

export default AddImageCard;
