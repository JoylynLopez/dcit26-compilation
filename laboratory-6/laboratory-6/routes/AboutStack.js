import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import {Ionicons} from '@expo/vector-icons';

import {Button} from 'react-native';
import About from'../screens/About';

const Stack = createStackNavigator();
const AboutStack = ({navigation}) => {
  
  return (
      <Stack.Navigator>
        <Stack.Screen 
        name="About" 
        component={About} 
        options={{
           headerRight: () => (
            <Ionicons
            onPress={() => navigation.goBack()}
            name="md-arrow-back-circle" 
            size={40} 
            color='black'
            />
          ),
          title: 'About',
          headerStyle: {
            backgroundColor: 'gold',
          },
          headerTintColor: 'black',
          headerTitleStyle: {
            fontFamily: 'Berlin Sans FB',
            fontSize: 23,
          },
        }}/>
      </Stack.Navigator>
    
  );
}

export default AboutStack;