import { View, Text, StyleProp, ViewStyle, TextStyle, TouchableOpacity } from 'react-native'
import React, { ReactNode } from 'react'
import TextComponent from './TextComponent';
import { globalStyle } from '../styles/globalStyle';
import { appColors } from '../contants/appColors';
import { fontFamily } from '../contants/fontFamily';


interface ButtonComponentProps {
    icon?: ReactNode,
    text: string,
    type?: 'primary' | 'text' | 'link',
    color?: string,
    styles?: StyleProp<ViewStyle>,
    textColor?: string,
    textStyles?: StyleProp<TextStyle>,
    onPress?: () => void,
    iconFlex?: 'right' | 'left',
    textFont?: string,
    disabled?: boolean
}

const ButtonComponent = (props: ButtonComponentProps) => {

    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex, textFont, disabled } = props;
    return type === 'primary' ? (


        <View style={{ alignItems: 'center' }}>
            <TouchableOpacity 
                disabled={disabled} 
                style={[globalStyle.buttonStyle, globalStyle.shadow, 
                { backgroundColor: color 
                    ? color 
                    : disabled 
                    ? appColors.gray4 
                    : appColors.primary, marginBottom: 17, width: '80%' }, styles]} 
                onPress={onPress}>
                {icon && iconFlex === 'left' && icon}
                <TextComponent
                    text={text}
                    color={textColor ?? appColors.white}
                    styles={[textStyles, { marginLeft: icon ? 12 : 0, fontSize: 16, textAlign: "center" },]}
                    flex={icon && iconFlex === 'right' ? 1 : 0}
                    font={textFont ?? fontFamily.medium} />
                {icon && iconFlex === 'right' && icon}
            </TouchableOpacity>
        </View>

    ) : (
        <TouchableOpacity onPress={onPress}>
            <TextComponent flex={0} text={text} color={type === 'link' ? appColors.primary : appColors.text} />
        </TouchableOpacity>
    )

}

export default ButtonComponent