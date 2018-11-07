import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { LoginButton, AccessToken } from 'react-native-fbsdk';
import { withNavigation } from 'react-navigation'

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
    };
  }
  givetoke(){
    return fetch('http://117.17.158.93:3000/auth', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token:this.state.token
      }),
    }),this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
        <LoginButton 
          onLoginFinished={
            (error, result) => {
              if (error) {
                console.log("login has error: " + result.error);
              } else if (result.isCancelled) {
                console.log("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    console.log(data.accessToken.toString())
                    this.setState({ token: data.accessToken});
                    this.givetoke();
                  }
                )
              }
            }
          }
        />
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