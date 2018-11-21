import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

import Graph from '../component/graph_1'
import Graph2 from '../component/graph_2'

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={ styles.container}>
        <Header
          centerComponent={{ text: 'TrashGram', style: { color: 'black' } }}
          backgroundColor="#FFFFFF"            
        />
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