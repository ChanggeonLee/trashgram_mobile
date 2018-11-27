import React from 'react';
import { View, StyleSheet, Image, Dimensions} from 'react-native';
import { Header } from 'react-native-elements';

const deviceW = Dimensions.get('window').width

export default class RecycleScreen extends React.Component {

  render() {
    const { navigation } = this.props;
    const imgurl = navigation.getParam('imgurl');
    const path = 'http://117.17.158.93:3000/'+imgurl;

    return (    
      <View style={ styles.container}>  
        <Header
          leftComponent={{ icon: 'save', color: '#000' ,onPress: () => this.props.navigation.navigate('AuthLoading')}}
          centerComponent={{ text: 'TrashGram', style: { color: 'black' } }}                              
          backgroundColor="#FFFFFF"            
        />
        <Image
          style={{ flex: 1, width: deviceW }}
          source={{uri: path}}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:
    {
        flex: 1,
        width: '100%',         
    },
});