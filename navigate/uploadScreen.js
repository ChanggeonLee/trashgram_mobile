import React from 'react';
import { View, Text, Button } from 'react-native'

export default class HomeScreen extends React.Component {
  post_server(){
    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        firstParam: 'test',
        secondParam: 'test',
      }),
    });
  }

  render() {
    return (
      <View style={{flex:1, alignItems: 'center' , justifyContent: 'center'}}>
        <Text>upload Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Post server"
          onPress={this.post_server.bind(this)}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}