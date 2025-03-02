import { createFont, createTokens } from "tamagui";

// Create tokens from figma
export const tokens = createTokens({
  space: {
    true: 6,
    xs: 2,
    sm: 4,
    md: 6,
    lg: 8,
    xl: 12,
    '2xl': 16,
    '3xl': 24
  },
  radius: {
    true: 12,
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    full: 999
  },
  size: {
    true: 14,
    sm: 35,
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
    //Text
    textGeneralStandardDefault: '#464646',
    textCTAButtonFilledPrimaryDefault: '#FFFFFF',
    textCTAButtonFilledSecondaryDefault: '#3C6CE7',
    textInputTextInputHeadDefault: '#464646',
    textInputTextInputPlaceholderEmpty: '#B4B4B4',
    textInputTextInputPlaceholderFocused: '#464646',
    textPinCodeDescriptionDefault: '#3C6CE7',
    textNavBarPageNameDefault: '#464646',
    textCTAButtonLinkPrimaryDefault: '#3C6CE7',
    textFilterChipsFilledPrimarySelected: '#FFFFFF',
    textFilterChipsFilledPrimaryDefault: '#3C6CE7',
    textTabTabNameCurrentDefault: '#3C6CE7',
    textTabTabNameDefaultDefault: '#A4A4A4',
    textCardTextGeneralDefault: '#464646',
    textIconIconGeneralSubdueDefault: '#767676',
    textCardTextGeneralHighlight: '#3C6CE7',
    textBadgeFadeBadgeSecondary: '#464646',

    //Surface
    surfaceInputTextTextFieldDefault: '#FFFFFF',
    surfaceCTAButtonFilledSecondaryDefault: '#ECF3FF',
    surfaceCTAButtonFilledPrimaryDefault: '#3C6CE7',
    surfaceNavBarGeneralDefault: '#FFFFFF',
    surfaceFilterChipsFilledPrimaryDefault: '#ECF3FF',
    surfaceFilterChipsFilledPrimarySelected: '#3C6CE7',
    surfaceBadgeFadeBadgeSecondary: '#EDEDED',

    //Icon
    iconInputTextAsteriskDefault: '#838383',

    //Border
    borderInputTextTextFieldDefault: '#CFCFCF',
    borderInputTextTextFieldFocused: '#3C6CE7',
    borderTabTabLineCurrent: '#3C6CE7',
    borderTabTabLineDefault: '#A4A4A4',

    //Background
    backgroundGeneralStandardDefault: '#FFFFFF',
    backgroundCardGeneralStandardDefault: '#FFFFFF',
  },
  shadow: {
    'dropShadow': '0 0 0 4px #C4DAFF',
    'onLight-shadowSm': '0px 0px 8px 0px #C4DAFF80',
    'onLight-shadowMd': '0px 0px 24px 0px #C4DAFF80',
  }
})

// Default font for the app and create tokens for font
export const notoSansFont = createFont({
  family: 'NotoSansThai-Regular',

  size: {
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
    '2xl': 24,
    '3xl': 32,
  },

  face: {
    // set font face for each weight
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