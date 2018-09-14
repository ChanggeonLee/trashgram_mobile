import React from 'react';
import { View, StyleSheet} from 'react-native'

// import 
import Tap from '../component/tap'
import NavBar from '../component/navBar'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        {/* <NavBar /> */}
        <View style={{height: 500}}>
        </View>
        <Tap />
      </View>
    );
  }
}
