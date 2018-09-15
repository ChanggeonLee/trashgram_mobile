import React from 'react'
import {
  View,
  StyleSheet,
} from 'react-native'


export default class Lattice extends React.Component{
  render(){
    return (
      <View style={styles.image}></View>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 100, 
    borderWidth: 0.5,
    backgroundColor: 'gray'
  },
})