import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useEffect } from "react";

const SplashScreen = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Home");
    }, 3000);
  });
  return (
    <View
      style={{ flex: 1, backgroundColor: "black", justifyContent: "center" }}
    >
      <Image
        source={{
          uri: "https://assets.website-files.com/60414b21f1ffcdbb0d5ad688/63cecf750aa7463091b17adf_5310366-uber-eats-logo-png-and-vector-logo-download-uber-eats-png-3500_3500_preview.png",
        }}
        style={{ width: "100%", height: 300 }}
      />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({});
