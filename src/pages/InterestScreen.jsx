import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Page from "../components/Page";
import main from "../../assets/upload.png";
import AppButton from "../components/AppButton";
import Spacer from "../components/Spacer";
import inte from '../../assets/intere.png'
const SelectYourInteresScreen = () => {
  return (
    <Page>
      <View style={styles.header}>
        <Text style={styles.title}>BACKPACK</Text>
        <Text style={styles.subTitle}>Traveler Registration</Text>
      </View>
      <Spacer space={20} />
      <View style={styles.content}>
        <View style={styles.upload}>
            <Image source={main}/>
        </View>
        <Text>Upload image</Text>
        <Spacer space={25} />
        <View style={{width:'100%'}}>
        
  
        <Text style={styles.subTitle}>Select your interests</Text>
        </View>
        <Spacer space={15} />
        <ScrollView >
          <Image source={inte} />
          <Spacer space={40} />
          
        </ScrollView>
        <AppButton text={"Continue"} />
      </View>
    </Page>
  );
};

export default SelectYourInteresScreen;

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

  upload: {
    width: 200,
    height: 200,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: "rgba(220, 219, 255, 1)",
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
});
