import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  createStaticNavigation,
  NavigatorScreenParams,
  StaticParamList,
} from '@react-navigation/native';
import AuthStack from './AuthStack';
import DoctorStack from './DoctorStack';
import {headerTitleStyle} from '@constants/headerTitleStyle';
import {DoctorStackParamList} from '../types';

// Combine nested stacks
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
      options: {
        headerShown: false,
      },
    },
  },
  screenOptions: {
    headerTitleStyle: headerTitleStyle,
  },
});
export const Navigation = createStaticNavigation(RootStack);

// type declaration for type-safe navigation
type RootStackParamList = StaticParamList<typeof RootStack>;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {
      Doctor: NavigatorScreenParams<DoctorStackParamList>;
    }
  }
}
