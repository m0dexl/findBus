import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Modal,
  Alert,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import LocationsData from "../datas/LocationsData";
import { AntDesign } from "@expo/vector-icons";
import DatePicker from "react-native-modern-datepicker";
import { getFormatedDate } from "react-native-modern-datepicker";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const HomeScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      title: "Find Bus",
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

  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedDestination, setSelectedDestination] = useState("");

  const [openStartDatePicker, setOpenStartDatePicker] = useState(false);
  const today = new Date();
  const startDate = getFormatedDate(
    today.setDate(today.getDate()),
    "YYYY/MM/DD"
  );
  const [selectedStartDate, setSelectedStartDate] = useState("");
  const [startedDate, setStartedDate] = useState("");

  function handleChangeStartDate(propDate) {
    setStartedDate(propDate);
  }

  const handleOnPressStartDate = () => {
    setOpenStartDatePicker(!openStartDatePicker);
    console.log(startedDate);
  };

  const onSearch = () => {
    if (
      selectedDeparture === "" ||
      selectedDestination === "" ||
      startedDate === ""
    ) {
      Alert.alert("Invalid Details", "Please enter all the details");
    } else if (selectedDeparture === selectedDestination) {
      Alert.alert(
        "Invalid Details",
        "Departure and destination can not be the same!"
      );
    } else {
      navigation.navigate("SearchList", {
        selectedDeparture: selectedDeparture,
        selectedDestination: selectedDestination,
        startedDate: startedDate,
        dpName: LocationsData[selectedDeparture - 1].value,
        dsName: LocationsData[selectedDestination - 1].value,
      });
    }
  };

  return (
    <View>
      <ScrollView>
        <View
          style={{
            marginVertical: windowHeight * 0.1,
            paddingHorizontal: windowWidth * 0.12,
          }}
        >
          {/* destination */}
          <View>
            <SelectList
              data={LocationsData}
              setSelected={setSelectedDeparture}
              placeholder="From Where"
              dropdownStyles={{ backgroundColor: "gray" }}
              dropdownTextStyles={{ color: "white", fontWeight: "bold" }}
            />
          </View>

          <View>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <AntDesign name="arrowdown" size={30} color="black" />
            </View>
            <SelectList
              data={LocationsData}
              setSelected={setSelectedDestination}
              placeholder="To Where"
              dropdownStyles={{ backgroundColor: "gray" }}
              dropdownTextStyles={{ color: "white", fontWeight: "bold" }}
            />
          </View>
          <View
            style={{
              width: windowWidth * 0.762,
              marginTop: 22,
            }}
          >
            {/*selected date*/}
            <View>
              <Text style={{ fontSize: 18 }}>Select Date</Text>
            </View>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderRadius: 10,
                borderColor: "#222",
                height: 42,
                paddingHorizontal: windowWidth * 0.05,
                fontSize: 18,
                justifyContent: "center",
              }}
              onPress={handleOnPressStartDate}
            >
              <Text>{selectedStartDate}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onSearch}
              style={{
                backgroundColor: "#080516",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
                paddingVertical: 12,
                marginVertical: 16,
              }}
            >
              <Text style={{ fontSize: 20, color: "white" }}>Search</Text>
            </TouchableOpacity>
          </View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={openStartDatePicker}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  margin: 20,
                  backgroundColor: "#080516",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  padding: 35,
                  width: "90%",
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 4,
                  elevation: 5,
                }}
              >
                <DatePicker
                  mode="calendar"
                  minimumDate={startDate}
                  selected={startedDate}
                  onDateChange={handleChangeStartDate}
                  onSelectedChange={(date) => setSelectedStartDate(date)}
                  options={{
                    backgroundColor: "#080516",
                    textHeaderColor: "#469ab6",
                    textDefaultColor: "#FFFFFF",
                    selectedTextColor: "#FFF",
                    mainColor: "#469ab6",
                    textSecondaryColor: "#FFFFFF",
                    borderColor: "rgba(122,146,165,0.1)",
                  }}
                />
                <TouchableOpacity onPress={handleOnPressStartDate}>
                  <Text style={{ color: "white" }}>Submit</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Modal>
        </View>
      </ScrollView>
    </View>
  );
};

export default HomeScreen;
