import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import TicketsInfo from "../datas/TicketsInfo";

const PaymentScreen = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpireDate, setCardExpireDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");

  const navigation = useNavigation();
  const route = useRoute();

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <KeyboardAvoidingView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 100,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            {TicketsInfo[route.params.travelId - 1].departureName} to
            {TicketsInfo[route.params.travelId - 1].destinationName}
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            {route.params.countTicket} ticket/s -{`>`} Price :
            {route.params.countTicket *
              TicketsInfo[route.params.travelId - 1].pricePerTicket}
          </Text>
        </View>
        <View style={{ marginTop: 50 }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "gray",
              }}
            >
              Card Number
            </Text>
            <TextInput
              value={cardNumber}
              onChangeText={(text) => setCardNumber(text)}
              inputMode="numeric"
              maxLength={16}
              placeholder="enter your card number"
              placeholderTextColor={"black"}
              style={{
                fontSize: cardNumber ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              CVC/CVV
            </Text>
            <TextInput
              value={cvv}
              onChangeText={(text) => setCvv(text)}
              secureTextEntry={true}
              inputMode="numeric"
              maxLength={3}
              placeholder="cvc/cvv"
              placeholderTextColor={"black"}
              style={{
                fontSize: cvv ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Expire Date
            </Text>
            <TextInput
              value={cardExpireDate}
              inputMode="text"
              onChangeText={(text) => setCardExpireDate(text)}
              placeholder="expire date (MM/YY)"
              placeholderTextColor={"black"}
              style={{
                fontSize: cardExpireDate ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Card Holder Name
            </Text>
            <TextInput
              value={cardHolderName}
              inputMode="text"
              onChangeText={(text) => setCardHolderName(text)}
              placeholder="card holder name"
              placeholderTextColor={"black"}
              style={{
                fontSize: cardHolderName ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
        </View>
        <Pressable
          style={{
            width: 200,
            backgroundColor: "#003580",
            padding: 15,
            borderRadius: 7,
            marginTop: 50,
            marginLeft: "auto",
            marginRight: "auto",
          }}
          onPressIn={() => {
            if (cardNumber || (cardExpireDate && cardHolderName && cvv)) {
              Alert.alert("Successfull", "Your payment has been successfull");

              navigation.navigate("DetailsScreen", {
                travelId: route.params.travelId,
                selectedSeats: route.params.selectedSeats,
              });
            } else {
              Alert.alert("Invalid Details", "Please enter all the details");
            }
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "white",
              fontSize: 17,
              fontWeight: "bold",
            }}
          >
            Pay
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({});
