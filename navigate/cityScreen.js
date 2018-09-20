import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

import Graph from '../component/graph'
import Tap   from '../component/tap'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'trashgram',
  };

  render() {
    return (
      <View style={ styles.container}>
        <Graph />  
        <Tap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
  {
    flex: 1,
    width: '100%', 
  }
});