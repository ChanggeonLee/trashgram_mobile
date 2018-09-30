import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

// import Camera from '../component/camera'
import Camera from '../component/cameratest'
import Tap from '../component/tap'

export default class CameraScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera />
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