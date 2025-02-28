import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '@screens/login/LoginScreen';

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
    contentStyle: {
      backgroundColor: '#FFFFFF',
    },
  },
});

export default AuthStack;
