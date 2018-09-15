import React from 'react';
import { View, StyleSheet, Text} from 'react-native'

// import 
import Tap from '../component/tap'
import NavBar from '../component/navBar'
import ImageList from '../component/imageList'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  state = {info: []}

  async componentDidMount() {
    
    const response = await fetch('http://localhost:3000/')
    const info  = await response.json()
    this.setState({info: info})
  }
  
  render() {
    return (
      <View>
        <ImageList />
        <View>
          {
            this.state.info.map( info => {return <Text key={info.data}>{info.data}</Text>} )
          }
        </View>
        <Tap />
      </View>
    );
  }
}
