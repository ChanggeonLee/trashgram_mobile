import React from 'react';
import { View, StyleSheet } from 'react-native'
import { Header } from 'react-native-elements'

import ProFile from '../component/proFile'
import ImageList from '../component/myimageList'


export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>      
        <Header
          centerComponent={{ text: 'TrashGram', style: { color: 'black' } }}
          backgroundColor="#FFFFFF"            
        />
        <ProFile />
        <ImageList />        
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