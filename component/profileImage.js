import React from 'react'
import {View, StyleSheet, Image} from 'react-native'

export default class profileimage extends React.Component{
  render(){
    return (
      <Image
          style={styles.container}
          source={{uri:this.props.img}}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
    backgroundColor: 'red',
  },
});