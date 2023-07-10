import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { SelectCountry } from "react-native-element-dropdown";
import { Avatar } from "react-native-paper";

import { categories } from "./Categories";

const local_data = [
  {
    value: "1",
    lable: "Country 1",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
  {
    value: "2",
    lable: "Country 2",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
  {
    value: "3",
    lable: "Country 3",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
  {
    value: "4",
    lable: "Country 4",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
  {
    value: "5",
    lable: "Country 5",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
  {
    value: "6",
    lable: "Country 6",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
  {
    value: "7",
    lable: "Country 7",
    image: {
      uri: "https://www.vigcenter.com/public/all/images/default-image.jpg",
    },
  },
];

const MyDropdown = (_props) => {
  const [country, setCountry] = useState("1");

  return (
    <SelectCountry
      containerStyle={{ borderRadius: 10 }}
          itemContainerStyle={{ paddingLeft: 40 }}
          itemTextStyle={{alignItems: 'center'}}
      activeColor="pink"
      style={styles.dropdown}
      selectedTextStyle={styles.selectedTextStyle}
      placeholderStyle={styles.placeholderStyle}
      imageStyle={styles.imageStyle}
      iconStyle={styles.iconStyle}
      maxHeight={500}
      value={country}
      data={categories}
      valueField="_id"
      labelField="name"
      imageField="image"
      //   placeholder="Select country"
      searchPlaceholder="Search..."
      onChange={(e) => {
        setCountry(e.value);
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
    backgroundColor: "#EEEEEE",
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
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 18,
    marginLeft: 20,
    fontWeight: "bold",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
});
