import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { colors } from "./palette";

const { height, width } = Dimensions.get("window");

export const defaultStyles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: colors.isabelline,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: Dimensions.get("window").height,
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
    alignItems: "flex-end",
    minHeight: "10%",
    maxHeight: "10%",
  },
  button: {
    backgroundColor: colors.springgreen,
  },
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
    // borderWidth: 2,
    alignItems: "stretch",
    minHeight: 0.15 * height,
    maxHeight: 0.15 * height,
  },
  bottomcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    // borderWidth: 2,
  },
});
