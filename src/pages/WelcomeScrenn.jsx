import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Page from "../components/Page";
import main from "../../assets/backfull.png";
const WelcomeScrenn = () => {
  return (
    <Page>
      <View style={styles.content}>
        <Text style={styles.title}>BACKPACK</Text>
        <Text style={styles.subTitle}>Explore the world like never before</Text>
        <Image source={main} />
        <View style={styles.button}>
          <Text style={{ color: "white" }}>Explore now</Text>
        </View>
      </View>
    </Page>
  );
};

export default WelcomeScrenn;

const styles = StyleSheet.create({
  content: {
    padding: 20,
    position: "relative",
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
