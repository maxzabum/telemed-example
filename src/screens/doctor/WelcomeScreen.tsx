import React from 'react';
import SafeAreaView from '@components/SafeAreaView';
import Text from '@components/core/Text';
import {View} from 'tamagui';
import {TouchableOpacity} from 'react-native';
import {useAuthViewModel} from '@viewmodels/authViewModel';

const WelcomeScreen = () => {
  const {onPressWelcome} = useAuthViewModel();
  return (
    <SafeAreaView>
      <View flex={1} justify={'center'} items={'center'}>
        {/* I don't separate this component because it is used for a specific situation. */}
        <TouchableOpacity activeOpacity={0.8} onPress={onPressWelcome}>
          <View
            boxShadow={'$shadow.onLight-shadowSm'}
            rounded={'$lg'}
            p={'$2xl'}>
            <Text
              fontSize={'$3xl'}
              color={'$textPinCodeDescriptionDefault'}
              rounded={16}>
              ยินดีต้อนรับ
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
