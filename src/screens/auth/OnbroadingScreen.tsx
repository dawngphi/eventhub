import {Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { globalStyle } from '../../styles/globalStyle'
import Swiper from 'react-native-swiper'
import { appInfor } from '../../contants/appInfor'
import { appColors } from '../../contants/appColors'

const OnbroadingScreen = ({navigation}: any) => {

    const [index, setIndex] = React.useState(0)
    return (
        <View style={[globalStyle.container]}>
            <Swiper style = {{}} 
                    loop = {false} 
                    onIndexChanged={num => setIndex(num)} 
                    index={index}
                    activeDotColor = {appColors.white}>
                <Image source={require('../../assets/images/onboarding1.png')}
                    style ={{
                        flex: 1,
                        width: appInfor.sizes.WIDTH,
                        height: appInfor.sizes.HEIGHT,
                        resizeMode: 'cover'
                    }} />
                    <Image source={require('../../assets/images/onboarding2.png')}
                    style ={{
                        flex: 1,
                        width: appInfor.sizes.WIDTH,
                        height: appInfor.sizes.HEIGHT,
                        resizeMode: 'cover'
                    }} />
                    <Image source={require('../../assets/images/onboarding3.png')}
                    style ={{
                        flex: 1,
                        width: appInfor.sizes.WIDTH,
                        height: appInfor.sizes.HEIGHT,
                        resizeMode: 'cover'
                    }} />
            </Swiper>
            <View style = {[{
                paddingHorizontal:16,
                paddingVertical: 22,
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }]}>
                <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
                    <Text style = {[styles.text, {color: appColors.gray}]}>Skip</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => index < 2 ? setIndex(index + 1) : navigation.navigate('LoginScreen')}>
                    <Text style = {[styles.text]}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default OnbroadingScreen

const styles = StyleSheet.create({
    text: {
        color: appColors.white,
        fontSize: 16,
        fontWeight: '500'
    }
})
