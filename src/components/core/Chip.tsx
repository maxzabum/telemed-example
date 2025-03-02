import React, {FC, PropsWithChildren} from 'react';
import {ColorTokens, View} from 'tamagui';
import Text from './Text';
import {TouchableOpacity} from 'react-native';

type Props = {
  variant?: 'default' | 'selected';
  onPress?: () => void;
} & PropsWithChildren;
const Chip: FC<Props> = ({variant = 'default', onPress, children}) => {
  const bg: ColorTokens =
    variant === 'selected'
      ? '$surfaceFilterChipsFilledPrimarySelected'
      : '$surfaceFilterChipsFilledPrimaryDefault';

  const textColor: ColorTokens =
    variant === 'selected'
      ? '$textFilterChipsFilledPrimarySelected'
      : '$textFilterChipsFilledPrimaryDefault';

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        height={'$sm'}
        bg={bg}
        rounded={'$full'}
        justify={'center'}
        items={'center'}
        px={'$2xl'}>
        <Text color={textColor}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Chip;
