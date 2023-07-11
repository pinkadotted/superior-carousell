import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

const Button = ({ text, bgColor, textColor }) => {
  console.log("text: ", text);
  return (
      <TouchableOpacity activeOpacity={0.6} style={{ ...styles.default, backgroundColor: bgColor }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    default: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
  },
});

export default Button;
