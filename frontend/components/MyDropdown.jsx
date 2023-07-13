import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { categories } from "./Categories";
import { fontSize } from "../styles/styles";

const MyDropdown = (_props) => {
  const [category, setCategory] = useState({});

  return (
    <SelectCountry
      containerStyle={{ borderRadius: 10 }}
      itemContainerStyle={{ paddingLeft: 40 }}
      itemTextStyle={{ alignItems: "center" }}
      activeColor="pink"
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={500}
      // value={category}
      data={categories}
      valueField="name"
      labelField="name"
      imageField="image"
      onFocus={() => console.log('selecting...')}
      onBlur={() => console.log('the current category is : ', category)}
      onChange={(e) => {
        console.log("selected", e);
        setCategory(e);
        return
      }}
    />
  );
};

export default MyDropdown;

const styles = StyleSheet.create({
  dropdown: {
    margin: 16,
    height: 50,
    minWidth: "70%",
    backgroundColor: "#ffeaf6",
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  imageStyle: {
    width: 50,
    height: 50,
    borderRadius: 100,
    paddingLeft: 10,
  },
  placeholderStyle: {
    fontSize: fontSize,
  },
  selectedTextStyle: {
    fontSize: fontSize*1.1,
    marginLeft: 20,
    fontWeight: "bold",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
