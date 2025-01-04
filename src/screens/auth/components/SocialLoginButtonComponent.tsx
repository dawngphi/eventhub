import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, SpaceComponent, TextComponent } from '../../../components'
import { appColors } from '../../../contants/appColors'
import { fontFamily } from '../../../contants/fontFamily'
import { Facebook, Google } from '../../../assets/svg'

const SocialLoginButtonComponent = () => {
  return (
    <SectionComponent>
        <TextComponent styles= {{textAlign: "center"}}
            text='OR'
            color={appColors.gray4}
            size={16}
            font={fontFamily.medium}/>
        <ButtonComponent
        type='primary'
        color={appColors.white}
        textColor={appColors.text}
        text='Login with Google'
        textFont={fontFamily.regular}
        icon = {<Google/>}
        iconFlex='left'/>
        <ButtonComponent
        type='primary'
        color={appColors.white}
        textColor={appColors.text}
        text='Login with Facebook'
        textFont={fontFamily.regular}
        icon = {<Facebook/>}
        iconFlex='left'/>
        
    </SectionComponent>
  )
}

export default SocialLoginButtonComponent