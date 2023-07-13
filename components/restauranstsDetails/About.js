import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { StatusBar } from "expo-status-bar";
const About = (props) => {
  const { name, image, price, reviews, rating, categories } =
    props.route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" • ");
  const description = `${formattedCategories} ${
    price ? " • " + price : ""
  } • 🎫 • ${rating} ⭐ (${reviews}+)`;
  return (
    <View>
      <StatusBar style="light" />
      <RestaurantsImage image={image} />
      <RestaurantsTitle name={name} />
      <RestaurantsDesc description={description} />
    </View>
  );
};
const RestaurantsImage = (props) => (
  <Image source={{ uri: props.image }} style={{ width: "100%", height: 180 }} />
);
const RestaurantsTitle = (props) => (
  <Text
    style={{
      fontSize: 25,
      fontWeight: "500",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {props.name}
  </Text>
);
const RestaurantsDesc = (props) => (
  <Text style={{ fontSize: 15, marginTop: 10, marginHorizontal: 15 }}>
    {props.description}
  </Text>
);
export default About;

const styles = StyleSheet.create({});
