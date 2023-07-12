import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { listingCard } from "../styles/styles";
import { colors } from "../styles/palette";
import MyIcon from "./utils/MyIcon";

const ListingCard = ({ id, name, price, category, img }) => {
  const navigate = useNavigation();

  return (
    <Card
      style={listingCard.cardcontainer}
      onPress={() => navigate.navigate("product-details")}
    >
      <Card.Cover source={{ uri: img }} style={listingCard.imgcontainer} />
      <Card.Content style={listingCard.contentcontainer}>
        <Text
          variant="titleLarge"
          style={{
            justifyContent: "center",
            paddingTop: "5%",
            fontSize: 20,
          }}
        >
          {name}
        </Text>
        <View style={listingCard.bottomcontainer}>
          <Text style={{ fontSize: 30, color:colors.caribbeancurrent }}>${price}</Text>
          <MyIcon />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ListingCard;
