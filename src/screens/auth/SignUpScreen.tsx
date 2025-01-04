import { Button, Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyle } from '../../styles/globalStyle'
import { Lock, Sms, User } from 'iconsax-react-native'
import { appColors } from '../../contants/appColors'
import { fontFamily } from '../../contants/fontFamily'
import SocialLoginButtonComponent from './components/SocialLoginButtonComponent'
import { LoadingModal } from '../../modals'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../utils/validate'

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (values.email || values.password || values.confirmPassword) {
      setErrorMessage('');
    }
  }, [values.email, values.password, values.confirmPassword])

  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  }

  const handleRegister = async () => {

    const { username, email, password, confirmPassword } = values;
    const emailValidate = Validate.email(email);
    const passwordValidate = Validate.Password(password);

    if (email && password && confirmPassword) {
      if (emailValidate && passwordValidate) {
        setIsLoading(true);
        try {
          const res = await authenticationAPI.HandleAuthentication('/register', values, 'post');
          console.log(res);
          setIsLoading(false);
        } catch (error) {
          console.log(error);
          setIsLoading(false);
        }
      } else {
        setErrorMessage('Email is not valid');
      }
    } else {
      setErrorMessage('Please fill all fields');
    }

  }

  return (
    <>
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
            isPassword
            affix={<Lock size={22} color={appColors.gray} />} />
          <InputComponent
            value={values.confirmPassword}
            onChangeText={val => handleChangeValue('confirmPassword', val)}
            placeholder='Confirm Password'
            allowClear
            isPassword
            affix={<Sms size={22} color={appColors.gray} />} />
        </SectionComponent>

        {
          errorMessage && (
            <SectionComponent>
              <TextComponent text={errorMessage} color={appColors.danger} />
            </SectionComponent>
          )
        }

        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent onPress={handleRegister} text='SIGN UP' type='primary' />
        </SectionComponent>
        <SocialLoginButtonComponent />
        <SectionComponent>
          <RowComponent justify='center'>
            <TextComponent text='Don’t have an account? ' />
            <ButtonComponent type='link' text='Sign In' onPress={() => navigation.navigate('LoginScreen')} />
          </RowComponent>
        </SectionComponent>
      </ContainerComponent>
      <LoadingModal visible={isLoading} />
    </>

  )
}

export default SignUpScreen

const styles = StyleSheet.create({})