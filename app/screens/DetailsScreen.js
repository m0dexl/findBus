import React, { useLayoutEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Button,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import TicketsInfo from "../datas/TicketsInfo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const DetailsScreen = () => {
  const zero = 0;
  const one = 1;
  const two = 2;
  const three = 3;
  const four = 4;
  const navigation = useNavigation();
  const route = useRoute();

  let travelId = route.params.travelId;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: " Payment Succesfull - Ticket Details",
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 15,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 120,
      },
      headerBackVisible: false,
    });
  });

  const selectedSeats = route.params.selectedSeats.filter(
    (selectedSeat) => selectedSeat.selected === true
  );

  let seatsArr = [...selectedSeats];

  let seats = "";

  seatsArr.forEach((item) => {
    seats += `${item.id}, `;
  });
  console.log(selectedSeats);
  console.log(seats);

  return (
    <View>
      <View
        style={{
          marginVertical: 20,
          borderBottomWidth: 1,
          borderStyle: "dotted",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View>
            <Image
              style={{ width: 110, height: 70 }}
              source={{ uri: TicketsInfo[travelId - 1].icon }}
            />
          </View>
          <View
            style={{
              marginVertical: 20,
              marginHorizontal: 10,
              justifyContent: "space-between",
              flexDirection: "column",
              width: windowWidth * 0.55,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                {TicketsInfo[travelId - 1].departureName} ➔
                {TicketsInfo[travelId - 1].destinationName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "column",
                justifyContent: "space-around",
                alignItems: "center",
              }}
            >
              <Text>
                {` ${TicketsInfo[travelId - 1].timeOfDeparture} - ${
                  TicketsInfo[travelId - 1].timeOfDestination
                }         ${TicketsInfo[travelId - 1].dateOfDeparture}`}
              </Text>
              <Text>
                {`₺${
                  TicketsInfo[travelId - 1].pricePerTicket *
                  selectedSeats.length
                } for ${selectedSeats.length} seat/s`}
              </Text>
              <Text>Seat Numbers: {seats} </Text>
            </View>
          </View>
        </View>
        <Button
          title="Go Homepage"
          onPress={() => {
            navigation.navigate("Find Bus");
          }}
          style={{ marginVertical: 50 }}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
