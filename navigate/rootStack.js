import { createStackNavigator,createSwitchNavigator } from 'react-navigation'

import HomeScreen from './homeScreen'
import CameraScreen from './cameraScreen'
import CityScreen from './cityScreen'
import UploadScreen from './uploadScreen'
import MypageScreen from './mypageScreen'
import LoginScreen from './loginScreen'
import AuthLoadingScreen from './authLoadingScreen'

const AppStack = createStackNavigator(
{
  Home: {
    screen: HomeScreen,
  },
  City: {
    screen: CityScreen,
  },   
  Mypage: {
    screen: MypageScreen,
  },
  Camera: {
    screen: CameraScreen,
  },
  Upload:{
    screen: UploadScreen,
  },
},
{
  headerMode: 'none',
}
);

const AuthStack = createStackNavigator({ 
  SignIn: LoginScreen 
},{
  headerMode: 'none',
});

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    headerMode: 'none',
  }
);

export default RootStack
