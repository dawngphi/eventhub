import { View, Text, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import { appColors } from '../contants/appColors';
import { fontFamily } from '../contants/fontFamily';
import { globalStyle } from '../styles/globalStyle';

interface TextComponentProps {
    text: string,
    color?: string,
    size?: number,
    flex?: number,
    font?: string,
    styles?: StyleProp<TextStyle>,
    title?: boolean,
}

const TextComponent = (props: TextComponentProps) => {

    const { text, color, size, flex, font, styles, title } = props;
    return (
        <Text style={[
            globalStyle.text,
            {
            color: color ?? appColors.text,
            flex: flex ?? 0,
            fontSize: size ?? title ? 24 : 14,
            fontFamily:font ?? title ? fontFamily.bold : fontFamily.regular,
        },
        styles,
    ]}>{text}</Text>
    )
}

export default TextComponent