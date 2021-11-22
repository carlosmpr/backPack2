import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import Spacer from "./Spacer";
const Card = ({image,more, text}) => {
  return (
    <View style={{ alignItems: "center", height: 350, 
    width: 200, justifyContent:more ?'flex-end': "flex-start", overflow:'hidden' }}>
       
       
      <View
        style={{
          width:'100%',
          height:'80%',
       
          borderRadius: 20,
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <Image source={image} style={{ width: "100%" }} />
      </View>
      <Spacer space={10} />
      <Text style={{ fontWeight: "700" }}>{text}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({});
