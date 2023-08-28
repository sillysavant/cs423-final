import React, { useEffect } from "react";
import { Image, ImageBackground, View, Text } from "react-native";

export default function AppLoading({ navigation }) {
  useEffect(() => {
    // After 2 seconds, navigate to the main screen
    const timer = setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);

    // Clear the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/background.png")}
        style={styles.fullScreen}
      >
        <View style={styles.overlay}>
          <Text style={styles.logo}>Work It</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = require("../styles");
