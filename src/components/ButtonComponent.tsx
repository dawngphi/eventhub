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
}

const ButtonComponent = (props: ButtonComponentProps) => {

    const { icon, text, type, color, styles, textColor, textStyles, onPress, iconFlex } = props;
    return (
        type === 'primary' ?
        <TouchableOpacity style={[globalStyle.buttonStyle, { backgroundColor: color ?? appColors.primary }, styles]} onPress={onPress}>
            {icon && iconFlex === 'left' && icon}
            <TextComponent
                text={text}
                color={textColor}
                styles={[textStyles, { marginLeft: icon ? 12 : 0 },]}
                flex={icon && iconFlex === 'right' ? 1 : 0} />
            {icon && iconFlex === 'right' && icon}
        </TouchableOpacity>
        : <TouchableOpacity>
            <TextComponent text={text} color={type === 'link' ? appColors.primary : appColors.text} />
        </TouchableOpacity>


    )
}

export default ButtonComponent