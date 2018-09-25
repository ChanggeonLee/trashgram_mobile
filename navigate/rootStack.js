import { createStackNavigator } from 'react-navigation'
import MainStack from './mainStack.js'
import UploadStack from './uploadStack'

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    },
    Up: {
      screen: UploadStack,
    }
  },
  {
    headerMode: 'none',
  }
);

export default RootStack
