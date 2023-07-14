import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";
import { colors } from "../styles/palette";
import { defaultStyles } from "../styles/styles";

const MyRadioButton = ({ sendDataToParent }) => {

  const firstOption = "Cash on Delivery / Meetup";
  const secondOption = "Pay online";
  const [checked, setChecked] = React.useState(firstOption);
  return (
    <>
      <View style={defaultStyles.radiooptioncontainer}>
        <Text style={defaultStyles.radiotext}>{firstOption}</Text>
        <RadioButton
          color={colors.springgreen}
          value={firstOption}
          status={checked === firstOption ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(firstOption);
            const newVal = firstOption;
            sendDataToParent(newVal);
          }}
        />
      </View>
      <View style={defaultStyles.radiooptioncontainer}>
        <Text style={defaultStyles.radiotext}>{secondOption}</Text>
        <RadioButton
          color={colors.springgreen}
          value={secondOption}
          status={checked === secondOption ? "checked" : "unchecked"}
          onPress={() => {
            setChecked(secondOption);
            const newVal = secondOption;
            sendDataToParent(newVal);
          }}
        />
      </View>
    </>
  );
};

export default MyRadioButton;
