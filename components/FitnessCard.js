import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import React from "react";
import data from "../data/data";
import { useNavigation } from "@react-navigation/native";

const FitnessCards = () => {
  const FitnessData = data;
  const navigation = useNavigation();

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("Workout", { ...item })}
        style={{ alignItems: "center", justifyContent: "center", margin: 10 }}
      >
        <Image
          style={{ width: "95%", height: 140, borderRadius: 7 }}
          source={{ uri: item.image }}
        />
        <Text
          style={{
            position: "absolute",
            color: "white",
            fontSize: 16,
            fontWeight: "bold",
            left: 20,
            top: 20,
          }}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ height: 340, width: "100%", marginTop: 20 }}>
      <FlatList
        data={FitnessData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ height: "100%" }}
      />
    </View>
  );
};

export default FitnessCards;

const styles = StyleSheet.create({});
