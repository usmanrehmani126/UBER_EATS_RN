import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Divider } from "react-native-elements";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
const BottomTabs = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        margin: 6,
        marginHorizontal: 20,
      }}
    >
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        {/* <Ionicons name="home-outline" size={27} color="gray" /> */}
        <Ionicons name="home-sharp" size={27} color="black" />
        <Text style={{ color: "black", fontSize: 12 }}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Ionicons name="search-outline" size={27} color="gray" />
        <Text style={{ color: "gray", fontSize: 12 }}>Search</Text>

        {/* <Ionicons name="ios-search" size={27} color="gray" /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <Ionicons name="ios-briefcase-outline" size={27} color="gray" />
        <Text style={{ color: "gray", fontSize: 12 }}>Grocery</Text>

        {/* <Ionicons name="ios-briefcase-sharp" size={27} color="gray" /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <MaterialCommunityIcons
          name="file-document-multiple-outline"
          size={27}
          color="gray"
        />
        <Text style={{ color: "gray", fontSize: 12 }}>Orders</Text>

        {/* <MaterialCommunityIcons name="file-document-multiple" size={27} color="gray" /> */}
      </TouchableOpacity>
      <TouchableOpacity
        style={{ alignItems: "center", justifyContent: "center" }}
      >
        <FontAwesome5 name="user" size={27} color="gray" />
        <Text style={{ color: "gray", fontSize: 12 }}>Account</Text>

        {/* <FontAwesome5 name="user-alt" size={27} color="gray" /> */}
      </TouchableOpacity>
    </View>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
