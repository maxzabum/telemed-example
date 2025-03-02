import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@navigation/RootStack';
import {config} from 'tamagui.config';
import {TamaguiProvider} from 'tamagui';

function App(): React.JSX.Element {
  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}

export default App;
