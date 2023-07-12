import { View, Text } from "react-native";
import React from "react";
import { Avatar } from "react-native-paper";
import { defaultStyles } from "../../styles/styles";
import { colors } from "../../styles/palette";

const MyIcon = ({
  icon = "tshirt-crew",
  size = 40,
  color = colors.bittersweet,
}) => {
  return (
    <Avatar.Icon
      icon={icon}
      size={size}
      color={color}
      style={defaultStyles.icon}
    />
  );
};

export default MyIcon;
