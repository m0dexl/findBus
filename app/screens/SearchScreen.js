import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  Button,
  Pressable,
  Alert,
} from "react-native";
import TicketsInfo from "../datas/TicketsInfo";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const SearchScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: ` ${route.params.dpName} to ${route.params.dsName}`,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "#003580",
        height: 120,
      },
    });
  });
  const [pSeats, setPSeats] = useState();
  const [ticketPrice, setTicketPrice] = useState();
  const [travelId, setTravelId] = useState("");

  const onSubmitSeatsDetails = () => {
    // console.log(pSeats);
    navigation.navigate("SeatsScreen", {
      dpName: route.params.departureName,
      dsName: route.params.destinationName,
      seats: pSeats,
      pricePerTicket: ticketPrice,
      travelId: travelId,
      user: route.params.user,
    });
  };

  return (
    <View>
      <View>
        <FlatList
          data={TicketsInfo}
          renderItem={({ item }) => {
            if (
              item.departure.includes(route.params.selectedDeparture) &&
              item.destination.includes(route.params.selectedDestination) &&
              item.dateOfDeparture.includes(route.params.startedDate)
            ) {
              let emptySeats = 0;
              return (
                <Pressable
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginVertical: 10,
                    borderBottomWidth: 1,
                    borderStyle: "dashed",
                  }}
                  onPressIn={() => {
                    setPSeats(item.seats);
                    setTicketPrice(item.pricePerTicket);
                    setTravelId(item.id);
                  }}
                  onPress={onSubmitSeatsDetails}
                >
                  <View>
                    <Image
                      style={{ width: 110, height: 70 }}
                      source={{ uri: item.icon }}
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
                        {item.departureName} ➔ {item.destinationName}
                      </Text>
                    </View>
                    <View
                      style={{
                        flexDirection: "row",
                        justifyContent: "space-around",
                        alignItems: "center",
                      }}
                    >
                      <Text>
                        {item.timeOfDeparture} - {item.timeOfDestination}
                      </Text>
                      <Text>₺{item.pricePerTicket}</Text>
                      {item.seats.forEach(function (elem) {
                        if (elem.available === 1) {
                          emptySeats++;
                        }
                      })}
                    </View>
                    <View
                      style={{
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{ fontSize: 14 }}
                      >{`${emptySeats}/${item.seats.length} Empty Seats`}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }
          }}
          keyExtractor={(item) => item.id}
        />
      </View>
    </View>
  );
};
export default SearchScreen;
