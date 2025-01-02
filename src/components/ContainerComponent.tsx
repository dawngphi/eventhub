import { View, Text, ScrollView, ImageBackground } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyle';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';


interface ContainerComponentProps {
    isImagebackground?: boolean;
    isScroll?: boolean;
    title?: string;
    children: React.ReactNode;
}
const ContainerComponent = (props: ContainerComponentProps) => {
    const { isImagebackground, isScroll, title, children } = props;

    const returnContainer = isScroll ? (
        <ScrollView style = {{flex: 1}}>{children}</ScrollView>
    ) : (
        <View style = {{flex: 1}}>{children}</View>
    );
    return (
        <SafeAreaProvider>
            {isImagebackground ? (
                <ImageBackground
                    source={require('../assets/images/splash-background-image.png')}
                    style={{ flex: 1 }}
                    imageStyle={{ flex: 1 }}>
                    <SafeAreaView style={{ flex: 1 }}>
                        {returnContainer}
                    </SafeAreaView>
                </ImageBackground>
            ) : (
                <SafeAreaView style={[globalStyle.container]}>
                    <View>{returnContainer}</View>
                </SafeAreaView>
            )}
        </SafeAreaProvider>
    );
     
}

export default ContainerComponent