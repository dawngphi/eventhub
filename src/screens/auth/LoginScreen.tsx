import { Alert, Button, Image, StyleSheet, Switch, Text, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ButtonComponent, ContainerComponent, InputComponent, RowComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { globalStyle } from '../../styles/globalStyle'
import { Lock, Sms } from 'iconsax-react-native'
import { appColors } from '../../contants/appColors'
import { fontFamily } from '../../contants/fontFamily'
import SocialLoginButtonComponent from './components/SocialLoginButtonComponent'
import authenticationAPI from '../../apis/authApi'
import { Validate } from '../../utils/validate'
import { useDispatch } from 'react-redux'
import { addAuth } from '../../redux/reducers/authReducer'

const LoginScreen = ({ navigation }: any) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRemember, setIsRemember] = useState(true);
  const dispath = useDispatch();
  const handleLogin = async () => {

    const emailValidatetion = Validate.email(email);
    if (emailValidatetion) {
      try {
        const res = await authenticationAPI.HandleAuthentication('/login', { email, password }, 'post',);
        dispath(addAuth(res.data));
        await AsyncStorage.setItem('auth', isRemember ? JSON.stringify(res.data): email);
      } catch (error) {
        console.log(error);
      }
    } else {
      Alert.alert('Email is not correct');
    }

  }
  return (
    <ContainerComponent isImagebackground isScroll>
      <SectionComponent
        styles={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 75
        }}>
        <Image
          source={require('../../assets/images/logotext.png')}
          style={{
            width: 162,
            height: 114,
            marginBottom: 30
          }} />
      </SectionComponent>
      <SectionComponent>
        <TextComponent text='Sign In' title size={24} />
        <SpaceComponent height={21} />
        <InputComponent
          value={email}
          onChangeText={val => setEmail(val)}
          placeholder='Email'
          allowClear
          affix={<Sms size={22} color={appColors.gray} />} />
        <InputComponent
          value={password}
          onChangeText={val => setPassword(val)}
          placeholder='Password'
          allowClear
          isPassword
          affix={<Lock size={22} color={appColors.gray} />} />
        <RowComponent justify='space-between'>
          <RowComponent onPress={() => setIsRemember(!isRemember)}>
            <Switch
              trackColor={{ true: appColors.primary }}
              thumbColor={appColors.white}
              value={isRemember}
              onChange={() => setIsRemember(!isRemember)} />
            <TextComponent text='Remember me' styles={{ marginLeft: 10 }} />
          </RowComponent>
          <ButtonComponent
            text='Forgot Password?'
            type='text'
            onPress={() => navigation.navigate('ForgotPasswordScreen')} />
        </RowComponent>
      </SectionComponent>
      <SpaceComponent height={16} />
      <SectionComponent >
        <ButtonComponent onPress={handleLogin} text='SIGN IN' type='primary' />
      </SectionComponent>
      <SocialLoginButtonComponent />
      <SectionComponent>
        <RowComponent justify='center'>
          <TextComponent text='Don’t have an account? ' />
          <ButtonComponent type='link' text='Sign Up' onPress={() => navigation.navigate('SignUpScreen')} />
        </RowComponent>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})