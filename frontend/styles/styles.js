import { StyleSheet, StatusBar, Dimensions } from "react-native";
import { colors } from "./palette";

const { height, width } = Dimensions.get("window");

export const defaultStyles = StyleSheet.create({
  safecontainer: {
    flex: 1,
    backgroundColor: colors.licorice,
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    minHeight: Dimensions.get("window").height,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: colors.springgreen,
  },
  icon: {
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
});

export const simpleComponents = StyleSheet.create({
  searchbar: {
    borderRadius: 10,
    height: 50,
    minWidth: "70%",
    maxWidth: "70%",
  },
});

export const listingCard = StyleSheet.create({
  cardcontainer: {
    minWidth: "60%",
    minHeight: 0.3 * height,
    maxHeight: 0.3 * height,
    borderWidth: 2,
    },
    imgcontainer: {
        minHeight: 0.15 * height,
        maxHeight: 0.15 * height,
      },
});
