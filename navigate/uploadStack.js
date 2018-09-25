import { StackNavigator } from 'react-navigation'
import CameraScreen from './cameraScreen'
import UploadScreen from './uploadScreen'

const UploadStack = StackNavigator(
  {
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

export default UploadStack