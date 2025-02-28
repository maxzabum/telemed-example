import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  StaticParamList,
} from '@react-navigation/native';
import AuthStack from './AuthStack';
import DoctorStack from './DoctorStack';

const RootStack = createNativeStackNavigator({
  screens: {
    Auth: {
      screen: AuthStack,
      options: {
        headerShown: false,
      },
    },
    Doctor: {
      screen: DoctorStack,
    },
  },
  screenOptions: {
    contentStyle: {
      backgroundColor: '#000000',
    },
  },
});
export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
