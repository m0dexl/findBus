import { StyleSheet, Text, View } from "react-native";
import AppNavigator from "./app/navigation/AppNavigator";

export default function App() {
  return (
    <>
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
