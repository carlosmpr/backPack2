import React from "react";
import { StyleSheet, Text, View } from "react-native";

const TextBadge = ({ text, active }) => {
  const styles = StyleSheet.create({
    badge: {
      marginHorizontal: 15,
     
    },
    text: {
      color: active ? "rgba(99, 66, 232, 1)" : "black",
      fontSize: 16,
      fontWeight: "600",
    },

    under:{
      width:40,
      height:5,
      backgroundColor: "rgba(99, 66, 232, 1)"
    }
  });

  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{text}</Text>
      {active ?  <View style={styles.under}></View> : null}
     
    </View>
  );
};

export default TextBadge;
