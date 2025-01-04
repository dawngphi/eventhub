import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { ButtonComponent, ContainerComponent, InputComponent, SectionComponent, SpaceComponent, TextComponent } from '../../components'
import { ArrowRight, Sms } from 'iconsax-react-native'
import { appColors } from '../../contants/appColors'

const ForgotPasswordScreen = () => {

  const [email, setEmail] = useState('')
  return (
    <ContainerComponent back isImagebackground>
      <SectionComponent>
        <TextComponent text='Resset Password' title/>
        <TextComponent text='Please enter your email address to' />
        <TextComponent text='request a password reset' />
        <SpaceComponent height={26} />
        <InputComponent
          value={email}
          onChangeText={val => setEmail(val)}
          affix = {<Sms size={20} color= {appColors.gray} />}
          placeholder='abc@gmail.com'/>
      </SectionComponent>
      <SectionComponent>
        <ButtonComponent
        text='Send'
        type='primary'
        icon = {<ArrowRight size={20} color= {appColors.white}/>}
        iconFlex='right'/>
      </SectionComponent>
    </ContainerComponent>
  )
}

export default ForgotPasswordScreen