import React from 'react';
import { View, StyleSheet } from 'react-native'

import Tap from '../component/tap'
import NavBar from '../component/navBar'
import ProFile from '../component/proFile'
import ImageList from '../component/imageList'


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <NavBar />
        <ProFile />
        <ImageList />
        {/* <Tap /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1, 
    width:'100%',
  },
});