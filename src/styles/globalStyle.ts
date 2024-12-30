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
    }
});