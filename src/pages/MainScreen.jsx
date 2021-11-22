import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import Page from "../components/Page";
import { FontAwesome, FontAwesome5, Feather, Entypo } from "@expo/vector-icons";
import HorizontalScrollView from "../components/HorizontalScrollView";
import TextBadge from "../components/TextBadge";
import Spacer from "../components/Spacer";
import SearchBar from "../components/SearchBar";
import image from "../../assets/jhondoe.jpeg";
import mini from '../../assets/minipack.png'
import dominican from "../../assets/dominican.png";
import miami from "../../assets/miami.png";
import NY from "../../assets/NY.png";
import Italy from "../../assets/Italy.png";
import Card from "../components/Card";
const data = [
  { text: "POPULARS", active: true },
  { text: "USA", active: false },
  { text: "CARIBBEAN", active: false },
  { text: "EUROPE", active: false },
  { text: "ASIA", active: false },
  { text: "LATIN AMERICA", active: false },
];

const MainScreen = () => {
  return (
    <Page backgroundColor="rgba(231, 237, 255, 1)">
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Image style={styles.image} source={image} />
        </View>

        <Text style={styles.headerTitle}>Jhon Doe</Text>
        <View style={{width:24, height:24, position:'relative'}}>
            <View style={{backgroundColor:'rgba(99, 66, 232, 1)' , justifyContent:'center', alignItems:'center', width:25, height:25, borderRadius:50, position:'absolute', zIndex:10, top:-15, left:-5}}>
                <Text style={{color:'white'}}>5</Text>
                </View>
        <FontAwesome5 name="bell" size={24} color="black" />
        </View>
        <View style={{width:24, height:24, position:'relative'}}>
            <View style={{backgroundColor:'rgba(99, 66, 232, 1)' , justifyContent:'center', alignItems:'center', width:25, height:25, borderRadius:50, position:'absolute', zIndex:10, top:-15, left:-5}}>
                <Text style={{color:'white'}}>3</Text>
                </View>
        <Image style={styles.image} source={mini} />
        </View>
        <View>
        <FontAwesome name="heart-o" size={24} color="black" />
        </View>
        <View>
        <FontAwesome name="bars" size={24} color="black" />
        </View>
      </View>
      <View style={{ padding: 15 }}>
        <SearchBar />
      </View>
      <View>
        <HorizontalScrollView>
          {data.map((item) => (
            <TextBadge {...item} key={item.text} />
          ))}
        </HorizontalScrollView>
      </View>
        <Spacer space={20} />
      <View style={{height:'90%'}}>
          <ScrollView >
        <View style={{ flexDirection:'row', flexWrap:'wrap', justifyContent:'space-evenly'}}>
       <Card image={dominican} text="DOMINICAN REPUBLIC"/>

       <Card image={miami} more={true} text="MIAMI"/>
       <Card image={NY} text="NEW YORK"/>
       <Card image={Italy} more={true} text="ITALY"/>

       <Card image={dominican}/>
       
       <Card image={dominican} more={true}/>
       <Card image={dominican}/>
       <Card image={dominican} more={true}/>
       </View>
       </ScrollView>
       </View>
      
      <View style={{ height: 200 }}></View>
    </Page>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "white",
    borderRadius: 50,
    overflow: "hidden",
    justifyContent: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  headerTitle: {
    fontWeight: "800",
    fontSize: 18,
  },

  content: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
    
  },
  image: {
    width: "100%",
    resizeMode: "contain",
  },
});
