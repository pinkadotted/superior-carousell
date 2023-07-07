import React from 'react'

import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Image,
  Dimensions,
} from "react-native";
import MyCarousel from "../components/MyCarousel";
import { useNavigate } from 'react-router-dom';

const NewLanding = () => {

    const navigate = useNavigation()
  return (
<View style={styles.container}>
      <MyCarousel />
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../assets/images/google.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Continue with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Image
          source={require("../assets/images/facebook.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Continue with Facebook</Text>
      </TouchableOpacity>
          <TouchableOpacity style={styles.button}
          onPress={() => navigate.navigate('email-register')}>
        <Image
          source={require("../assets/images/email.png")}
          style={styles.image}
        />
        <Text style={styles.text}>Continue with Email</Text>
      </TouchableOpacity>
      <Text style={styles.tos}>
        By signing up, you agree to our
        <Text style={[styles.tos, styles.greentext]}> Terms of Service </Text>
        and
        <Text style={[styles.tos, styles.greentext]}> Privacy Policy</Text>
      </Text>
      <Text style={styles.version}>Version:2.312.6.2055 (6956)</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 20,
    },
    button: {
      borderWidth: 2,
      borderColor: "grey",
      borderRadius: 8,
      padding: 10,
      width: "95%",
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    image: {
      height: 30,
      width: 30,
      // borderWidth: 2,
      // borderColor: "grey",
      marginLeft: 10,
    },
    text: {
      marginRight: 90,
      alignItems: "center",
      justifyContent: "center",
      fontSize: 15,
      fontWeight: "bold",
    },
    imageContainer: {
      alignItems: "flex-start",
      borderWidth: 2,
      borderColor: "grey",
      maxWidth: Dimensions.get("window").width * 0.5,
      maxHeight: 50,
    },
    tos: {
      fontSize: 10.5,
      marginTop: 10,
      fontWeight: "bold",
      marginLeft: 9,
      marginRight: 9,
    },
    greentext: {
      color: "#06aa6b",
    },
    version: {
      fontWeight: "bold",
      fontSize: 10.5,
      marginTop: 25,
    },
  });

export default NewLanding