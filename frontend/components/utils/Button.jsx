import {
  View,
  Text,
  Pressable,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { colors } from "../../styles/palette";
import { simpleComponents } from "../../styles/styles";
import { useNavigation } from "@react-navigation/native";

const Button = ({
  navigateTo,
  text,
  bgColor = colors.springgreen,
  textColor = "white",
}) => {
  const navigate = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigate.navigate(navigateTo)}
      activeOpacity={0.6}
      style={{ ...simpleComponents.button, backgroundColor: bgColor }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: textColor }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;