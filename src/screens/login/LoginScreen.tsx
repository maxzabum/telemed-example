import SafeAreaView from '@components/SafeAreaView';
import {Link, LinkText} from '@components/ui/link';
import {Text} from '@components/ui/text';
import {useAuthViewModel} from '@viewmodels/authViewModel';
import React, {useEffect} from 'react';
import TelehealthLogo from '@assets/svgs/TelehealthLogo';
import {Box} from '@components/ui/box';
import {Input, InputField} from '@components/ui/input';

const LoginScreen = () => {
  const {onLogin, onTextChange, userIdentityNumber} = useAuthViewModel();

  return (
    <SafeAreaView>
      <Box className="justify-center items-center gap-y-8">
        <Box className="p-[19px]">
          <TelehealthLogo />
        </Box>
        <Box>
          <Text className="color-semantic-text-general-standard-default font-semibold">
            เข้าสู่ระบบเพื่อใช้งาน
          </Text>
          <Box className="flex-row">
            <Text className="color-semantic-text-inputText-inputHead-default">
              เลขบัตรประจำตัวประชาชน/เลขหนังสือเดินทาง
            </Text>
            <Text className="color-semantic-icon-inputText-asterisk-default">
              *
            </Text>
          </Box>
          <Input
            variant="outline"
            size="md"
            isDisabled={false}
            isInvalid={false}
            isReadOnly={false}>
            <InputField
              placeholder="Enter Text here..."
              onChangeText={onTextChange}
              value={userIdentityNumber}
            />
          </Input>
        </Box>
      </Box>
    </SafeAreaView>
  );
};

export default LoginScreen;
