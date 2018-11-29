import React from 'react';
import { View, StyleSheet, Image, Dimensions, Text} from 'react-native';
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
        <View style={ styles.imagecontainer}>
          <Image
            style={styles.image}
            source={{uri: path}}
          />
          <Text style={styles.info}>주위 분리수거 쓰레기통에</Text>
          <Text style={styles.info}>꼭 버려 주세요~!!!</Text>
        </View>        
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
  imagecontainer:{
    flex:1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  image:
  {
    width: 400,
    height: 400,
    margin: 20,
  },
  info:{
    fontSize: 20,
  }
});