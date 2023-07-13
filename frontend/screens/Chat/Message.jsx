import { View, Text } from "react-native";
import React from "react";
import { chatStyles } from "../../styles/styles";
import { colors } from "../../styles/palette";

const Message = ({ time, isLeft, message }) => {

    const isOnLeft = type => {
        if (isLeft && type === 'messagecontainer') {
            return {
                alignSelf: 'flex-start',
                backgroundColor: colors.caribbeancurrent,
                borderTopLeftRadius: 0
            }
        } else if (isLeft && type === 'message') {
            return {
                color: 'white',
            }
        } else if (isLeft && type === "time") {
            return {
                color: 'darkgrey'
            }
        } else {
            return {
                borderTopRightRadius: 0
            }
        }
    }

  return (
    <View style={chatStyles.container}>
      <View style={[chatStyles.messagecontainer, isOnLeft('messagecontainer')]}>
        <View style={chatStyles.messageview}>
          <Text style={[chatStyles.message, isOnLeft('message')]}>{message}</Text>
        </View>
        <View style={chatStyles.timeview}>
          <Text style={[chatStyles.time, isOnLeft('time')]}>{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default Message;
