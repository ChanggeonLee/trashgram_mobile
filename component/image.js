import React from 'react'
import {
  StyleSheet,
  Text
} from 'react-native'

import { Card} from 'react-native-elements'

export default class Lattice extends React.Component{

  render(){
    console.log('http://117.17.158.93:3000/'+ this.props.path);
    return (
      <Card
        title={this.props.name}
        image={{uri: 'http://117.17.158.93:3000/'+ this.props.path}}>
        <Text style={{marginBottom: 10}}>
          {this.props.tag}    {this.props.hashtag}
        </Text>        
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200, 
    borderWidth: 0.5,
    // backgroundColor: 'gray'
  },
})