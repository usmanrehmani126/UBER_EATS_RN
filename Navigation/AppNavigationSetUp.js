import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import RestaurantDetils from "../screens/RestaurantDetils";
import SplashScreen from "../screens/SplashScreen";
import ViewCart from "../components/restauranstsDetails/ViewCart";
import OrderCompleted from "../screens/OrderCompleted";
const Stack = createNativeStackNavigator();

const AppNavigationSetUp = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="RestaurantDetils" component={RestaurantDetils} />
        <Stack.Screen name="cartView" component={ViewCart} />
        <Stack.Screen name="OrderCompleted" component={OrderCompleted} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigationSetUp;

const styles = StyleSheet.create({});
