import { createFont, createTokens } from "tamagui";
import { tokens as TamaguiTokens } from "@tamagui/themes";

export const tokens = createTokens({
  space: {
    true: 6,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 16,
    xxl: 24,
  },
  radius: {
    true: 12,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
  },
  size: {
    true: 14,
    sm: 1,
    md: 2,
    lg: 3,
    xl: 56,

  },
  zIndex: {
    true: 1,
    xxs: -2,
    xs: -1,
    md: 1,
    lg: 4,
    xl: 5
  },

  color: {
    true: '#464646',
    textGeneralStandardDefault: '#464646',
    textCTAButtonFilledPrimaryDefault: '#FFFFFF',
    textCTAButtonFilledSecondaryDefault: '#3C6CE7',
    textInputTextInputHeadDefault: '#464646',
    textInputTextInputPlaceholderEmpty: '#B4B4B4',
    textPinCodeDescriptionDefault: '#3C6CE7',
    surfaceInputTextTextFieldDefault: '#FFFFFF',
    surfaceCTAButtonFilledSecondaryDefault: '#ECF3FF',
    surfaceCTAButtonFilledPrimaryDefault: '#3C6CE7',
    iconInputTextAsteriskDefault: '#838383',
    borderInputTextTextFieldDefault: '#CFCFCF',
    borderInputTextTextFieldFocused: '#3C6CE7',
    backgroundGeneralStandardDefault: '#FFFFFF',
    textCTAButtonLinkPrimaryDefault: '#3C6CE7',
  },
  shadow: {
    'dropShadow': '0 0 0 4px #C4DAFF',
    'onLight-shadowSm': '0px 0px 8px 0px #C4DAFF80'
  }
  // fontFamily:{
  //     body: 'NotoSansThai-Regular',
  //     sss: 'NotoSansThai-Bold'
  // }

})

export const notoSansFont = createFont({
  family: 'NotoSansThai-Regular',
  size: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    '2xl': 24,
    '3xl': 32,
    // ...
  },

  // for native only, alternate family based on weight/style
  face: {
    // pass in weights as keys
    100: { normal: 'NotoSansThai-Thin' },
    200: { normal: 'NotoSansThai-ExtraLight' },
    300: { normal: 'NotoSansThai-Light' },
    400: { normal: 'NotoSansThai-Regular' },
    500: { normal: 'NotoSansThai-Medium' },
    600: { normal: 'NotoSansThai-SemiBold' },
    700: { normal: 'NotoSansThai-Bold' },
    800: { normal: 'NotoSansThai-ExtraBold' },
    900: { normal: 'NotoSansThai-Black', }

  },
})