import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { colors } from "./palette";

export const { height, width } = Dimensions.get("window");

export const fontSize = width * 0.04;

export const defaultStyles = StyleSheet.create({
  // CONTAINERS
  safecontainer: {
    flex: 1,
    backgroundColor: colors.isabelline,
    minWidth: "100%",
    maxWidth: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // minHeight: Dimensions.get("window").height,
    // borderWidth: 5,
    // borderColor: 'magenta'
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 2
  },
  headercontainer: {
    flex: 1,
    maxHeight: "10%",
    minHeight: "10%",
    paddingHorizontal: 7,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomnavcontainer: {
    flex: 1,
    minHeight: "10%",
    maxHeight: "10%",
    maxWidth: "100%",
    minWidth: "100%",
    // borderWidth: 2
  },

  // RADIOBUTTONS
  radiooptioncontainer: {
    flex: 1,
    flexDirection: "row",
    minHeight: "30%",
    maxHeight: "30%",
    minWidth: "80%",
    maxWidth: "80%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  radiotext: {
    fontWeight: "bold",
    fontSize: fontSize * 1.1,
  },

  // ICON
  icon: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2,
  },
});

export const simpleComponents = StyleSheet.create({
  searchbar: {
    borderRadius: 10,
    height: 50,
    minWidth: "85%",
    maxWidth: "85%",
    backgroundColor: colors.bittersweet,
  },

  // BOTTOM NAV
  bottomnav: {
    flex: 1,
    flexDirection: "row",
    minWidth: "100%",
    maxWidth: "100%",
    borderTopColor: colors.springgreen,
    borderTopWidth: 1,
    justifyContent: "space-around",
    alignItems: "center",
    position: "relative",
    backgroundColor: colors.isabelline,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
});

export const listingCard = StyleSheet.create({
  cardcontainer: {
    minWidth: "60%",
    minHeight: 0.3 * height,
    maxHeight: 0.3 * height,
    // borderWidth: 2,
  },
  imgcontainer: {
    minHeight: 0.15 * height,
    maxHeight: 0.15 * height,
  },
  contentcontainer: {
    flex: 1,
    // borderWidth: 2, borderColor: 'magenta',
    alignItems: "flex-start",
    justifyContent: "space-between",
    minHeight: 0.15 * height,
    maxHeight: 0.15 * height,
    paddingTop: "8%",
  },
  bottomcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    minHeight: "50%",
    maxHeight: "50%",
    minWidth: "100%",
    maxWidth: "100%",
    // borderWidth: 2, borderColor: "blue",
  },
});

export const profileStyles = StyleSheet.create({
  settingsbar: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "yellow",
    justifyContent: "flex-end",
    alignItems: "center",
    minHeight: "8%",
    maxHeight: "8%",
    width: "95%",
  },
  profiledetailscontainer: {
    // borderWidth: 2,
    // borderColor: "teal",
    minHeight: "20%",
    maxHeight: "20%",
    minWidth: "95%",
    maxWidth: "95%",
  },
  profilephoto: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "grey",
    justifyContent: "center",
    alignItems: "center",
    maxHeight: 100,
    maxWidth: "100%",
    // maxWidth: "40%",
  },
  profiletextcontainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderWidth: 1,
    borderColor: "transparent",
    // borderColor: "blue",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: 40,
    maxHeight: "20%",
    borderBottomColor: colors.bittersweet,
  },
  profiletextgroup: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    // borderWidth: 2,
    // borderColor: "greenyellow",
    maxWidth: "100%",
  },
  profiletext: {
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "green",
    maxWidth: "100%",
    fontSize: fontSize,
    color: colors.licorice,
  },
  yourlistings: {
    // borderWidth: 2,
    // borderColor: "powderblue",
    minHeight: "62%",
    maxHeight: "62%",
    minWidth: "100%",
    maxWidth: "100%",
  },
  headertext: {
    // borderWidth: 2,
    // borderColor: "cyan",
    fontWeight: "bold",
    fontSize: fontSize * 2,
    padding: "3%",
    maxWidth: "100%",
    justifyContent: "flex-start",
    color: colors.licorice,
  },
  scrollview: {
    // flex: 1,
    // borderWidth: 2,
    borderColor: "blue",
    maxWidth: "100%",
    minWidth: "100%",
  },
});

export const settingsStyles = StyleSheet.create({
  settingsbuttons: {
    flex: 1,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    minHeight: 60,
    maxHeight: 60,
    minWidth: "100%",
    maxWidth: "100%",

    borderBottomColor: colors.springgreen,
  },
});

