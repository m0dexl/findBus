import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [idNumber, setIdNumber] = useState("");
  // const [birthDate, setBirthDate] = useState("");
  const [gender, setGender] = useState("");

  const [checkPw, setCheckPw] = useState("");

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
            marginTop: 25,
          }}
        >
          <Text style={{ color: "#003580", fontSize: 17, fontWeight: "700" }}>
            Register
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Create an Account
          </Text>
        </View>
        <View style={{ marginTop: 25 }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "gray",
              }}
            >
              Name
            </Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              inputMode="text"
              placeholder="enter your name"
              placeholderTextColor={"black"}
              style={{
                fontSize: name ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "gray",
              }}
            >
              Surname
            </Text>
            <TextInput
              value={surname}
              onChangeText={(text) => setSurname(text)}
              inputMode="text"
              placeholder="enter your surname"
              placeholderTextColor={"black"}
              style={{
                fontSize: surname ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Id Number
            </Text>
            <TextInput
              value={idNumber}
              onChangeText={(text) => setIdNumber(text)}
              inputMode="numeric"
              maxLength={11}
              placeholder="id number"
              placeholderTextColor={"black"}
              style={{
                fontSize: idNumber ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: 300,
              }}
            />
          </View>
          {/* <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Birth Date
            </Text>
            <TextInput
              value={birthDate}
              onChangeText={(text) => setBirthDate(text)}
              keyboardType={"number-pad"}
              placeholder="birth date"
              placeholderTextColor={"black"}
              style={{
                fontSize: birthDate ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View> */}
          <View style={{ marginTop: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "gray",
              }}
            >
              Gender
            </Text>
            <TextInput
              value={gender}
              onChangeText={(text) => setGender(text)}
              inputMode="text"
              placeholder="enter your gender"
              placeholderTextColor={"black"}
              style={{
                fontSize: gender ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "600",
                color: "gray",
              }}
            >
              Email
            </Text>
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              inputMode="email"
              placeholder="enter your email id"
              placeholderTextColor={"black"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: 300,
              }}
            />
          </View>
          {/* password*/}
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="password"
              maxLength={12}
              placeholderTextColor={"black"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 5 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password Again
            </Text>
            <TextInput
              value={checkPw}
              onChangeText={(text) => setCheckPw(text)}
              secureTextEntry={true}
              placeholder="password again"
              maxLength={12}
              placeholderTextColor={"black"}
              style={{
                fontSize: checkPw ? 18 : 18,
                borderBottomColor: "gray",
                borderBottomWidth: 1,
                marginVertical: 5,
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
            if (
              password &&
              email &&
              name &&
              surname &&
              idNumber &&
              gender &&
              checkPw &&
              password === checkPw
            ) {
              route.params.user.userEmail = email;
              route.params.user.userPassword = password;
              route.params.user.userName = name;
              route.params.user.userSurname = surname;
              route.params.user.userIdNumber = idNumber;
              route.params.user.userGender = gender;
            } else {
              Alert.alert("Invalid Details", "Please enter all the details");
            }
          }}
          onPress={() => {
            if (
              password &&
              email &&
              name &&
              surname &&
              idNumber &&
              gender &&
              checkPw
            ) {
              if (password === checkPw) {
                navigation.navigate("Login");
              } else {
                Alert.alert(
                  "Invalid Passwords",
                  "Please enter the same password"
                );
              }
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
            Sign Up
          </Text>
        </Pressable>
        <Pressable
          onPress={() => navigation.goBack()}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Already have an account? Sign In
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
