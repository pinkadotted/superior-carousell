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
        <View
         style={{
          // borderWidth: 2, borderColor: "orange",
          flex: 1, minHeight: "60%", maxHeight: "60%",}}
         >
          <Text
            variant="titleLarge"
            style={{
              justifyContent: "center",
              fontSize: fontSize,
              lineHeight: fontSize*1.2,
              // borderWidth: 2, borderColor: "yellowgreen",
            }}
            numberOfLines={2}
            
          >
            {name}
          </Text>
        </View>

        <View style={listingCard.bottomcontainer}>
          <Text style={{ fontSize: fontSize*1.7, color: colors.caribbeancurrent }}>
            ${price}
          </Text>

          {/* Only this icon needs special styling for alignItems and justifyContent*/}
          <MyIcon size={fontSize * 4} />
        </View>
      </Card.Content>
    </Card>
  );
};

export default ListingCard;
