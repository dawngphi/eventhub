import { Button, Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyle } from '../../styles/globalStyle'
import { Lock, Sms, User } from 'iconsax-react-native'
import { appColors } from '../../contants/appColors'
import { fontFamily } from '../../contants/fontFamily'
import SocialLoginButtonComponent from './components/SocialLoginButtonComponent'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue)
  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  }
  return (
    <ContainerComponent isImagebackground isScroll back>
      <SectionComponent>
        <TextComponent text='Sign Up' title size={24} />
        <SpaceComponent height={21} />
        <InputComponent
          value={values.username}
          onChangeText={val => handleChangeValue('username', val)}
          placeholder='Full name'
          allowClear
          affix={<User size={22} color={appColors.gray} />} />
        <InputComponent
          value={values.email}
          onChangeText={val => handleChangeValue('email', val)}
          placeholder='abc@gmai.com'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />} />
        <InputComponent
          value={values.password}
          onChangeText={val => handleChangeValue('password', val)}
          placeholder='Password'
          allowClear
          affix={<Lock size={22} color={appColors.gray} />} />
        <InputComponent
          value={values.confirmPassword}
          onChangeText={val => handleChangeValue('confirmPassword', val)}
          placeholder='Confirm Password'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />} />
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent>
        <ButtonComponent text='SIGN UP' type='primary' />
      </SectionComponent>
      <SocialLoginButtonComponent />
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Don’t have an account? ' />
          <ButtonComponent type='link' text='Sign In' onPress={() => navigation.navigate('LoginScreen')} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})