import {StyleSheet, Text, View} from 'react-native';
import React, {FC} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  children?: React.ReactNode;
};

// Create a safe area view component
const SafeAreaView: FC<Props> = ({children}) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{flex: 1, paddingTop: insets.top, paddingBottom: insets.bottom}}>
      {children}
    </View>
  );
};

export default SafeAreaView;
