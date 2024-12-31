import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, InputComponent } from '../../components'
import { globalStyle } from '../../styles/globalStyle'
import { Lock, Sms } from 'iconsax-react-native'
import { appColors } from '../../contants/appColors'

const LoginScreen = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style = {[globalStyle.container, {justifyContent:'center', alignItems:'center', padding: 20},]}>
        <InputComponent 
          value={email} 
          onChangeText={val => setEmail(val)} 
          placeholder='Email'
          allowClear
          affix = {<Sms size={22} color={appColors.gray}/>} />
          <InputComponent 
          value={password} 
          onChangeText={val => setPassword(val)} 
          placeholder='Password'
          allowClear
          isPassword
          affix = {<Lock size={22} color={appColors.gray}/>} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})