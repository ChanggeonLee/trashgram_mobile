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
  // state = {info: []}

  // async componentDidMount() {
    
  //   const response = await fetch('http://localhost:3000/')
  //   const info  = await response.json()
  //   this.setState({info: info})
  // }


  render(){
    return (       
      <ScrollView style={styles.container}>
        <View style={styles.imgRow}>
          <Image />
          <Image />
        </View>
        <View style={styles.imgRow}>
          <Image />
          <Image />
        </View>
        <View style={styles.imgRow}>
          <Image />
          <Image />
        </View>
        <View style={styles.imgRow}>
          <Image />
          <Image />
        </View>
        {/* <View>
          {
            this.state.info.map( info => {return <Text key={info.data}>{info.data}</Text>} )
          }
        </View>          */}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    
  },
  imgRow:{
    flex: 1,
    flexDirection: 'row',
  }
})