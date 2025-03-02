import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {
  ButtonProps,
  ColorTokens,
  FontSizeTokens,
  FontWeightTokens,
  RadiusTokens,
  SizeTokens,
  Button as UIButton,
} from 'tamagui';

type Props = {
  type?: 'primary';
} & ButtonProps;

const Button: FC<Props> = ({
  children,
  size = '$xl',
  type = 'primary',
  disabled = false,
  ...props
}) => {
  //map button size to style
  const getButtonStyle = (): {
    fontSize: FontSizeTokens;
    fontWeight: FontWeightTokens;
    radius: RadiusTokens;
    height: SizeTokens;
  } => {
    switch (size) {
      case '$sm':
        return {
          fontSize: '$md',
          fontWeight: '400',
          radius: '$full',
          height: '$sm',
        };
      case '$md':
        return {
          fontSize: '$md',
          fontWeight: '600',
          radius: '$md',
          height: '$md',
        };
      case '$lg':
        return {
          fontSize: '$lg',
          fontWeight: '600',
          radius: '$md',
          height: '$lg',
        };
      case '$xl':
        return {
          fontSize: '$xl',
          fontWeight: '600',
          radius: '$md',
          height: '$xl',
        };
      default:
        return {
          fontSize: '$lg',
          fontWeight: '600',
          radius: '$md',
          height: '$lg',
        };
    }
  };

  //map button type to style with disabled state
  const getButtonType = (): {
    textColor: ColorTokens;
    bgColor: ColorTokens;
  } => {
    switch (type) {
      case 'primary':
        return {
          textColor: disabled
            ? '$color.textCTAButtonFilledSecondaryDefault'
            : '$color.textCTAButtonFilledPrimaryDefault',
          bgColor: disabled
            ? '$color.surfaceCTAButtonFilledSecondaryDefault'
            : '$color.surfaceCTAButtonFilledPrimaryDefault',
        };

      default:
        return {
          textColor: disabled
            ? '$color.textCTAButtonFilledPrimaryDefault'
            : '$color.textCTAButtonFilledSecondaryDefault',
          bgColor: disabled
            ? '$color.surfaceCTAButtonFilledSecondaryDefault'
            : '$color.surfaceCTAButtonFilledPrimaryDefault',
        };
    }
  };

  return (
    <UIButton
      {...props}
      disabled={disabled}
      color={getButtonType().textColor}
      bg={getButtonType().bgColor}
      pressStyle={{
        bg: getButtonType().bgColor,
        opacity: 0.9,
        borderWidth: 0,
      }}
      rounded={getButtonStyle().radius}
      px={'$xl'}
      items={'center'}
      justify={'center'}
      height={getButtonStyle().height}
      fontSize={getButtonStyle().fontSize}
      fontWeight={getButtonStyle().fontWeight}>
      {children}
    </UIButton>
  );
};

export default Button;
