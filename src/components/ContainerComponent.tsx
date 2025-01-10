import { View, Text, ScrollView, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyle';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import RowComponent from './RowComponent';
import { ArrowLeft } from 'iconsax-react-native';
import { appColors } from '../contants/appColors';
import TextComponent from './TextComponent';
import { fontFamily } from '../contants/fontFamily';


interface ContainerComponentProps {
    isImagebackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children: React.ReactNode;
    back?: boolean;
}
const ContainerComponent = (props: ContainerComponentProps) => {
    const { isImagebackground, isScroll, title, children, back } = props;
    const navigation: any = useNavigation();

    const headerComponent = () => {
        return (
            <View style={{ flex: 1,}}>
                {(title || back) && (
                    <RowComponent 
                        styles ={{
                            paddingHorizontal:16,
                            paddingVertical: 10,
                            minWidth: 48,
                            minHeight: 48,
                        }}>
                        {back && (
                            <TouchableOpacity 
                                onPress={() => navigation.goBack()}
                                style = {{marginRight: 16}}>
                                <ArrowLeft size={24} color= {appColors.text}/>
                            </TouchableOpacity>
                        )}
                        {title && <TextComponent text={title} size={16} font={fontFamily.medium}/>}
                    </RowComponent>
                )}
                {returnContainer}
            </View>
        )
    };
    const returnContainer = isScroll ? (
        <ScrollView showsVerticalScrollIndicator = {false} style={{ flex: 1 }}>{children}</ScrollView>
    ) : (
        <View style={{ flex: 1 }}>{children}</View>
    );
    return (
        <SafeAreaProvider>
            {isImagebackground ? (
                <ImageBackground
                    source={require('../assets/images/splash-background-image.png')}
                    style={{ flex: 1 }}
                    imageStyle={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        {headerComponent()}
                    </SafeAreaView>
                </ImageBackground>
            ) : (
                <SafeAreaView style={[globalStyle.container]}>
                    <View>{headerComponent()}</View>
                </SafeAreaView>
            )}
        </SafeAreaProvider>
    );

}

export default ContainerComponent