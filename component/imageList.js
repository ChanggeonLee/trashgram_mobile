import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  ScrollView,
} from 'react-native'

import Image from './image'

export default class Lattice extends React.Component{
  render(){
    return (      
      <ScrollView style={styles.buttonGroup}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image />
          <Image />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image />
          <Image />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image />
          <Image />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image />
          <Image />
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Image />
          <Image />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})