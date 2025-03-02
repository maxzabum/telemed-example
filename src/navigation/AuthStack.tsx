import {headerTitleStyle} from '@constants/headerTitleStyle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/auth/LoginScreen';

// Create a stack navigator for authentication screens
const AuthStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: {
        headerShown: false,
      },
    },
  },
  screenOptions: {
    headerTitleStyle: headerTitleStyle,
  },
});

export default AuthStack;
