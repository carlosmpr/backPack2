import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

const AppInput = ({placeholder, label}) => {
  return (
    <View style={styles.content}>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} placeholder={placeholder} />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  content: {
    width: "100%",
    marginVertical:20
  },

  input: {
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    padding: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    borderRadius: 5,
  },
  label:{
      fontWeight:'700'
  }
});
