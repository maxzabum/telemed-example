import {StyleSheet, TouchableOpacity} from 'react-native';
import React, {FC, PropsWithChildren} from 'react';
import Text from './Text';
import {FontSizeTokens} from 'tamagui';

type Props = {
  onPress: () => void;
  fontSize?: FontSizeTokens;
} & PropsWithChildren;
const ButtonLink: FC<Props> = ({children, fontSize = '$md', onPress}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <Text fontSize={fontSize} color={'$textCTAButtonLinkPrimaryDefault'}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonLink;

const styles = StyleSheet.create({});
