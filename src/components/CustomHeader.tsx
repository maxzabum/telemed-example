import React, {FC} from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import ChevronLeft from '@assets/svgs/ChevronLeft';
import SearchSmall from '@assets/svgs/SeachSmall';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import Text from './core/Text';
import {View} from 'tamagui';
import {config} from 'tamagui.config';

interface CustomHeaderProps extends NativeStackHeaderProps {}

const CustomHeader: FC<CustomHeaderProps> = ({
  navigation,
  options: {title},
}) => {
  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView edges={['top', 'left', 'right']} style={styles.safeArea}>
      <View
        flexDirection="row"
        items={'center'}
        justify={'space-between'}
        px={28}
        py={20}>
        <TouchableOpacity onPress={handleGoBack}>
          <ChevronLeft />
        </TouchableOpacity>
        <Text fontWeight={'600'} fontSize={'$lg'}>
          {title}
        </Text>
        <View>
          <SearchSmall />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: config.tokens.color.surfaceNavBarGeneralDefault.val,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
});

export default CustomHeader;
