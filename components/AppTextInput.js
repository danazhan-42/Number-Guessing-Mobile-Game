import React from "react";
import { TextInput, View, StyleSheet } from "react-native";
import { colors } from "../.expo/colors";

function AppTextInput(props) {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input}></TextInput>
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "90%",
    padding: 10,
    justifyContent: "center",
  },
  input: {
    fontSize: 15,
    fontWeight: "bold",
  },
  underline: {
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "darkslateblue",
    paddingTop: 10,
  },
});

export default AppTextInput;
