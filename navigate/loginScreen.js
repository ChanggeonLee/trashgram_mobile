import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'

var FBLoginButton = require('../component/fbloginbutton');

export default class HomeScreen extends React.Component {
  render() {
    return (
      // <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
      //   <Text>login Screen</Text>
      //   {/* <Button
      //     title="Go to Home"
      //     onPress={() => this.props.navigation.navigate('Home')}
      //   />
      //   <Button
      //     title="Go back"
      //     onPress={() => this.props.navigation.goBack()}
      //   /> */}
      //   <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
      //   <FBLoginButton />
      // </View>
      <View style={styles.container}>
       <Text style={styles.label}>Welcome to the Facebook SDK for React Native!</Text>
       <FBLoginButton />
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