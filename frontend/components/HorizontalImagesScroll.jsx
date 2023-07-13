import { View, Text, ScrollView } from "react-native";
import React from "react";
import AddImageCard from "./AddImageCard";
import { colors } from "../styles/palette";

const images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const HorizontalImagesScroll = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{
        backgroundColor: colors.isabelline,
        minHeight: "100%",
        maxHeight: "100%",
      }}
      contentContainerStyle={{ alignItems: "center" }}
    >
      {images.map((img) => (
        <View key={img} style={{ maxWidth: "40%", paddingHorizontal: "1%" }}>
          <AddImageCard />
        </View>
      ))}
    </ScrollView>
  );
};

export default HorizontalImagesScroll;
