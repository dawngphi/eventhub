import { ActivityIndicator, Image, ImageBackground, StyleSheet,} from 'react-native'
import React from 'react'
import { appInfor } from '../contants/appInfor'
import { SpaceComponent } from '../components'
import { appColors } from '../contants/appColors'

const SplashScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/images/splash-background-image.png')}
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}
      imageStyle={{ flex: 1 }}>
      <Image
        source={require('../assets/images/logo.png')}
        style={{
          width: appInfor.sizes.WIDTH * 0.7,
          resizeMode: 'contain'
        }} />
        <SpaceComponent height={20}/>
        <ActivityIndicator size={22} color={appColors.gray}/>
    </ImageBackground>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})