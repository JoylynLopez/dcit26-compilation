import React from "react";
import {Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
       drawerStyle={{
       backgroundColor: '#c6cbef',
       width: 240,
       }}
      drawerContentOptions={{
      activeTintColor: 'red',
      labelStyle: {fontFamily: 'papyrus', fontWeight: 'bold', fontSize: 15},
      itemStyle: { marginVertical: 3 },
      }}>
        <Drawer.Screen 
        name="Home"
        component={HomeStack}
        options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
          <Ionicons name="home" size={24} color="black" />
           ) }}
        />
        <Drawer.Screen 
        name="About" 
        component={AboutStack} 
        options={{
          title: 'About',
          drawerIcon: ({ focused, size }) => (
          <Ionicons name="information-circle" size={24} color="black" />
           ) }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNavigator;