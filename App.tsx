/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Navigation} from '@navigation/RootStack';
import {config} from 'tamagui.config';
import {TamaguiProvider, Text} from 'tamagui';

function App(): React.JSX.Element {
  /*
   * To keep the template simple and small we're adding padding to prevent view
   * from rendering under the System UI.
   * For bigger apps the reccomendation is to use `react-native-safe-area-context`:
   * https://github.com/AppAndFlow/react-native-safe-area-context
   *
   * You can read more about it here:
   * https://github.com/react-native-community/discussions-and-proposals/discussions/827
   */
  const safePadding = '5%';

  return (
    <TamaguiProvider config={config}>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </TamaguiProvider>
  );
}

export default App;
