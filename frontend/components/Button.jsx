import { View, Text, Pressable, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { colors } from "../styles/palette";
import { fontSize, simpleComponents } from "../styles/styles";

const Button = ({ text, bgColor = colors.springgreen, textColor= "white"}) => {
  return (
      <TouchableOpacity activeOpacity={0.6} style={{ ...simpleComponents.button, backgroundColor: bgColor }}>
      <Text style={{ fontSize: fontSize*1.3, fontWeight: 'bold', color: textColor }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Button;
