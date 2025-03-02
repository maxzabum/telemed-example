import {StyleSheet} from 'react-native';
import React, {FC, useState} from 'react';
import {Input as UIInput, InputProps, YStack, XStack, View} from 'tamagui';
import Text from './Text';

type Props = {
  label?: string;
  withAsterisk?: boolean;
  mask?: string;
} & InputProps;
const Input: FC<Props> = ({
  label,
  withAsterisk = false,
  fontSize = '$lg',
  ...props
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const onSetFocus = () => {
    setIsFocus(true);
  };

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
      {/* Focus style */}
      <View
        boxShadow={isFocus ? '$shadow.dropShadow' : 'none'}
        rounded={'$md'}
        bg={'$surfaceInputTextTextFieldDefault'}>
        <UIInput
          {...props}
          selectionColor={'$color.textInputTextInputPlaceholderFocused'}
          color={'$color.textInputTextInputPlaceholderFocused'}
          placeholder={isFocus ? '' : props.placeholder}
          bg={'$surfaceInputTextTextFieldDefault'}
          size={'$xl'}
          fontSize={fontSize}
          p={'$2xl'}
          onFocus={onSetFocus}
          // boxShadow ignore input padding in Android
          focusStyle={{
            borderColor: '$color.borderInputTextTextFieldFocused',
            // boxShadow: '$shadow.dropShadow',
          }}
        />
      </View>
    </YStack>
  );
};

const style = StyleSheet.create({
  input: {
    borderRadius: 12,
  },
});

export default Input;
