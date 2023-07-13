import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Divider } from "react-native-elements";
import About from "../components/restauranstsDetails/About";
import MenuItem from "../components/restauranstsDetails/MenuItem";
import ViewCart from "../components/restauranstsDetails/ViewCart";
const RestaurantDetils = ({ route }) => {
  return (
    <View style={{ flex: 1 }}>
      <About route={route} />
      <Divider width={1.3} style={{ marginVertical: 5 }} />
      <MenuItem />
      <ViewCart restaurantName={route.params.name} />
    </View>
  );
};

export default RestaurantDetils;

const styles = StyleSheet.create({});
