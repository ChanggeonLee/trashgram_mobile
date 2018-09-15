import React from 'react';
import { View, StyleSheet, Text} from 'react-native'

// import 
import Tap from '../component/tap'
import NavBar from '../component/navBar'
import ImageList from '../component/imageList'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'trashgram',
  };

 
  
  render() {
    return (
      <View style={ styles.container}>        
        <ImageList />
      
        <Tap />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:
    {
        flex: 1,
        width: '100%',         
    },
});