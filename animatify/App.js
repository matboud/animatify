import 'react-native-gesture-handler';

import React, { Component } from 'react';
import { View } from 'react-native'

// recat navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// importing screens
import Home from './SRC/screens/Home';
import Saved from './SRC/screens/Saved';
import About from './SRC/screens/About';

// importing icons
import Home_i from './SRC/assets/svg/Home_i';
import Saved_i from './SRC/assets/svg/Saved_i';
import About_i from './SRC/assets/svg/About_i';

const Tab = createBottomTabNavigator();

export default class App extends Component {
   render() {
      return (
         <NavigationContainer>
            <Tab.Navigator
               screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                     if (route.name === 'Home') {
                        return (
                           <View style={{
                              borderBottomWidth: focused ? 1 : 0,
                              paddingBottom: 4
                           }}>
                              <Home_i focused={focused} />
                           </View>

                        );
                     } else if (route.name === 'Saved') {
                        return (
                           <View style={{
                              borderBottomWidth: focused ? 1 : 0,
                              paddingBottom: 4
                           }}>
                              <Saved_i focused={focused} />
                           </View>);
                     } else if (route.name === 'About') {
                        return (
                           <View style={{
                              borderBottomWidth: focused ? 1 : 0,
                              paddingBottom: 4
                           }}>
                              <About_i focused={focused} />
                           </View>
                        );
                     }
                  },
               })}
               tabBarOptions={{
                  activeTintColor: '#34495e',
                  inactiveTintColor: 'gray',
                  showLabel: false,
                  showIcon: true
               }}
            >
               <Tab.Screen name="Home" component={Home} />
               <Tab.Screen name="Saved" component={Saved} />
               <Tab.Screen name="About" component={About} />
            </Tab.Navigator>

         </NavigationContainer>
      )
   }
}
