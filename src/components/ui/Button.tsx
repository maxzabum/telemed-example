import {StyleSheet, Text, View} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import {
  ButtonProps,
  ColorTokens,
  FontSizeTokens,
  Button as UIButton,
} from 'tamagui';

type Props = {
  type?: 'primary';
} & ButtonProps;

const Button: FC<Props> = ({
  children,
  size,
  type = 'primary',
  disabled = false,
  ...props
}) => {
  // Map button size to font size tokens
  const getFontSize = (): FontSizeTokens => {
    switch (size) {
      case '$sm':
        return '$sm';
      case '$md':
        return '$md';
      case '$lg':
        return '$lg';
      case '$xl':
        return '$xl';
      default:
        return '$lg';
    }
  };

  // Map button type to color tokens
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
      items={'center'}
      justify={'center'}
      height={size}
      fontSize={getFontSize()}
      fontWeight={'600'}>
      {children}
    </UIButton>
  );
};

export default Button;
