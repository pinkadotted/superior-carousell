import React from "react";
import { Button } from "react-native-paper";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  SafeAreaView,
  StatusBar,
} from "react-native";

const categories = ["Clothes", "Shoes", "Cars", "Accessories", "Tickets"];

const Categories = () => {
  return (
    <View style={styles.flexcontainer}>
      <View style={styles.flexcontainer}>
        <Text
          style={{
            fontSize: 30,
            fontWeight: "bold",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          Categories
        </Text>
      </View>

      {/* Actual items */}
      <View style={styles.categoriescontainer}>
        {categories.map((category) => (
          <Button style={styles.categorybutton}>{category}</Button>
        ))}

        <Button>Nice</Button>
        <Button>Nice</Button>
      </View>
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
    borderColor: "red",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headertext: {
    fontSize: 40,
    fontWeight: "bold",
  },
  categoriescontainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "green",
    minHeight: "10%",
    minWidth: "90%",
  },
  flexcontainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  categorybutton: {
    borderRadius: 100,
    margin: 5,
    borderWidth: 2,
    borderColor: "green",
  },
});

export default Categories;
