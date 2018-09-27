import React from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native'

import Tap from '../component/tap'
import NavBar from '../component/navBar'
import UploadImage from '../component/uploadImage'

export default class UploadScreen extends React.Component {
  render() {
    return (
      <View style={styles.constainer}>
        <NavBar />
        <Button title="Upload" onPress={() => this.props.navigation.navigate('Home')} />
        <UploadImage img={this.props.img}/>
        <Tap />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer:{
    flex:1,
    alignItems: 'center' ,     
    // justifyContent: 'center',
  },
});