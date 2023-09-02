import {
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import BackIcon from "../assets/icons/back.png";
import CheckIcon from "../assets/icons/checked.png";
import { GlobalContext } from "../context/GlobalContext";
//   import { AntDesign } from '@expo/vector-icons';
const WorkOutScreen = (props) => {
  const route = useRoute();
  // console.log(route.params);
  const navigation = useNavigation();
  const { completed, setCompleted } = useContext(GlobalContext);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          margin: 10,
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Image style={{ width: 90, height: 90 }} source={{ uri: item.image }} />
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", width: 170 }}>
            {item.name}
          </Text>
          <Text style={{ marginTop: 4, fontSize: 18, color: "gray" }}>
            x{item.sets}
          </Text>
        </View>
        {completed.includes(item.name) ? (
          <Image source={CheckIcon} style={{ marginLeft: 60 }} />
        ) : null}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.otherContainer}>
      <View style={{ width: "100%", height: 170 }}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={{ uri: route.params.image }}
        />

        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={BackIcon}
            style={{ position: "absolute", top: -160, left: 10 }}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        data={props.route.params.excersises}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ width: "100%" }}
      />

      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Fit", {
            excersises: route.params.excersises,
          });
          setCompleted([]);
        }}
        style={{
          backgroundColor: "blue",
          padding: 10,
          marginLeft: "auto",
          marginRight: "auto",
          marginVertical: 20,
          width: 120,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: 15,
            fontWeight: "600",
          }}
        >
          START
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WorkOutScreen;

const styles = require("../styles");
