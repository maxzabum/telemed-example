import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';
import {config} from 'tamagui.config';

// Create a safe area view component
const SafeAreaView: FC<SafeAreaViewProps> = ({children, ...props}) => {
  return (
    <RNSafeAreaView {...props} style={[styles.safeArea]}>
      {children}
    </RNSafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: config.tokens.color.backgroundGeneralStandardDefault.val,
    flex: 1,
  },
});

export default SafeAreaView;
