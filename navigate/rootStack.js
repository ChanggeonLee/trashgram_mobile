import { createStackNavigator } from 'react-navigation'
import MainStack from './mainStack.js'

const RootStack = createStackNavigator(
  {
    Main: {
      screen: MainStack,
    }
  },
  {
    headerMode: 'none',
  }
);

export default RootStack
