import React from 'react'
import {
  StyleSheet,
  ScrollView,
} from 'react-native'

import Image from './image'

export default class Lattice extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      list:null,
    };
  }
  componentDidMount() {
    this.getimagelist();
  }

  getimagelist = async () => {
    // data를 가져와서 for문으로 list를 만들자
    let response = await fetch('http://117.17.158.93:3000/imglist');
    
    responseJson = await response.json()    
    console.log(responseJson);

    var imagelist = [];
    var i = 0 
    for(info of responseJson){
      imagelist.push(
        <Image key={i} path={info.img} tag={info.recycle} hashtag={info.hashtag} />
      );     
      i++; 
    }

    this.setState({list:imagelist});

    return imagelist;
  }

  render(){    
    return (           
      <ScrollView style={styles.container} > 
        {this.state.list}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({

})