import 'react-native-vector-icons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from './src/views/Home/Home';
import Shooting from './src/views/Shooting/Shooting';
import Result from './src/views/Result/Result';
import Tracking from './src/views/Tracking/Tracking';
import Login from './src/views/Login/Login';

import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shooting" component={Shooting} />
        <Stack.Screen name="Result" component={Result} />
        <Stack.Screen name="Tracking" component={Tracking} />
      </Stack.Navigator>
      <StatusBar />
    </NavigationContainer>
  );
}
