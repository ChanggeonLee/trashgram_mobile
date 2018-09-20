import { StackNavigator } from 'react-navigation'
import MainStack from './mainStack.js'

const RootStack = StackNavigator(
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
