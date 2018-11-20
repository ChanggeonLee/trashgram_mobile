import React from 'react';
import { View, Text, Button, StyleSheet, AsyncStorage } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { withNavigation } from 'react-navigation'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      email: null,
      name: null,
      id: null,
      picture: null,
    };
  }

  async givetoke(){
    let response = await fetch('http://117.17.158.93:3000/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token:this.state.token,
        email:this.state.email,
        name:this.state.name,
        id:this.state.id,
        picture:this.state.picture,
      }),
    });
    let responseJson = await response.json();
    console.log(responseJson);
    this.props.navigation.navigate('AuthLoading');
  }

  _settoken = async () => {
    await AsyncStorage.setItem( 'userToken', this.state.token);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
        <LoginButton 
          readPermissions={["public_profile","email"]}
          onLoginFinished={
            () => {             
              AccessToken.getCurrentAccessToken().then(
                async (data) => {
                  this.setState({ token: data.accessToken});
                  this._settoken();
                  let response = await fetch('https://graph.facebook.com/v2.5/me?fields=email,name,picture&access_token='+this.state.token);
                  let responseJson = await response.json();                  
                  this.setState({
                    email: responseJson.email,
                    name: responseJson.name,
                    id: responseJson.id,
                    picture: responseJson.picture.data.url,
                  });
                  this.givetoke();
                }
            )}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  label: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 48,
  },
});

export default withNavigation (LoginScreen);