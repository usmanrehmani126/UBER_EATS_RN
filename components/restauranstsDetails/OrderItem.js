import { StyleSheet, Text, View } from "react-native";
import React from "react";

const OrderItem = ({ item }) => {
  const { name, price } = item;
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: "#999",
      }}
    >
      <Text style={{ fontWeight: "600", fontSize: 16, color: "black" }}>
        {name}
      </Text>
      <Text style={{ opacity: 0.7, fontSize: 16 }}>{price}</Text>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
