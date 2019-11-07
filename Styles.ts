import { StyleSheet, TouchableWithoutFeedback } from "react-native";

export default StyleSheet.create({
  container: {
    flexDirection: "row",
    flex: 1,
    flexWrap: "wrap",
    color: "white"
  },
  widget: {
    color: "white",
    width: "50%",
    height: "50%",
    backgroundColor: "black",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "white"
  },
  scrollWidget: {
    alignItems: "center",
    justifyContent: "center"
  },
  themedText: {
    color: "white",
    fontFamily: "HelveticaNeue-UltraLight",
    fontSize: 100
  }
});
