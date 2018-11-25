import React from 'react'
import {
  StyleSheet,
  ScrollView,
  AsyncStorage
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
    let userId = await AsyncStorage.getItem('userId');

    let response = await fetch('http://117.17.158.93:3000/myimglist', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:userId
      }),
    });

    responseJson = await response.json()    
    console.log(responseJson);

    var imagelist = [];
    var i = 0 
    for(info of responseJson){
      imagelist.push(
        <Image key={i} name={info.author.name} path={info.img} tag={info.recycle} hashtag={info.hashtag} />
      );     
      i++; 
    }

    this.setState({list:imagelist});
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