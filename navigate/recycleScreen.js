import React from 'react';
import { View, StyleSheet, Image} from 'react-native';
import { Header } from 'react-native-elements';
// import { withNavigation} from 'react-navigation';


export default class RecycleScreen extends React.Component {
  render() {
    return (    
      <View style={ styles.container}>  
        <Header
          leftComponent={{ icon: 'save', color: '#000' ,onPress: () => this.props.navigation.navigate('AuthLoading')}}
          centerComponent={{ text: 'TrashGram', style: { color: 'black' } }}                              
          backgroundColor="#FFFFFF"            
        />
        <Image
          source={{uri:'http://117.17.158.93:3000/'+ this.props.path}}
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