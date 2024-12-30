import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const HomeScreen = () => {
  return (
    <View>
      <Text>HomeScreen</Text>
      <Button title="Logout" onPress={ async() => await AsyncStorage.clear()} />
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})