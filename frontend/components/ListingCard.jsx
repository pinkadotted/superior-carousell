import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { defaultStyles, fontSize, listingCard } from "../styles/styles";
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
        <View>
          <Text
            variant="titleLarge"
            style={{
              justifyContent: "center",
              paddingTop: "5%",
              fontSize: fontSize,
              lineHeight: 20
            }}
            numberOfLines={2}
            
          >
            {name}
          </Text>
        </View>

        <View style={listingCard.bottomcontainer}>
          <Text style={{ fontSize: 30, color: colors.caribbeancurrent }}>
            ${price}
          </Text>

          {/* Only this icon needs special styling for alignItems and justifyContent*/}
          <MyIcon size={70} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ListingCard;
