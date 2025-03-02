import { StyleProp, TextStyle } from "react-native";
import { config } from "tamagui.config";

// Style for header title
export const headerTitleStyle: StyleProp<Pick<TextStyle, "fontFamily" | "fontSize" | "fontWeight"> & {
    color?: string;
}> = {
    fontFamily: 'NotoSansThai-SemiBold',
    fontWeight: '600',
    fontSize: 16,
    color: config.tokens.color.textNavBarPageNameDefault.val
}