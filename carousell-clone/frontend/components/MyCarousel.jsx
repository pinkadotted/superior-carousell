import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Carousel from "react-native-snap-carousel";

const MyCarousel = () => {
  const carouselData = [
    { id: 1, image: require("../assets/images/sell.jpg") },
    { id: 2, image: require("../assets/images/discover-good-deals.jpg") },
    { id: 3, image: require("../assets/images/chat-instantly.jpg") },
    { id: 4, image: require("../assets/images/movement.jpg") },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Image source={item.image} style={styles.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          data={carouselData}
          renderItem={renderItem}
          sliderWidth={400}
          itemWidth={350}
          containerCustomStyle={styles.carousel}
          contentContainerCustomStyle={styles.carouselContent}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
        alignItems: "center",
    marginBottom: 90
    // borderWidth: 2,
    // borderColor: "grey",
  },
  carouselContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
  },
  slide: {
    width: 350,
    height: 350,
    justifyContent: "center",
    alignItems: "center",
  },
  carousel: {
    alignSelf: "center",
  },
  carouselContent: {
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    // borderWidth: 2,
    // borderColor: "grey",
  },
});

export default MyCarousel;