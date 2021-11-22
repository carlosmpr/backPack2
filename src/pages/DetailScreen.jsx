import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ScrollView,
} from "react-native";
import Page from "../components/Page";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import image from "../../assets/Dominican.jpeg";
import Spacer from "../components/Spacer";
import HorizontalScrollView from "../components/HorizontalScrollView";
import TextBadge from "../components/TextBadge";
import swim from '../../assets/swim.png'
const data = [
  { text: "Running", active: true },
  { text: "Eating", active: false },
  { text: "Hiking", active: false },
  { text: "Swimming", active: false },
  { text: "Camping", active: false },
  { text: "Touring", active: false },
];

const DetailScreen = () => {
  return (
    <View>
      <View style={{ width: "100%", height: 300 }}>
        <Image source={image} style={{ width: "100%", height: "100%" }} />
      </View>
      <Page backgroundColor="rgba(231, 237, 255, 1)">
        <View style={{ padding: 10, height: "100%" }}>
        <Text style={{ fontWeight: "700", fontSize: 30 }}>
              Dominican Republic
            </Text>

            <Text style={{ textAlign: "justify" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              
            </Text>

            <Spacer space={10} />
            <Text style={{ fontWeight: "700", fontSize: 25 }}>Activities</Text>
            <View>
              <Spacer space={10} />
              <Text style={{ fontWeight: "700", fontSize: 20, color: "gray" }}>
                Filters
              </Text>
              <HorizontalScrollView>
                {data.map((item) => (
                  <TextBadge {...item} key={item.text} />
                ))}
              </HorizontalScrollView>
            </View>
          <ScrollView style={{padding:10}}>
          <Spacer space={10} />
                <View style={{backgroundColor:'rgba(255, 255, 255, 0.51)', height:65, alignItems:'center', justifyContent:'space-evenly', flexDirection:'row', borderRadius:10}}>
                  
                  <Image source={swim}/>
                  <Text style={{fontSize:18}}>Playa Rincon</Text>
                  <View style={{flexDirection:"row"}}>
                  <MaterialCommunityIcons name="star" size={24} color="#FCDD8D" />
                  <MaterialCommunityIcons name="star" size={24} color="#FCDD8D" />
                  <MaterialCommunityIcons name="star" size={24} color="#FCDD8D" />
                  <MaterialCommunityIcons name="star" size={24} color="#FCDD8D" />
                  <MaterialCommunityIcons name="star" size={24} color="#FCDD8D" />

                  </View>
                </View>
          </ScrollView>
        </View>
      </Page>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  formatter: { display: "flex", flexDirection: "row", alignItems: "center" },

  rating: {
    flexDirection: "row",
    alignItems: "center",
  },
});
