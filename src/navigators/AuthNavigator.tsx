import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { ForgotPasswordScreen, LoginScreen, SignUpScreen, VerificationScreen } from '../screens';
import OnbroadingScreen from '../screens/auth/OnbroadingScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthNavigator = () => {
  const [isExistingUser, setIsExistingUser] = useState(false);
  const Stack = createNativeStackNavigator();

  // useEffect(() => {
  //   checkUserExisting();
  // }, []);

  // const checkUserExisting = async () => {
  //   const res = await AsyncStorage.getItem('auth');
  //   res && setIsExistingUser(true);
  // };
  // console.log(isExistingUser);
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* {
        !isExistingUser && (<Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen} />)
      } */}
      <Stack.Screen name='OnbroadingScreen' component={OnbroadingScreen} />
      <Stack.Screen name='LoginScreen' component={LoginScreen} />
      <Stack.Screen name='SignUpScreen' component={SignUpScreen} />
      <Stack.Screen name='VerificationScreen' component={VerificationScreen} />
      <Stack.Screen name='ForgotPasswordScreen' component={ForgotPasswordScreen} />
    </Stack.Navigator>
  )
}

export default AuthNavigator

const styles = StyleSheet.create({})