import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Dimensions } from 'react-native'
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;
const Page = ({children, backgroundColor="rgba(176, 196, 250, 1)"}) => {

    const styles = StyleSheet.create({
        content:{
            width: windowWidth,
            height: windowHeight,
            backgroundColor
           
        }
    })
    return (
        <SafeAreaView style={styles.content}>
           {children}
            </SafeAreaView>
    )
}

export default Page


