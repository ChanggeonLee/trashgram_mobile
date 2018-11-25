import React from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native'
import { withNavigation } from 'react-navigation'
import { LoginButton, AccessToken } from 'react-native-fbsdk';

import ProFileImage from '../component/profileImage'

class ProFile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {            
      name: null,      
      picture: null,
      score: null,
    };
  }

  componentDidMount() {
    this.profileInfo();
  }

  profileInfo = async() => {
    let userId = await AsyncStorage.getItem('userId');
    console.log(userId);    
    let response = await fetch('http://117.17.158.93:3000/auth/info', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id:userId
      }),
    });
    let responseJson = await response.json();
    console.log(responseJson);
    
    this.setState({
      name:responseJson.name,
      picture: responseJson.picture,
      score: responseJson.score,
    });
    
  }

  _cleartoken = async () => {
    try {
      await AsyncStorage.clear();
      userId = await AsyncStorage.getItem('userId');
      this.props.navigation.navigate('AuthLoading');
    } catch (error) {
      // Error saving data
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={{justifyContent: 'center'}}>
          <ProFileImage img={this.state.picture}/>
        </View>        
        <View>
          <Text style={styles.info}>
            {this.state.name}
            당신의 점수는 {this.state.score} 입니다.~!!
          </Text>          
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