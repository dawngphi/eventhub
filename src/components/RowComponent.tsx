import { View, Text, StyleProp, ViewStyle, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyle';


interface RowComponentProps {
    children: React.ReactNode;
    styles?: StyleProp<ViewStyle>; 
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly' | undefined;
    onPress?: () => void;
}
const RowComponent = (props : RowComponentProps) => {
    const { children, styles, justify, onPress } = props;
    const localStyle = [globalStyle.row, styles, {justifyContent: justify}]
    return onPress ? (
        <TouchableOpacity activeOpacity={0.8} onPress={onPress} style = {localStyle}>{children}</TouchableOpacity>
    ) : (
    <View style = {localStyle}>{children}</View>
  )
}

export default RowComponent