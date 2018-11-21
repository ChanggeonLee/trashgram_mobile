import React from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'

import Image from './image'

export default class Lattice extends React.Component{

  getimagelist(){
    // data를 가져와서 for문으로 list를 만들자
    var imagelist = [];

    for(let i = 0 ; i < 5 ; i++){
      imagelist.push(
        <Image key={i}/>
      );
    }
    return imagelist;
  }


  render(){
    
    return (       
      <ScrollView style={styles.container}> 
        {this.getimagelist()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

})