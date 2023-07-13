import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const HomeTabsCompenents = (props) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 20,
      }}
    >
      <HeaderBtn
        text="Delivery"
        btnColor="black"
        textColor="white"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
      <HeaderBtn
        text="Pickup"
        btnColor="white"
        textColor="black"
        activeTab={props.activeTab}
        setActiveTab={props.setActiveTab}
      />
    </View>
  );
};

const HeaderBtn = (props) => {
  return (
    <TouchableOpacity
      onPress={() => props.setActiveTab(props.text)}
      style={{
        backgroundColor: props.activeTab === props.text ? "black" : "white",
        paddingVertical: 7,
        paddingHorizontal: 20,
        borderRadius: 30,
      }}
    >
      <Text
        style={{
          color: props.activeTab === props.text ? "white" : "black",
          fontSize: 15,
          fontWeight: "900",
        }}
      >
        {props.text}
      </Text>
    </TouchableOpacity>
  );
};
export default HomeTabsCompenents;

const styles = StyleSheet.create({});
