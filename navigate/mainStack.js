import { StackNavigator } from 'react-navigation'
import HomeScreen from './homeScreen'
import IntroScreen from './introScreen'
import CityScreen from './cityScreen'
import LoginScreen from './loginScreen'
import MypageScreen from './mypageScreen'
import UploadScreen from './uploadScreen'
import ImageTest from './imageTest'
import CameraTest from './cameraTest'


const MainStack = StackNavigator(
  {
    // Intro: {
    //   screen: IntroScreen,
    // },
    Home: {
      screen: HomeScreen,
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
    headerMode: 'none',
  }
);

export default MainStack