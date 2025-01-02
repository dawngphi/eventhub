import { View, Text } from 'react-native'
import React from 'react'
import { ButtonComponent, SectionComponent, TextComponent } from '../../../components'
import { appColors } from '../../../contants/appColors'
import { fontFamily } from '../../../contants/fontFamily'
import { Google } from 'iconsax-react-native'

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
        icon = {<Google size={24} color={appColors.primary}/>}
        iconFlex='left'/>
    </SectionComponent>
  )
}

export default SocialLoginButtonComponent