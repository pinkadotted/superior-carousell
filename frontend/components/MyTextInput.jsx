import * as React from "react";
import { TextInput } from "react-native-paper";
import { View } from "react-native";

const MyTextInput = ({ placeholder, isPassword = false }) => {
  const [text, setText] = React.useState("");

  return (
    <View style={{ height: 50, justifyContent: "center" }}>
      <TextInput
        value={text}
        onChangeText={(text) => setText(text)}
        label={placeholder}
        style={{
          height: 50,
          width: 350,
          backgroundColor: "#eaeaea",
          borderWidth: 0,
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
