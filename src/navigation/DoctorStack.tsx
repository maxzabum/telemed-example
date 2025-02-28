import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DoctorScreen from '@screens/doctor/DoctorScreen';

const DoctorStack = createNativeStackNavigator({
  screens: {
    List: {
      screen: DoctorScreen,
      options: {
        headerShown: false,
      },
    },
  },
});

export default DoctorStack;
