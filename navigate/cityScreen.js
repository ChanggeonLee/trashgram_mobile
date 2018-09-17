import React from 'react';
import { View, Text, Button } from 'react-native'

import Graph from '../component/graph'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      // <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
      //   <Text>City Screen</Text>
      //   <Button
      //     title="Go to Home"
      //     onPress={() => this.props.navigation.navigate('Home')}
      //   />
      //   <Button
      //     title="Go back"
      //     onPress={() => this.props.navigation.goBack()}
      //   />
      // 
      // </View>
      <Graph />
    );
  }
}