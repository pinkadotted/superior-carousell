import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";
import { colors } from "../styles/palette";

const MyTextInput = ({
  sendDataToParent = () => {},
  placeholder,
  isPassword = false,
  multiline = false,
  isEmail = false,
  isNum = false
}) => {
  const [text, setText] = React.useState("");
  // console.log('title is: ', text)

  return (

    <TextInput
      multiline={multiline}
      keyboardType={isEmail ? "email-address" : isNum ? 'decimal-pad' : 'default'}
      value={text}
      onBlur={() => sendDataToParent(text)}
      onChangeText={(value) => setText(value)}
      placeholder={placeholder}
      numberOfLines={multiline ? 4 : 1}
      textColor={colors.caribbeancurrent}
      style={{
        borderRadius: 4,
        flex: 1,
        maxHeight: '100%',
        minHeight: '100%',
        minWidth: "100%",
        maxWidth: "100%",
        justifyContent: 'center',
        backgroundColor: colors.springgreen3,
        // lineHeight: 10,
        // borderWidth: 2,
        // borderColor: 'green',
      }}
      right={isPassword ? <TextInput.Icon icon="eye" /> : null}
      secureTextEntry={isPassword ? true : false}
      mode="flat"
      underlineColor="transparent"
      activeUnderlineColor="transparent"
      cursorColor={colors.caribbeancurrent}
    />

  );
};

export default MyTextInput;
