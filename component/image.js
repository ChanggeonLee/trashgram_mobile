import React from 'react'
import {
  View,
  StyleSheet,
  Image,
  Text
} from 'react-native'
import {  } from 'react-native'
import { Card, ListItem, Button } from 'react-native-elements'

export default class Lattice extends React.Component{
  render(){
    return (
      // <Image
      //     style={styles.image}
      //     source={require('../src/img/testImg.png')}
      // />
      // implemented with Text and Button as children
      <Card
        title='사용자 이름'
        image={require('../src/img/testImg.png')}>
        <Text style={{marginBottom: 10}}>
          #test #hashtag #집에가고싶다.
        </Text>
        {/* <Button
          icon={{name: 'code'}}
          backgroundColor='#03A9F4'
          buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
          title='VIEW NOW' /> */}
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    height: 200, 
    borderWidth: 0.5,
    // backgroundColor: 'gray'
  },
})