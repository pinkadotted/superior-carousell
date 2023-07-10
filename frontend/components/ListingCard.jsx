import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Avatar, Button, Card, Text } from "react-native-paper";

const LeftContent = (props) => <Avatar.Icon {...props} icon="folder" />;

const ListingCard = () => (
  <Card style={styles.cardcontainer}>
    <Card.Cover
      source={{ uri: "https://picsum.photos/700" }}
      style={styles.imgcontainer}
    />
    <Card.Content style={styles.textcontainer}>
      <Text variant="titleLarge" style={{justifyContent: 'center', paddingTop: '10%',fontSize: 20, borderColor: 'purple', borderRadius: 2}}>SUTD T-shirt</Text>
      <View style={styles.bottomcontainer}>
        <Text style={{fontSize: 30}}>$10</Text>
        <Avatar.Icon icon="tshirt-crew" size={40} />
      </View>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  cardcontainer: {
    minWidth: "60%",
    maxHeight: '90%',

  },
  imgcontainer: {
    maxHeight: '50%'
  },
  textcontainer: {
    flex: 1,
    flexDirection: "column",
    borderRadius: 2,
    borderColor: "purple",
  },
  name: {},
  bottomcontainer: {
    flex: 1,
    flexDirection: "row",
    borderRadius: 2,
    borderColor: "purple",
    justifyContent: 'space-between',
    alignItems: 'center'
  },
});

export default ListingCard;
