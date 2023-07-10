import React from "react";
import { Avatar, Button } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Categories = () => {
  const category_array = ["Clothes", "Shoes", "car", "Accessories", "Tickets"];

  const categories = [
    {
      name: "Clothes",
      _id: 1,
      iconName: "tshirt-crew-outline",
    },
    {
      name: "Shoes",
      _id: 2,
      iconName: "shoe-sneaker",
    },
    {
      name: "Cars",
      _id: 3,
      iconName: "car",
    },
    {
      name: "Accessories",
      _id: 4,
      iconName: "watch",
    },
    {
      name: "Tickets",
      _id: 5,
      iconName: "ticket-percent-outline",
    },
    {
      name: "Services",
      _id: 6,
      iconName: 'room-service-outline'
    }
  ];

  return (
    <View style={styles.flexcontainer}>
      {/* <View style={{ ...styles.flexcontainer, maxHeight: '30%' }}> */}
        {/* <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Categories
        </Text> */}
      {/* </View> */}

      {/* Actual items */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: 'white' }}
        contentContainerStyle={{alignItems: 'center'}}
      >
        {/* <View style={styles.categoriescontainer}> */}
        {categories.map((item) => (
          <TouchableOpacity style={styles.categorybutton} key={item._id}>
            <Avatar.Icon
              icon={item.iconName}
              style={{ backgroundColor: "transparent", alignItems: "center", justifyContent: 'center' }}
              size={70}
              color="red"
            />
            <Text>{item.name}</Text>
          </TouchableOpacity>
        ))}
        {/* </View> */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderColor: "blue",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headertext: {
    fontSize: 40,
    fontWeight: "bold",
  },
  categoriescontainer: {
    flexDirection: "row",
    borderWidth: 5,
    borderColor: "blue",
    minHeight: "10%",
    maxHeight: '20%',
    minWidth: "100%",
    maxWidth: '100%'
  },
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
    // borderColor: "green",
    maxWidth: '100%',
    minWidth: '100%',
    // maxHeight: '100%',
    // minHeight: '100%',
  },
  categorybutton: {
    borderRadius: 20,
    margin: 5,
    // borderWidth: 2,
    // borderColor: "blue",
    // maxHeight: "15%",
    // minHeight: '15%',
    // justifyContent: 'center',
    alignItems: "center",
  },
});

export default Categories;
