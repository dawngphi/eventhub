import { View, Text, Modal, ActivityIndicator } from 'react-native'
import React from 'react'
import { globalStyle } from '../styles/globalStyle'
import { TextComponent } from '../components'

interface LoadingModalProps {
    visible: boolean,
    mess?: string,
    onClose?: () => void
}

const LoadingModal = (props: LoadingModalProps) => {
    const { visible, mess, onClose } = props;
    return (
        <Modal
            style={[{ flex: 1 }]}
            transparent
            statusBarTranslucent
            visible={visible}>
            <View
                style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <ActivityIndicator color={'#ffffff'} size={32}/>
                <TextComponent text='Loading...' title size={24} flex={0} color={'#ffffff'}/>
            </View>
        </Modal>
    )
}

export default LoadingModal