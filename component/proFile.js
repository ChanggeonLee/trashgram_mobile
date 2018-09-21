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
          <Button title="회원 탙퇴" style={styles.button}/>
          <Text>
            안녕하세요 레드벨벳 덕후 이똥땅 입니다.
          </Text>
          <Text>
            예리를 제일 좋아 합니다.
          </Text>
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
    // backgroundColor: ''
  }
});