import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { LoginScreen } from '../screens';
import OnbroadingScreen from '../screens/auth/OnbroadingScreen';

const AuthNavigator = () => {

    const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name ='OnbroadingScreen' component={OnbroadingScreen}/>
        <Stack.Screen name ='LoginScreen' component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})