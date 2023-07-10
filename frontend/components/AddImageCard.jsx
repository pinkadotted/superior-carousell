import { View, Text } from "react-native";
import * as React from "react";
import { Card } from "react-native-paper";

const AddImageCard = () => {
  return (
    <Card style={{minWidth: '30%', maxWidth: '30%', minHeight: '20%', maxHeight: '20%'}}>
      <Card.Cover source={{ uri: "https://picsum.photos/700" }} />
    </Card>
  );
};

export default AddImageCard;
