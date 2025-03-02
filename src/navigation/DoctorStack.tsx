import CustomHeader from '@components/CustomHeader';
import {headerTitleStyle} from '@constants/headerTitleStyle';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '@screens/doctor/WelcomeScreen';
import DoctorListScreen from '@screens/doctor/doctorList/DoctorListScreen';
import {DoctorStackParamList} from '../types/';

//Create a stack navigator for doctor screens
const DoctorStack = createNativeStackNavigator<DoctorStackParamList>({
  screens: {
    List: {
      screen: DoctorListScreen,
      options({route}) {
        return {
          title: route.params.disease,
        };
      },
    },
    Welcome: {
      screen: WelcomeScreen,
      options: {
        headerShown: false,
      },
    },
  },

  // custom header
  screenOptions: {
    headerTitleStyle: headerTitleStyle,
    header: props => <CustomHeader {...props} />,
  },
});

export default DoctorStack;
