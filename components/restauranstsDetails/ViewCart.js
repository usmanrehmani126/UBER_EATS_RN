import { StyleSheet, Text, TouchableOpacity, View, Modal } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import OrderItem from "./OrderItem";

const ViewCart = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const checkoutModalContent = () => {
    const items=[
      {id:1, name: 'Thnadori Chicken',price:234},
      {id:2, name: 'Pizza Chilli',price:334},
      {id:2, name: 'BBQ Food',price:434},

    ]
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>Pakisani</Text>
          {items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text>12</Text>
          </View>
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <TouchableOpacity
              style={{
                marginTop: 20,
                backgroundColor: "black",
                alignItems: "center",
                padding: 13,
                borderRadius: 30,
                width: 300,
                position: "relative",
              }}
              onPress={() => {
                // addOrderToFireBase();
                setModalVisible(false);
                navigation.navigate("OrderCompleted")
              }}
            >
              <Text style={{ color: "white", fontSize: 20 }}>Checkout</Text>
              <Text
                style={{
                  position: "absolute",
                  right: 20,
                  color: "white",
                  fontSize: 15,
                  top: 17,
                }}
              >
                120
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };
  return (
    <>
      {
        <Modal
          animationType="slide"
          visible={modalVisible}
          transparent={true}
          onRequestClose={() => setModalVisible(false)}
        >
          {checkoutModalContent()}
        </Modal>
      }
      <View
        style={{
          flex: 1,
          alignItems: "center",
          flexDirection: "row",
          position: "absolute",
          bottom: 80,
          zIndex: 999,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <TouchableOpacity
            onPress={() =>setModalVisible(true)}
            style={{
              marginTop: 20,
              backgroundColor: "black",
              alignItems: "center",
              borderRadius: 40,
              width: 300,
              padding: 6,
              position: "relative",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                backgroundColor: " rgba(255, 255, 255, 0.3) ",
                width: 35,
                height: 35,
                borderRadius: 17,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", margin: 4, fontSize: 18 }}>2</Text>
            </View>

            {/* <Ionicons name="arrow-forward" size={24} color="white" /> */}
            <Text style={{ color: "white", fontSize: 18 }}>View Cart</Text>
            <View
              style={{
                backgroundColor: " rgba(255, 255, 255, 0.3) ",
                width: 50,
                height: 50,
                borderRadius: 25,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ color: "white", fontSize: 15 }}>122$</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default ViewCart;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.7)",
  },

  modalCheckoutContainer: {
    backgroundColor: "white",
    padding: 16,
    height: 500,
    borderWidth: 1,
  },

  restaurantName: {
    textAlign: "center",
    fontWeight: "600",
    fontSize: 18,
    marginBottom: 10,
  },

  subtotalContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  subtotalText: {
    textAlign: "left",
    fontWeight: "600",
    fontSize: 15,
    marginBottom: 10,
  },
});
