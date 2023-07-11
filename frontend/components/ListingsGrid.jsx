import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SimpleGrid } from "react-native-super-grid";
import ListingCard from "./ListingCard";

const listings = [
  {
    id: 1,
    name: "SUTD T-shirt",
    price: "11",
    category: "Clothes",
    img: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    id: 2,
    name: "SUTD Exclusive Shoes",
    price: "12",
    category: "Shoes",
    img: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    id: 3,
    name: "SUTD Hoodie",
    price: "13",
    category: "Accessories",
    img: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    id: 4,
    name: "Taylor Swift Tickets",
    price: "14",
    category: "Tickets",
    img: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
  {
    id: 5,
    name: "Maserati 911",
    price: "15",
    category: "Cars",
    img: "https://cdn-icons-png.flaticon.com/512/3421/3421758.png",
  },
];

const ListingsGrid = () => {
  return (
    // <View>
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ justifyContent: "flex-start", alignItems: "center" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold", paddingTop: 20 }}>
          Recent Listings
        </Text>
      </View>
      <SimpleGrid
        itemDimension={130}
        data={listings}
        renderItem={({ item }) => (
          <ListingCard
            id={item.id}
            name={item.name}
            price={item.price}
            category={item.category}
            img={item.img}
          />
        )}
      />
    </ScrollView>
    // </View>
  );
};

export default ListingsGrid;
