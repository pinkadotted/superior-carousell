import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";

const MyTextInput = ({
  placeholder,
  isPassword = false,
  multiline = false,
}) => {
  const [text, setText] = React.useState("");

  return (
    // <View style={{ height: 50, justifyContent: "center" }}>
    <TextInput
      multiline={multiline}
      value={text}
      onChangeText={(text) => setText(text)}
      label={placeholder}
      numberOfLines={multiline ? 4 : 1}
      textColor="red"
      style={{
        borderRadius: 4,
        flex: 1,
        // height: multiline ? 120 : 50,
        maxHeight: 120,
        minWidth: "90%",
        backgroundColor: "#ffeaf6",
        borderWidth: 0,
        lineHeight: 30,
        // borderWidth: 2,
        // borderColor: 'green',
      }}
      right={isPassword ? <TextInput.Icon icon="eye" /> : null}
      secureTextEntry={isPassword ? true : false}
      mode="flat"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      textAlign={"center"}
      cursorColor="red"
    />
    // </View>
  );
};

export default MyTextInput;
