import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";

const MyTextInput = ({ placeholder, isPassword = false, multiline = false }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={{ height: 50, justifyContent: "center" }}>
      <TextInput
        multiline={multiline}
        value={text}
        onChangeText={(text) => setText(text)}
        label={placeholder}
        style={{
          height: multiline ? 120 : 50,
          minWidth: "100%",
          backgroundColor: "#eaeaea",
          borderWidth: 0,
          lineHeight: 20
        }}
        right={isPassword ? <TextInput.Icon icon="eye" /> : null}
        secureTextEntry={isPassword ? true : false}
        mode="outlined"
        activeOutlineColor="#06aa6b"
        textAlign={"center"}
        cursorColor="#06aa6b"
      />
    </View>
  );
};

export default MyTextInput;
