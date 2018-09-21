import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

import Graph from '../component/graph'
import Tap   from '../component/tap'
import NavBar from  '../component/navBar'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container}>
        <NavBar />
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