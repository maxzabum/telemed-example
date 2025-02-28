import {StyleSheet, View} from 'react-native';
import React, {FC} from 'react';
import {Text as UIText, TextProps} from 'tamagui';

const Text: FC<TextProps> = ({
  children,
  fontSize = '$md',
  fontWeight = '400',
  color = '$textGeneralStandardDefault',
  ...props
}) => {
  return (
    <UIText
      {...props}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}>
      {children}
    </UIText>
  );
};

export default Text;
