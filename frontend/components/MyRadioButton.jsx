import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { colors } from "../styles/palette";
import { defaultStyles } from "../styles/styles";

const MyRadioButton = () => {
  const [checked, setChecked] = React.useState("first");

  const firstOption = "Cash on Delivery / Meetup";
  const secondOption = "Pay online";

  return (
    <>
      <View style={defaultStyles.radiooptioncontainer}>
        <Text style={defaultStyles.radiotext}>{firstOption}</Text>
        <RadioButton
          color={colors.bittersweet}
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        />
      </View>
      <View style={defaultStyles.radiooptioncontainer}>
        <Text style={defaultStyles.radiotext}>{secondOption}</Text>
        <RadioButton
          color={colors.bittersweet}
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
      </View>
    </>
  );
};

export default MyRadioButton;
