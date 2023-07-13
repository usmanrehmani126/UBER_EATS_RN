import { Image, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export const localRestaurants = [

  {
    id: 1,
    name: "Beachside Bar",
    image_url:
      "https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    id: 2,

    name: "Benihana",
    image_url:
      "https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=612x612&w=0&k=20&c=OccJv1oKWSTDqJ6Irw7iW1NEbL0muU2ylqP3EOhOyEg=",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 3.7,
  },
  {
    id: 3,
    name: "India's Grill",
    image_url:
      "https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?cs=srgb&dl=pexels-pixabay-262978.jpg&fm=jpg",
    categories: ["Indian", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.9,
  }, 
];

const RestaurantItem = ({ restaurantData}) => {
  const  navigation=useNavigation()
  return (
    <>
      {restaurantData.map((restaurant, id) => (
        <TouchableOpacity
          key={id}
          activeOpacity={1}
          style={{ marginBottom: 10 }}
            onPress={() =>
              navigation.navigate("RestaurantDetils", {
                name: restaurant.name,
                image: restaurant.image_url,
                price: restaurant.price,
                reviews: restaurant.review_count,
                rating: restaurant.rating,
                categories: restaurant.categories,
              })
            }
        >
          <View style={{ padding: 10, backgroundColor: "white" }}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfoComponent
              name={restaurant.name}
              rating={restaurant.rating}
            />
          </View>
        </TouchableOpacity>
      ))}
    </>
  );
};

const RestaurantImage = ({ image }) => (
  <>
    <Image source={{ uri: image }} style={{ width: "100%", height: 160 }} />
    <TouchableOpacity style={{ position: "absolute", top: 14, right: 16 }}>
      <AntDesign name="hearto" size={24} color="white" />
    </TouchableOpacity>
  </>
);

const RestaurantInfoComponent = ({ name, rating }) => {
  return (
    <View
      style={{
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>{name}</Text>
        <Text>35-45 . min</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          width: 30,
          height: 30,
          borderRadius: 30,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "black" }}>{rating}</Text>
      </View>
    </View>
  );
};
export default RestaurantItem;
