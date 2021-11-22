import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Page from "../components/Page";
import main from "../../assets/4back.png";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
const SelectYourBackScreen = () => {
  return (
    <Page>
      <View style={styles.header}>
        <Text style={styles.title}>BACKPACK</Text>
        <Text style={styles.subTitle}>Select your bag</Text>
      </View>
      <Spacer space={20}/>
      <View style={styles.content}>
        <Image source={main} />
        <Spacer space={40}/>
        <AppButton text={"Continue"} />
      </View>
    </Page>
  );
};

export default SelectYourBackScreen;

const styles = StyleSheet.create({
  content: {
    padding: 20,
    position: "relative",
    alignItems: "center",
  },

  title: {
    fontSize: 50,
    fontWeight: "bold",
    color: "rgba(55, 96, 244, 1)",
  },

  subTitle: {
    fontSize: 20,
    width: "50%",
  },

  button: {
    position: "absolute",
    backgroundColor: "#6200EE",
    padding: 15,
    borderRadius: 10,
    bottom: "20%",
    left: "38%",
  },
});
