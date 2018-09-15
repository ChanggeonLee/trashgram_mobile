import { StackNavigator } from 'react-navigation'
import HomeScreen from './homeScreen'
import DetailsScreen from './detailsScreen'
import IntroScreen from './introScreen'
import CityScreen from './cityScreen'
import LoginScreen from './loginScreen'
import MypageScreen from './mypageScreen'
import UploadScreen from './uploadScreen'
import ImageTest from './imageTest'
import CameraTest from './cameraTest'


const RootStack = StackNavigator(
  {
    // Intro: {
    //   screen: IntroScreen,
    // },
    Home: {
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
    City: {
      screen: CityScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Mypage: {
      screen: MypageScreen,
    },
    Upload: {
      screen: CameraTest,
    }
  },
  {
    initialRouteName: 'Home',
  }
);

export default RootStack