import { StyleSheet } from "react-native";
import { appColors } from "../contants/appColors";
import { fontFamily } from "../contants/fontFamily";

export const globalStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: appColors.white,
    },
    text:{
        fontFamily: fontFamily.regular,
        fontSize: 14,
        color: appColors.text
    },
    buttonStyle:{
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.white,
        paddingVertical: 16,
        paddingHorizontal: 16,
        minHeight: 56,
        flexDirection:'row'
    },
    section :{
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    shadow:{
        shadowColor: 'rgba(0,0,0,0.5)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        elevation: 6,
    },
});