export const chatStyles = StyleSheet.create({
  scrollview: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "magenta",
    maxWidth: "100%",
    minWidth: "100%",
    maxHeight: height * 0.8,
    // minHeight: '80%',
  },
  profilecontainer: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2,
    // borderColor: "green",
    // minHeight: "20%",
    // maxHeight: "20%",
    minWidth: "100%",
    maxWidth: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profilephotocontainer: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "grey",
    alignItems: "center",
    minWidth: "35%",
    maxWidth: "35%",
  },
  chatFooter: {
    flex: 1,
  },
  container: {
    paddingVertical: 10,
    marginVertical: 5,
    // borderWidth: 2
  },
  messagecontainer: {
    backgroundColor: colors.bittersweet,
    maxWidth: "80%",
    alignSelf: "flex-end",
    flexDirection: "row",
    borderRadius: 15,
    paddingHorizontal: 10,
    marginHorizontal: 10,
    paddingTop: 5,
    paddingBottom: 5,
  },
  messageview: {
    // backgroundColor: colors.springgreen,
    backgroundColor: "transparent",
    maxWidth: "80%",
  },
  message: {
    color: "white",
    alignSelf: "flex-start",
    fontSize: 15,
  },
  timeview: {
    backgroundColor: "transparent",
    justifyContent: "flex-end",
    paddingLeft: 10,
  },
  time: {
    color: "lightgrey",
    alignSelf: "flex-end",
    fontSize: 10,
  },
});

export const chatsListStyles = StyleSheet.create({
  messagecardcontainer: {
    flex: 1,
    flexDirection: "row",
    minHeight: height * 0.12,
    maxHeight: height * 0.12,
    borderWidth: 2,
    borderColor: "transparent",
    borderBottomColor: colors.springgreen,
    marginVertical: 10
  },
  cardcontent: {
    flex: 1,
    alignItems: "center",
    minWidth: "80%",
    maxWidth: "80%",
    paddingHorizontal: 10,
    // borderWidth: 2,
    // borderColor: "magenta",
  },
  nameanddate: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxHeight: "20%",
    minHeight: "20%",
    maxWidth: "100%",
    minWidth: "100%",
    // borderWidth: 2,
    // borderColor: "red",
  },
  listingdetails: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    maxWidth: "100%",
    minWidth: "100%",
    // paddingLeft: 15,
    // borderWidth: 2,
    // borderColor: "blue",
  },
  chatdetails: {
    flex: 1,
    // borderWidth: 2,
    // borderColor: "green",
    alignItems: "center",
    maxHeight: "100%",
    minHeight: "100%",
    justifyContent: "space-around",
    alignItems: 'flex-end',
    maxWidth: "30%",
    minWidth: "30%",
  },
  listingandmessage: {
    flex: 1
  },
  profilephoto: {
    flex: 1,
    maxHeight: "100%",
    minHeight: "100%",
    maxWidth: "20%",
    minWidth: "20%",
    alignItems: "center",
    justifyContent: "center",
    // borderWidth: 2, borderColor: "pink",
  },
  listingPhoto: {
    flex: 1,
    maxHeight: "80%",
    minHeight: "80%",
    // borderWidth: 2, borderColor: "yellow",
    alignItems: "center",
    justifyContent: "center",
  },
  greytext: {
    fontSize: fontSize,
    color: "grey",

  },
});

export const testStyles = StyleSheet.create({
  messagecardcontainer: {
    flex: 1,
    flexDirection: 'row',
    minHeight: height * 0.15,
    maxHeight: height * 0.15,
    // borderWidth: 2, borderColor: 'cyan',
    borderWidth: 1, borderColor: "transparent", borderBottomColor: colors.springgreen,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  profilephoto: {
    flex: 1,
    maxHeight: '100%',
    minHeight: '100%',
    maxWidth: '20%',
    minWidth: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    // borderWidth: 2, borderColor: 'blue',
  },
  cardcontent: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    maxHeight: '100%',
    minHeight: '100%',
    maxWidth: '80%',
    minWidth: '80%',
    padding: "3%"
    // borderWidth: 2, borderColor: 'orange',
  },
  nameanddate: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2, borderColor: 'red',
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "30%",
    maxHeight: "30%",
  },
  uppergroup: {
    flex: 1,
    flexDirection: "row",
    // borderWidth: 2, borderColor: "greenyellow",
    maxWidth: "100%",
  },
  smalltext: {
    flexDirection: "row",
    maxWidth: "100%",
    fontSize: fontSize,
    color: "grey",
    // borderWidth: 2, borderColor: 'purple',
  },
  chatdetails: {
    flex: 1,
    flexDirection: 'row',
    // borderWidth: 2, borderColor: 'magenta',
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "70%",
    maxHeight: "70%",
  },
  listingdetails: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    // borderWidth: 2, borderColor: 'gold',
    minHeight: "100%",
    maxHeight: "100%",
    minWidth: "70%",
    maxWidth: "70%",
  },
  listingimage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 2, borderColor: 'teal',
    minHeight: "100%",
    maxHeight: "100%",
    minWidth: "30%",
    maxWidth: "30%",
  },
  imagestyle: {
    minHeight: "100%",
    minWidth: "100%",
    maxHeight: "100%",
    maxWidth: "100%",
    resizeMode: 'center',
    // borderWidth: 2, borderColor: 'grey',
  },
})