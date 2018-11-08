import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native'
import { withNavigation } from 'react-navigation'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import ProFileImage from '../component/profileImage'

class ProFile extends React.Component {

  _cleartoken = async () => {
    try {
      await AsyncStorage.clear();
      token = await AsyncStorage.getItem('userToken');
      this.props.navigation.navigate('AuthLoading');
    } catch (error) {
      // Error saving data
    }
  }

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
          {/* <Button title="회원 탙퇴" style={styles.button} onPress={() => this.props.navigation.navigate('Home')}/> */}
          <LoginButton onLogoutFinished={() => this._cleartoken()}/>
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

export default withNavigation (ProFile);