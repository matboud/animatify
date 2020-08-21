import React, { Component } from 'react'
import {
   SafeAreaView,
   Text,
   StyleSheet,
   View,
   FlatList
} from 'react-native';

// IMporting components
import Card from '../components/Card';

const Data = require('../conf/Data');

export default class Home extends Component {
   render() {

      const renderItem = ({ Animation }) => (
         <View style={styles.renderedItem}>
            <Card child={Animation} />
         </View>
      );

      console.log(Data.Data)
      return (
         <SafeAreaView style={styles.safeView}>
            <FlatList
               data={Data.Data}
               renderItem={renderItem}
               keyExtractor={item => item.id}
               contentContainerStyle={styles.flatListContainer}
            />
         </SafeAreaView>
      )
   }
}

const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      backgroundColor: '#ecf0f1'
   },
   renderedItem: {
      paddingHorizontal: 15,
      marginBottom: 20,
   },
   flatListContainer: {
      paddingTop: 30,
      paddingBottom: 10
   }
})
