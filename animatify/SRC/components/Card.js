import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Card({ child }) {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <Text>test</Text>
            <Text>test</Text>
         </View>
         <View >
            {
               child
            }
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      height: 295,
      width: '100%',
      backgroundColor: 'white',

      borderRadius: 15,
      // borderWidth: 1,
      overflow: 'hidden',
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
   },
   header: {
      paddingHorizontal: 12,
      height: 44,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#f9f9f9',
      borderBottomWidth: 0.3,
      borderBottomColor: '#a4b0be'
   }
})
