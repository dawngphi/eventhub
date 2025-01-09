import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useDispatch, useSelector } from 'react-redux';
import { authSelector, removeAuth } from '../../redux/reducers/authReducer';

const HomeScreen = () => {

  const dispatch = useDispatch();
  const auth = useSelector(authSelector)
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={ async () =>{
        await AsyncStorage.setItem('auth', auth.email);
        dispatch(removeAuth({}))
    }} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})