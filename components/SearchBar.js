import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
const SearchBar = ({ cityHandler }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: "AIzaSyBpmlnshHygLsoY4F5QxrOZMYcU_wzyzWg" }}
        placeholder="Search"
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            marginTop: 6,
            fontSize: 16,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            marginRight: 10,
            flexDirection: "row",
            alignItems: "center",
          },
        }}
        renderLeftButton={() => (
          <View>
            <Entypo
              name="location-pin"
              size={24}
              style={{ marginLeft: 10 }}
              color="black"
            />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              paddingVertical: 8,
              marginRight: 12,
              borderRadius: 50,
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              gap: 12,
            }}
          >
            <AntDesign
              name="clockcircle"
              size={14}
              color="black"
              style={{ marginLeft: 8 }}
            />
            <Text style={{ marginRight: 5, fontSize: 13, fontWeight: "500" }}>
              Search
            </Text>
          </View>
        )}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          cityHandler(city);
        }}
      />
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({});
