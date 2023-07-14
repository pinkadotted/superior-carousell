import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MyIcon from "./utils/MyIcon";
import { colors } from "../styles/palette";
import { defaultStyles, fontSize } from "../styles/styles";

export const categories = [
  {
    name: "Clothes",
    _id: 1,
    iconName: "tshirt-crew-outline",
    image: {
      uri: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
    },
  },
  {
    name: "Shoes",
    _id: 2,
    iconName: "shoe-sneaker",
    image: {
      uri: "https://image.pngaaa.com/553/1538553-middle.png",
    },
  },
  {
    name: "Cars",
    _id: 3,
    iconName: "car",
    image: {
      uri: "https://www.creativefabrica.com/wp-content/uploads/2021/02/08/car-icon-red-Graphics-8433168-1.jpg",
    },
  },
  {
    name: "Accessories",
    _id: 4,
    iconName: "watch",
    image: {
      uri: "https://www.iconpacks.net/icons/2/free-hat-icon-1866-thumb.png",
    },
  },
  {
    name: "Tickets",
    _id: 5,
    iconName: "ticket-percent-outline",
    image: {
      uri: "https://img.freepik.com/premium-vector/two-tickets-icon-illustration-ticket-entrance-event_385450-19.jpg?w=2000",
    },
  },
  {
    name: "Services",
    _id: 6,
    iconName: "room-service-outline",
    image: {
      uri: "https://icon-library.com/images/services-icon-png/services-icon-png-8.jpg",
    },
  },
];

const Categories = () => {
  return (
    <View style={defaultStyles.container}>
      {/* Actual items */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          backgroundColor: colors.isabelline,
        }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {categories.map((item) => (
          <TouchableOpacity
            style={{ margin: 5, alignItems: "center" }}
            key={item._id}
          >
            <MyIcon size={100} icon={item.iconName} bgColor="lightgrey" />
            <Text style={{fontSize: fontSize}}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Categories;
