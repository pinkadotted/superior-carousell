import {
    StyleSheet,
    Text,
    TouchableOpacity,
    TouchableHighlight,
    View,
    Image,
    Dimensions,
    KeyboardAvoidingView,
  } from "react-native";
  import MySearchBar from "../components/MySearchBar";
  import MyTextInput from "../components/MyTextInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";

  
const Login = () => {
    const navigate = useNavigation();

    return (
      //  <KeyboardAvoidingView style={styles.container} behavior="position">
      <View style={styles.container}>
        <Text style={styles.headertext}>Log In</Text>
        <View style={styles.verticalcontainer}>
          <Text style={styles.labeltext}>Email</Text>
          <MyTextInput placeholder="Enter your email" />
        </View>
        <View style={styles.verticalcontainer}>
          <Text style={styles.labeltext}>Password</Text>
          <MyTextInput placeholder="Set up a password" isPassword={true} />
        </View>
        <View>
          <TouchableOpacity style={styles.createaccount} onPress={() => navigate.navigate('main-nav')}>
            <Text style={styles.createaccounttext}>Log In</Text>
          </TouchableOpacity>
        </View>
  
        <View style={styles.horizontalcontainer}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigate.navigate('email-register')}>
            <Text style={styles.logintext}>Register</Text>
          </TouchableOpacity>
        <View style={styles.formcontainer}>
          <View style={styles.verticalcontainer}>
            <Text style={styles.labeltext}>Email</Text>
            <MyTextInput placeholder="Enter your email" />
          </View>
          <View style={styles.verticalcontainer}>
            <Text style={styles.labeltext}>Password</Text>
            <MyTextInput placeholder="Set up a password" isPassword={true} />
          </View>
        </View>

        <View style={styles.bottomcontainer}>
          <View>
            <TouchableOpacity style={styles.createaccount}>
              <Text style={styles.createaccounttext}>Log In</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.horizontalcontainer}>
            <Text>Don't have an account? </Text>
            <TouchableOpacity onPress={() => navigate.navigate('email-register')}>
              <Text style={styles.logintext}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
      // </KeyboardAvoidingView>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      borderWidth: 2,
      borderColor: "red",
      justifyContent: "flex-start",
      paddingTop: 50,
    },
    labeltext: {
      alignItems: "flex-start",
      borderWidth: 2,
      borderColor: "grey",
      maxWidth: "100%",
      minWidth: "100%",
      marginTop: 10,
      fontWeight: 'bold'
    },
    headertext: {
      fontWeight: "bold",
      fontSize: 30,
    },
    createaccount: {
      minWidth: "100%",
      height: "10%",
      minHeight: 50,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#06aa6b",
      borderRadius: 10,
      marginTop: 30,
      borderWidth: 2,
      borderColor: "black",
    },
    createaccounttext: {
      color: "white",
      fontSize: 20,
      fontWeight: "bold",
    },
    horizontalcontainer: {
      flex: 1,
      flexDirection: "row",
      borderWidth: 2,
      borderColor: "grey",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "100%",
      maxHeight: 30,
    },
    verticalcontainer: {
      flex: 1,
      borderWidth: 2,
      borderColor: "green",
      justifyContent: "center",
      alignItems: "center",
      maxHeight: 100,
      maxWidth: "90%",
    },
    formcontainer: {
      flex: 1,
      borderWidth:2,
      borderColor: "blue",
      justifyContent: "center",
      alignItems: "flex-start",
      maxHeight: 300,
      maxWidth: "100%",
    },
    bottomcontainer: {
      flex: 1,
      borderWidth: 2,
      borderColor: "green",
      justifyContent: "center",
      alignItems: "flex-end",
      maxWidth: "90%",
    },
    logintext: {
      color: "#06aa6b",
      fontWeight: 'bold'
    },
  });
  
  export default Login;