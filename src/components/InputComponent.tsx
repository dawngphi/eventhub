import { View, Text, TouchableOpacity, TextInput, StyleSheet, TextInputProps, KeyboardType } from 'react-native'
import React, { ReactNode, useState } from 'react'
import { EyeSlash } from 'iconsax-react-native';
import { appColors } from '../contants/appColors';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { globalStyle } from '../styles/globalStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';




interface InputComponentProps {
  value: string;
  onChangeText: (text: string) => void;
  affix?: ReactNode;
  placeholder?: string;
  suffix?: ReactNode;
  isPassword?: boolean;
  allowClear?: boolean;
  type?: KeyboardType;
}
const InputComponent = (props: InputComponentProps) => {

  const { value, onChangeText, affix, placeholder, suffix, isPassword, allowClear, type } = props;
  const [isShowPass, setisShowPass] = useState(isPassword ?? false);

  return (
    <View style = {[styles.inputContainer]}>
      {affix ?? affix}
      <TextInput
        style = {[styles.inputStyle, globalStyle.text]} 
        value={value}
        placeholder={placeholder ?? ''}
        onChangeText={val => onChangeText(val)}
        secureTextEntry={isShowPass}
        placeholderTextColor='#747688'
        keyboardType={type ?? 'default'}/>
      {suffix ?? suffix}
      <TouchableOpacity 
        onPress={isPassword ? () => setisShowPass(!isShowPass) : () => onChangeText('')}>
        {isPassword ? (


          <FontAwesome name = {isShowPass ? 'eye-slash' : 'eye'} size={22} color={appColors.gray} />) : (
          value.length > 0 && allowClear && (
            <AntDesign name="close" size={22} color={appColors.text} />
          )
        )}
      </TouchableOpacity>
    </View>
  )
}

export default InputComponent

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColors.gray3,
    width: '100%',
    minHeight: 56,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
    backgroundColor: appColors.white,
    marginBottom: 19,
  },
  inputStyle: {
    padding: 0,
    margin: 0,
    flex: 1,
    paddingHorizontal: 14,
  },
})