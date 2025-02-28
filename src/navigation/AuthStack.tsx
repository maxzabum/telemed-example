import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/auth/LoginScreen';
import WelcomeScreen from '@screens/auth/WelcomeScreen';

const AuthStack = createNativeStackNavigator({
  screens: {
    Login: {
      screen: LoginScreen,
      options: {
        headerShown: false,
      },
    },
    Welcome: {
      screen: WelcomeScreen,
      options: {
        headerShown: false,
      },
    },
  },
  screenOptions: {
    contentStyle: {
      backgroundColor: '#FFFFFF',
    },
  },
});

export default AuthStack;
