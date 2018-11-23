import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  TextInput,
  AsyncStorage,
} from 'react-native';
import Camera from 'react-native-camera';
import { withNavigation} from 'react-navigation';
import { Header} from 'react-native-elements';

class CameraRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      token: null,
      path: null,
      img: null,
      hashtag: null,
      tag :null,
    };
  }

  async Postimage(){
    const formdata = new FormData();
    formdata.append('name','avatar');
    formdata.append('photo', {uri:this.state.path , name: 'testphoto', type: 'image/jpg'});
    // return 
    
    let reponse = await fetch('http://117.17.158.93:3000/img', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/form-data',
      },
      body:formdata,
    });

    let responseJson = await reponse.json();
    console.log(responseJson);
    this.setState({
      path : responseJson.path,
      tag : responseJson.tag
    });

    console.log(this.state);
    // return responseJson;
  }

  async Posthashtag(){
    // console.log(this.state);
    const usertoken = await AsyncStorage.getItem('userToken');
    // this.setState({token: userToken});
    if(usertoken){
      console.log(usertoken);
      await fetch('http://117.17.158.93:3000/hashtag', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token : usertoken,
          hashtag : this.state.hashtag,
          tag : this.state.tag,
          path : this.state.path,
        }),
      });
        
    this.props.navigation.navigate('AuthLoading');
    }
  }

  componentWillMount() {
    this.setState({
      inputText: '',
      todos: [],
    })
  }

  addTodo() {
    let todoItem = this.state.inputText
    let todos = this.state.todos
    todos.push(todoItem)
    this.setState({
      inputText: '',
      todos: todos,
    })
  }

  takePicture() {
    this.camera.capture()
      .then((data) => {
        console.log(data);
        this.setState({ path: data.path , img: data });
        this.Postimage(this);
      })
      .catch(err => console.error(err));
  }

  renderCamera() {
    return (
      <Camera
        ref={(cam) => {
          this.camera = cam;
        }}
        style={styles.preview}
        aspect={Camera.constants.Aspect.fill}
        captureTarget={Camera.constants.CaptureTarget.disk}
      >
        <TouchableHighlight
          style={styles.capture}
          onPress={this.takePicture.bind(this)}
          underlayColor="rgba(255, 255, 255, 0.5)"
        >
          <View />
        </TouchableHighlight>
      </Camera>
    );
  }

  renderImage() {
    return (
      <View style={ {flex:1, backgroundColor:'white'} }>        
        <Header
          leftComponent={{ icon: 'save', color: '#000' ,onPress:this.Posthashtag.bind(this)}}
          centerComponent={{ text: 'TrashGram', style: { color: 'black' } }}                    
          rightComponent={{ icon: 'cancel', color: '#000', onPress:() => this.setState({ path: null}) }}
          backgroundColor="#FFFFFF"            
        />
        <Image
          source={{ uri: this.state.path }}
          style={styles.uploadpreview}
        />
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({hashtag:text})}
          value={this.state.text}
        />
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.path ? this.renderImage() : this.renderCamera()}
      </View>
    );
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },
  uploadpreview:{
    // flex: 1,
    marginTop:50,
    justifyContent: 'flex-end',
    alignItems: 'center',
    // height: Dimensions.get('window').height/2,
    height:300,
    width: Dimensions.get('window').width
  },
  capture: {
    width: 70,
    height: 70,
    borderRadius: 35,
    borderWidth: 5,
    borderColor: '#FFF',
    marginBottom: 15,
  },
  cancel: {
    position: 'absolute',
    right: 20,
    top: 20,
    backgroundColor: 'transparent',
    // color: '',
    fontWeight: '600',
    fontSize: 17,
  },
  img:{
    height: 300,
    width: 300,
    backgroundColor:'red',
    marginTop:30,
  },
  text:{
    color: 'black',
    position: 'absolute',
    right: 200, 
    bottom: 500,
    fontSize: 20,
  },
  addText:{
    fontSize: 20, 
  },
  textinput:{
    color: 'black',
    position: 'absolute',
    right: 200, 
    bottom: 400,
    fontSize: 20,
  },
  upload:{
    height: 50,
    backgroundColor: 'white',
    width:'100%',
    position: 'absolute',
    bottom: 0
  },
  uploadtext:{
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default withNavigation (CameraRoute);