import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  ScrollView,
  Image,
  Dimensions,
  KeyboardAvoidingView,
} from "react-native";
import MySearchBar from "../components/MySearchBar";
import MyTextInput from "../components/MyTextInput";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from "@react-navigation/native";
import { fontSize } from "../styles/styles";


const Register = () => {
  const navigate = useNavigation();
  return (
    //  <KeyboardAvoidingView style={styles.container} behavior="position">
    <View style={styles.container}>
      <Text style={styles.headertext}>Create account</Text>
      <ScrollView style={styles.formcontainerouter} contentContainerStyle={styles.formcontainerinner} showsVerticalScrollIndicator={false}>
        <View style={styles.verticalcontainer}>
          <Text style={styles.labeltext}>Email</Text>
          <MyTextInput placeholder="Enter your email" />
        </View>
        <View style={styles.verticalcontainer}>
          <Text style={styles.labeltext}>Password</Text>
          <MyTextInput placeholder="Set up a password" isPassword={true} />
          <Text style={{ ...styles.labeltext, fontWeight: 'normal' }}>Include at least 6 characters</Text>
        </View>
        <View style={styles.verticalcontainer}>
          <Text style={styles.labeltext}>Re-enter Password</Text>
          <MyTextInput placeholder="" isPassword={true} />
        </View>
      </ScrollView>
      <View>
        <TouchableOpacity style={styles.createaccount}>
          <Text style={styles.createaccounttext}>Create Account</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.horizontalcontainer}>
        <Text>Already have an account? </Text>
        <TouchableOpacity onPress={() => navigate.navigate("login")}>
          <Text style={styles.logintext}>Log in</Text>
        </TouchableOpacity>
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
    fontSize: fontSize*2,
  },
  createaccount: {
    minWidth: "90%",
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
    fontSize: fontSize*1.3,
    fontWeight: "bold",
  },
  horizontalcontainer: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: "5%",
  },
  verticalcontainer: {
    flex: 1,
    borderWidth: 2,
    borderColor: "green",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "30%",
    maxWidth: "90%",
  },
  formcontainerouter:{
    flex: 1,
    borderWidth:2,
    borderColor: "blue",
    maxHeight: "60%",
    maxWidth: "100%",
  },
  formcontainerinner:{
    justifyContent: "center",
    alignItems: "center",
  },
  logintext: {
    color: "#06aa6b",
    fontWeight: 'bold'
  },
});

export default Register;
