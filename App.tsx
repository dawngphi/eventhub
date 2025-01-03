import { View, Text, StatusBar } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SplashScreen } from './src/screens';
import AuthNavigator from './src/navigators/AuthNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import MainNavigator from './src/navigators/MainNavigator';

const App = () => {

  const [isShowSplash, setIsShowSplash] = useState(true);
  const { getItem, setItem } = useAsyncStorage('assetToken');
  const [accessToken, setAccessToken] = useState('');

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false)
    }, 2000);
    return () => clearTimeout(timeout)
  }, []);

  useEffect(() => {
    checkLogin();
  }, []);
  const checkLogin = async () => {
    const token = await getItem();
    console.log('token', token);
    if (token) {
      setAccessToken(token
      );
    }
  }

    return (
      <>
        <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent />
        {
          isShowSplash ? <SplashScreen /> : <NavigationContainer>
            {accessToken ? <MainNavigator /> : <AuthNavigator />}
          </NavigationContainer>
        }


      </>
    )
  }

  export default App