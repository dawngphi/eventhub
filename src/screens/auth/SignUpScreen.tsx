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
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'

interface ErrorMessages {
  email: string;
  password: string;
  confirmPassword: string;
}

const initValue = {
  username: '',
  email: '',
  password: '',
  confirmPassword: '',
};
const SignUpScreen = ({ navigation }: any) => {

  const [values, setValues] = useState(initValue)
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<any>();
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      !errorMessage ||
      (errorMessage &&
      (errorMessage.email ||
        errorMessage.password ||
        errorMessage.confirmPassword)) || !values.email || !values.password || !values.confirmPassword
      ) {
      setIsDisable(true);
    } else {
      setIsDisable(false);
    }
  }, [errorMessage, values]);


  const handleChangeValue = (key: string, value: string) => {
    const data: any = { ...values };
    data[`${key}`] = value;
    setValues(data);
  }

  const formValidator = (key: string) => {
    const data = { ...errorMessage };
    let message = ``;
    switch (key) {
      case 'email':
        if (!values.email) {
          message = 'Email is required!';
        } else if (!Validate.email(values.email)) {
          message = 'Email is not valid!';
        } else {
          message = '';
        }
        break;
      case 'password':
        message = !values.password ? 'Password is required!' : '';
        break;
      case 'confirmPassword':
        if (!values.confirmPassword) {
          message = 'Confirm password is required!';
        } else if (values.password !== values.confirmPassword) {
          message = 'Password and confirm password do not match!';
        } else {
          message = '';
        }
        break;
    }
    data[`${key}`] = message;
    setErrorMessage(data);
  }

  const handleRegister = async () => {
    const api = `/verification`
    setIsLoading(true)
    try {
      const res = await authenticationAPI.HandleAuthentication(
        api,
        { email: values.email },
        'post'
      )
      setIsLoading(false)
      navigation.navigate('VerificationScreen', { 
        code: res.data.code, 
        ...values})
    } catch (error) {
      console.log(error)
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
            affix={<Sms size={22} color={appColors.gray} />}
            onEnd={() => formValidator('email')} />
          <InputComponent
            value={values.password}
            onChangeText={val => handleChangeValue('password', val)}
            placeholder='Password'
            allowClear
            isPassword
            affix={<Lock size={22} color={appColors.gray} />}
            onEnd={() => formValidator('password')} />
          <InputComponent
            value={values.confirmPassword}
            onChangeText={val => handleChangeValue('confirmPassword', val)}
            placeholder='Confirm Password'
            allowClear
            isPassword
            affix={<Sms size={22} color={appColors.gray} />}
            onEnd={() => formValidator('confirmPassword')} />
        </SectionComponent>
        {errorMessage && (
          <SectionComponent>
            {Object.keys(errorMessage).map(
              (error, index) =>
                errorMessage[`${error}`] && (
                  <TextComponent
                    key={`error${index}`}
                    text={errorMessage[`${error}`]}
                    color={appColors.danger} />
                )
            )}
          </SectionComponent>
        )}
        <SpaceComponent height={16} />
        <SectionComponent>
          <ButtonComponent disabled={isDisable} onPress={handleRegister} text='SIGN UP' type='primary' />
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