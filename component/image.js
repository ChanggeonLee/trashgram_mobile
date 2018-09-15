import React from 'react'
import {
  View,
  StyleSheet,
  Image
} from 'react-native'


export default class Lattice extends React.Component{
  render(){
    return (
      <Image
          style={styles.image}
          source={require('../src/img/testImg.png')}
      />
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