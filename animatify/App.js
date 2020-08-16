import 'react-native-gesture-handler';

import React, { Component } from 'react'
import { Text, View, SafeAreaView } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

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
                        return <Home_i focused={focused} />;
                     } else if (route.name === 'Saved') {
                        return <Saved_i focused={focused} />;
                     } else if (route.name === 'About') {
                        return <About_i focused={focused} />;
                     }

                     // You can return any component that you like here!

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
