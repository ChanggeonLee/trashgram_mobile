import React from 'react';
import { View, Text, Button } from 'react-native'
import Tap from '../component/tap'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
        <Text>mypage Screen</Text>
        <Tap />
      </View>
    );
  }
}