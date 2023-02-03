//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen';
import SignUp from './src/screens/SignUp';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  const Stack = createNativeStackNavigator();

  const screens = [
    {
      screens: 'LoginScreen',
      component: LoginScreen,
    },
    {
      screens: 'SignUp',
      component: SignUp,
    },
    {
      screens: 'HomeScreen',
      component: HomeScreen,
    },
  ];

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoginScreen"
        screenOptions={{
          headerShown: false,
        }}>
        {screens.map(item => (
          <Stack.Screen component={item.component} name={item.screens} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
