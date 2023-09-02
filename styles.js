"use strict";

var React = require("react-native");

var myStyles = React.StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppins",
    backgroundColor: "#FFFFFF",
    width: "100%",
  },

  otherContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    fontFamily: "Poppins",
    backgroundColor: "#FFFFFF",
    width: "100%",
    gap: 20,
  },

  // Splash screen
  fullScreen: {
    width: "100%",
    height: "100%",
  },
  overlay: {
    backgroundColor: "#1D23355E",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: 600,
    fontFamily: "Poppins",
  },

  // Login screen
  childContainer: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#001833",
    width: "80%",
    height: 40,
    borderRadius: 3,
    paddingHorizontal: 5,
    backgroundColor: "#FFFFFF",
    opacity: 1,
  },
  loginOverlay: {
    backgroundColor: "#000000",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.8,
    position: "absolute",
    top: 0,
  },
  loginLogo: {
    position: "absolute",
    top: 80,
    fontSize: 30,
    color: "#FFFFFF",
    fontWeight: 600,
    fontFamily: "Poppins",
  },
});

module.exports = myStyles;
