import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

import { listingCard } from "../styles/styles";


const { height, width } = Dimensions.get("window");
const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ListingCard = ({ id, name, price, category, img }) => {


  // console.log(height, width)

  const navigate = useNavigation();

  return (
    <Card style={listingCard.cardcontainer} onPress={() => navigate.navigate('product-details')}>
      <Card.Cover source={{ uri: img  }} style={listingCard.imgcontainer} />
      {/* <Card.Content style={styles.contentcontainer}>
        <Text
          variant="titleLarge"
          style={{
            justifyContent: "center",
            paddingTop: "10%",
            fontSize: 20,

          }}
        >
          {name}
        </Text>
        <View style={styles.bottomcontainer}>
          <Text style={{ fontSize: 30 }}>{price}</Text>
          <Avatar.Icon icon="tshirt-crew" size={40} />
        </View>
      </Card.Content> */}
    </Card>
  );
};

const styles = StyleSheet.create({
  imgcontainer: {
    minHeight: 0.15 * height,
    maxHeight: 0.15 * height,
  },
  contentcontainer: {
    flex: 1,
    borderWidth: 2,
    alignItems: 'stretch'

  },
  bottomcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    borderWidth: 2
  },
});

export default ListingCard;
