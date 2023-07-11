import * as React from "react";
import { View, Text } from "react-native";
import { RadioButton } from "react-native-paper";

const MyRadioButton = () => {
  const [checked, setChecked] = React.useState("first");

  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          //   borderWidth: 3,
          //   borderColor: "magenta",
          minHeight: "30%",
          maxHeight: "30%",
          minWidth: "80%",
          maxWidth: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>
          Cash on Delivery / Meetup
        </Text>
        <RadioButton
          color="red"
          value="first"
          status={checked === "first" ? "checked" : "unchecked"}
          onPress={() => setChecked("first")}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          //   borderWidth: 6,
          //   borderColor: "cyan",
          minHeight: "30%",
          maxHeight: "30%",
          minWidth: "80%",
          maxWidth: "80%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontWeight: "bold", fontSize: 17 }}>Pay online</Text>
        <RadioButton
          color="red"
          value="second"
          status={checked === "second" ? "checked" : "unchecked"}
          onPress={() => setChecked("second")}
        />
      </View>
    </>
  );
};

export default MyRadioButton;
