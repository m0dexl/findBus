import { useNavigation } from "@react-navigation/native";
import React, { useLayoutEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [valid, setValid] = useState(true);

  const [user, setUser] = useState({
    userEmail: "",
    userPassword: "",
    userName: "",
    userSurname: "",
    userIdNumber: "",
    userGender: "",
  });

  const navigation = useNavigation();

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
            Sign In
          </Text>
          <Text style={{ marginTop: 15, fontSize: 18, fontWeight: "500" }}>
            Sign In to Your Account
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
              Email
            </Text>
            <TextInput
              value={email}
              inputMode="email"
              onChangeText={(text) => setEmail(text)}
              placeholder="enter your email id"
              placeholderTextColor={valid ? "gray" : "red"}
              style={{
                fontSize: email ? 18 : 18,
                borderBottomColor: valid ? "gray" : "red",
                borderBottomWidth: 1,
                marginVertical: 10,
                width: 300,
              }}
            />
          </View>
          <View style={{ marginTop: 15 }}>
            <Text style={{ fontSize: 18, fontWeight: "600", color: "gray" }}>
              Password
            </Text>
            <TextInput
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
              placeholder="password"
              maxLength={12}
              placeholderTextColor={valid ? "gray" : "red"}
              style={{
                fontSize: password ? 18 : 18,
                borderBottomColor: valid ? "gray" : "red",
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
          onPress={() => {
            if (email && password) {
              if (email === user.userEmail && password === user.userPassword) {
                navigation.navigate("Find Bus");
              } else {
                Alert.alert("Invalid Details", "Please enter correct details");
              }
            } else {
              Alert.alert(
                "Invalid Details",
                "Please enter all the details or Sign UP!"
              );
              setValid(false);
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
            Login
          </Text>
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Register", { user });
            setValid(true);
          }}
          style={{ marginTop: 20 }}
        >
          <Text style={{ textAlign: "center", color: "gray", fontSize: 17 }}>
            Don't have an account? Sign Up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
