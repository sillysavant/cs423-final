import React from "react";
import { Text, SafeAreaView } from "react-native";
import { FIREBASE_AUTH } from "../FirebaseConfig";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { sendPasswordResetEmail } from "firebase/auth";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const changePassword = () => {
    sendPasswordResetEmail(FIREBASE_AUTH, FIREBASE_AUTH.currentUser.email)
      .then(() => {
        alert("Password reset email sent!");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const handleLogout = () => {
    FIREBASE_AUTH.signOut()
      .then(() => {
        navigation.navigate("Login");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <SafeAreaView style={styles.otherContainer}>
      <TouchableOpacity
        style={{
          width: "90%",
          borderColor: "#324A59",
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 15,
          paddingVertical: 15,
          marginTop: 20,
        }}
        onPress={changePassword}
      >
        <Text>Change password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          borderColor: "#324A59",
          borderWidth: 1,
          borderRadius: 5,
          paddingLeft: 15,
          paddingVertical: 15,
        }}
        onPress={handleLogout}
      >
        <Text>Log out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = require("../styles");
