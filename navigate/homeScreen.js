import React from 'react';
import { View, Text, Button } from 'react-native'

import ButtonGroup from '../component/buttonGroup'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <ButtonGroup />
      </View>
    );
  }
}