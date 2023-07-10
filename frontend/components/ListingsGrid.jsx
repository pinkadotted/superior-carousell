import { View, Text, ScrollView } from "react-native";
import React from "react";
import { SimpleGrid } from "react-native-super-grid";
import ListingCard from "./ListingCard";

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
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={({ item }) => <ListingCard />}
      />
    </ScrollView>
    // </View>
  );
};

export default ListingsGrid;
