import {StyleSheet, View} from 'react-native';
import React, {FC, useState} from 'react';
import {Input as UIInput, InputProps, YStack, XStack, getTokens} from 'tamagui';
import Text from './Text';
import Button from './Button';
import {createMask} from '@utils/createMask';

type Props = {
  label?: string;
  withAsterisk?: boolean;
  mask?: string;
} & InputProps;
const Input: FC<Props> = ({
  label,
  withAsterisk = false,
  fontSize,
  ...props
}) => {
  return (
    <YStack rowGap={8}>
      {/* If label is provided, render the label and asterisk */}
      {label && (
        <XStack columnGap={2}>
          <Text
            fontSize={fontSize}
            color={'$color.textInputTextInputHeadDefault'}>
            {label}
          </Text>
          <Text fontSize={fontSize} color={'$iconInputTextAsteriskDefault'}>
            {withAsterisk ? '*' : ''}
          </Text>
        </XStack>
      )}
      <UIInput
        {...props}
        bg={'$surfaceInputTextTextFieldDefault'}
        size={'$xl'}
        fontSize={fontSize}
        p={'$xl'}
        focusStyle={{
          borderColor: '$color.borderInputTextTextFieldFocused',
          boxShadow: '$shadow.dropShadow',
        }}
      />
    </YStack>
  );
};

export default Input;
