import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

import Graph from '../component/graph_1'
import Graph2 from '../component/graph_2'
import Tap   from '../component/tap'
import NavBar from  '../component/navBar'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container}>
        <NavBar />
        <Graph />  
        <Graph2 />
        {/* <Tap /> */}
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