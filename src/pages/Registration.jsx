import React from 'react'
import { StyleSheet, Text, View, Image, TextInput } from 'react-native'
import Page from '../components/Page'
import blue from '../../assets/blue.png'
import AppInput from '../components/AppInput'
import AppButton from '../components/AppButton'
const Registration = () => {
    return (
      <Page>
          <View style={styles.header}> 
          <Text style={styles.title}>BACKPACK</Text>
        <Text style={styles.subTitle}>Traveler Registration</Text>
          </View>

          <View style={styles.content}>
            <Image source={blue}/>
            <View style={styles.form}>
           <AppInput label="Full Name" placeholder={"Enter your full name"}/>
           <AppInput label="Email" placeholder={"test@example.com"}/>
           <AppInput label="Password" placeholder={"Enter a password"}/>
          
                </View>
                <AppButton text={"Continue"}/>
          </View>
      </Page>
    )
}

export default Registration

const styles = StyleSheet.create({
    headert:{
        padding:20
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

      content:{
          justifyContent:'center',
          alignItems:'center',
          padding:20
      },

      form:{
          width:'100%'
      },

     
})
