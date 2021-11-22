import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const AppButton = ({text}) => {
    return (
        <View style={styles.button}>
          <Text style={{ color: "white" }}>{text}</Text>
        </View>
    )
}

export default AppButton

const styles = StyleSheet.create({
    button: {
       
        backgroundColor: "#6200EE",
        padding: 15,
        borderRadius: 10,
       
      },
})
