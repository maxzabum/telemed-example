import SafeAreaView from '@components/SafeAreaView';
import {useAuthViewModel} from '@viewmodels/authViewModel';
import React, {FC} from 'react';
import TelehealthLogo from '@assets/svgs/TelehealthLogo';
import {View, XStack, YStack} from 'tamagui';
import Text from '@components/core/Text';
import Input from '@components/core/Input';
import Button from '@components/core/Button';
import ButtonLink from '@components/core/ButtonLink';

const LoginScreen: FC = () => {
  const {onLogin, onTextChange, userIdentityNumber} = useAuthViewModel();
  const onChange = (value: string) => {
    onTextChange(value);
  };
  return (
    <SafeAreaView>
      <YStack flex={1} justify={'center'} rowGap={32} pl={'$2xl'} pr={'$2xl'}>
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
            onChangeText={onChange}
            fontSize={'$lg'}
            withAsterisk
            label="เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง"
            placeholder="เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง"
          />

          <Button onPress={onLogin}>เข้าสู่ระบบ</Button>
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
