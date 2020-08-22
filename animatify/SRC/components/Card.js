import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

// icons
import Heart_i_filled from '../assets/svg/Heart_i_filled';
import Heart_i from '../assets/svg/Heart_i';
import Code_i from '../assets/svg/Code_i';

export default function Card({ child }) {
   return (
      <View style={styles.container}>
         <View style={styles.header}>
            <View style={styles.headerLeft}>
               <Text style={styles.headerTitle}>title</Text>
            </View>

            <View style={styles.headerRight}>
               <View style={styles.headerIconHolder}>
                  <Code_i width={22} height={22}/>
               </View>
               <View style={styles.headerIconHolder}>
                  {
                     // <Heart_i_filled width={20} height={20}/>
                     <Heart_i width={20} height={20} />
                  }
               </View>
            </View>
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
   },
   headerLeft: {
      flex: 2,
      // backgroundColor: 'yellow'
   },
   headerRight: {
      flex: 1,
      flexDirection: 'row',
      // backgroundColor: 'red',
      justifyContent: 'flex-end',
      alignItems: 'center'
   },
   headerTitle: {
      fontSize: 18,
      color: '#2f3542'
   },
   headerIconHolder: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 30
   }
})
