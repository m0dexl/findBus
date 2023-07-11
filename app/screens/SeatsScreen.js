import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  Alert,
} from "react-native";

const SeatsScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: ` Seats`,
      headerTitleAlign: "center",
      headerTitleStyle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
      },
      headerStyle: {
        backgroundColor: "red",
        height: 120,
      },
    });
  });

  const [row1, setRow1] = useState(route.params.seats.slice(0, 20));
  const [row2, setRow2] = useState(route.params.seats.slice(20, 40));

  const [selectedSeats] = useState(row1.concat(row2));

  const [countTicket, setCountTicket] = useState(0);

  const onSelectRow1 = (index) => {
    let tempRow = [];
    tempRow = row1;
    tempRow.map((item, indx) => {
      if (index === indx) {
        if (item.selected === true) {
          item.selected = false;
          item.available = 1;
          setCountTicket(countTicket - 1);
        } else {
          if (countTicket < 5) {
            item.selected = true;
            item.available = 0;
            setCountTicket(countTicket + 1);
          } else {
          }
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });

    setRow1(tempSeats);
  };
  const onSelectRow2 = (index) => {
    let tempRow = [];
    tempRow = row2;
    tempRow.map((item, indx) => {
      if (index === indx) {
        if (item.selected === true) {
          item.selected = false;
          item.available = 1;
          setCountTicket(countTicket - 1);
        } else {
          if (countTicket < 5) {
            item.selected = true;
            item.available = 0;
            setCountTicket(countTicket + 1);
          } else {
          }
        }
      }
    });

    let tempSeats = [];
    tempRow.map((item) => {
      tempSeats.push(item);
    });

    console.log(route.params.pricePerTicket);
    setRow2(tempSeats);
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View
        style={{
          width: "65%",
          height: "70%",
          borderWidth: 1,
          borderRadius: 5,
          borderColor: "black",
        }}
      >
        <MaterialCommunityIcons
          name="steering"
          size={36}
          color="black"
          style={{ margin: 20 }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <FlatList
              data={row1}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    style={{ margin: 7 }}
                    onPressIn={() => {
                      if (item.selected === false && item.available === 0) {
                        alert("Already booked");
                      } else {
                        onSelectRow1(index);
                      }
                    }}
                    onPress={() => console.log(countTicket)}
                  >
                    {item.available === 0 && item.selected === true ? (
                      <Image
                        source={require("../../assets/seat1.png")}
                        style={{ width: 24, height: 24, tintColor: "green" }}
                      />
                    ) : item.available === 1 && item.selected === false ? (
                      <Image
                        source={require("../../assets/seat2.png")}
                        style={{ width: 24, height: 24 }}
                      />
                    ) : item.available === 0 && item.selected === false ? (
                      <View
                        style={
                          item.gender === "male"
                            ? { backgroundColor: "#2196F3" }
                            : { backgroundColor: "pink" }
                        }
                      >
                        <Image
                          source={require("../../assets/seat1.png")}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: "#BeBEBE",
                          }}
                        />
                      </View>
                    ) : null}
                  </Pressable>
                );
              }}
            />
          </View>
          <View>
            <FlatList
              data={row2}
              numColumns={2}
              renderItem={({ item, index }) => {
                return (
                  <Pressable
                    style={{ margin: 7 }}
                    onPress={() => {
                      if (item.selected === false && item.available === 0) {
                        alert("Already booked");
                      } else {
                        onSelectRow2(index);
                      }
                    }}
                  >
                    {item.available === 0 && item.selected === true ? (
                      <Image
                        source={require("../../assets/seat1.png")}
                        style={{ width: 24, height: 24, tintColor: "green" }}
                      />
                    ) : item.available === 1 && item.selected === false ? (
                      <Image
                        source={require("../../assets/seat2.png")}
                        style={{ width: 24, height: 24 }}
                      />
                    ) : item.available === 0 && item.selected === false ? (
                      <View
                        style={
                          item.gender === "male"
                            ? { backgroundColor: "#2196F3" }
                            : { backgroundColor: "pink" }
                        }
                      >
                        <Image
                          source={require("../../assets/seat1.png")}
                          style={{
                            width: 24,
                            height: 24,
                            tintColor: "#BeBEBE",
                          }}
                        />
                      </View>
                    ) : null}
                  </Pressable>
                );
              }}
            />
          </View>
        </View>
      </View>
      <View>
        <Text>
          {`${countTicket} Ticket/s --- Price: ${
            countTicket * route.params.pricePerTicket
          } `}
        </Text>
        <Button
          title="Buy"
          onPress={() => {
            navigation.navigate("PaymentScreen", {
              travelId: route.params.travelId,
              countTicket: countTicket,
              selectedSeats: selectedSeats,
            });
          }}
        />
      </View>
    </View>
  );
};

export default SeatsScreen;

const styles = StyleSheet.create({});
