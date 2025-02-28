import SafeAreaView from '@components/SafeAreaView';
import {useAuthViewModel} from '@viewmodels/authViewModel';
import React, {useEffect} from 'react';
import TelehealthLogo from '@assets/svgs/TelehealthLogo';
import {getTokens, SizeTokens, TextArea, View, XStack, YStack} from 'tamagui';
import Text from '@components/ui/Text';
import Input from '@components/ui/Input';
import Button from '@components/ui/Button';
import ButtonLink from '@components/ui/ButtonLink';
import {createMask} from '@utils/createMask';

const LoginScreen = () => {
  const {onLogin, onTextChange, userIdentityNumber} = useAuthViewModel();
  const onChange = (value: string) => {
    onTextChange(value);
  };
  return (
    <SafeAreaView>
      <YStack flex={1} justify={'center'} rowGap={32} pl={'$xl'} pr={'$xl'}>
        <View items={'center'} justify={'flex-end'} flex={1}>
          <TelehealthLogo />
        </View>
        <YStack rowGap={16} mt={19} flex={1}>
          <Text fontSize={'$xl'} fontWeight={'600'} text="center">
            เข้าสู่ระบบเพื่อใช้งาน
          </Text>
          <Input
            value={userIdentityNumber}
            keyboardType="number-pad"
            maxLength={13}
            onChangeText={onChange}
            fontSize={'$lg'}
            withAsterisk
            label="เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง"
          />

          <Button size={'$xl'} onPress={onLogin}>
            เข้าสู่ระบบ
          </Button>
        </YStack>
        <XStack columnGap={8} justify={'center'} items={'center'} flex={1}>
          <Text fontSize={'$lg'}>ยังไม่มีบัญชี ?</Text>
          <ButtonLink onPress={() => {}} fontSize={'$lg'}>
            สมัครสมาชิก
          </ButtonLink>
        </XStack>
      </YStack>
    </SafeAreaView>
  );
};

export default LoginScreen;
