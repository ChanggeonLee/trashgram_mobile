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
    // data를 가져와서 for문으로 list를 만들자
    // var imagelist = [];

    // for(let image fo imagedata){
    //   imagelist.puth(
    //     <View>

    //     </View>
    //   );
    // }

    return (       
      <ScrollView style={styles.container}>
        <View style={styles.imgRow}>
          <Image />
          <Image />
        {/* </View> */}
        {/* <View style={styles.imgRow}> */}
          <Image />
          <Image />
        {/* </View> */}
        {/* <View style={styles.imgRow}> */}
          <Image />
          <Image />
        {/* </View> */}
        {/* <View style={styles.imgRow}> */}
          <Image />
          <Image />
        </View>
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