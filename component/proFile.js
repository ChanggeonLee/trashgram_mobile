import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native'

import ProFileImage from '../component/profileImage'

export default class ProFile extends React.Component {
  render(){
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <ProFileImage />
        </View>        
        <View>
          <Text style={styles.info}>
            안녕하세요 레드벨벳 덕후 이똥땅 입니다.
          </Text>
          <Button title="회원 탙퇴" style={styles.button}/>
        </View>        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop:20,
    height:150,
    backgroundColor: 'gray',
    flexDirection: 'row',
  },
  button:{
    marginTop:30,
    marginLeft:20,
  },
  info:{
    marginTop:30,
    marginLeft:20,
  },
});