import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableHighlight,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Camera from 'react-native-camera';
import { withNavigation } from 'react-navigation'


class CameraRoute extends Component {
  constructor(props) {
    super(props);

    this.state = {
      path: null,
    };
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
        this.setState({ path: data.path });
        // this.props.navigation.navigate('Upload', {img:data.path});
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
      <View>
        <Image
          source={{ uri: this.state.path }}
          style={styles.preview}
        />
        <Text
          style={styles.cancel}
          onPress={() => this.setState({ path: null })}
        >Cancel
        </Text>


        <Text style={styles.text}> #Test Test </Text>
        
        {/* <View style={styles.textinput}>
          {
            this.state.todos.map((todoItem, index)=> {
              return (
                <Text style={styles.addText} key={index}>
                  {todoItem}
                </Text>
              )
            })
          }
          <TextInput
            style={{height: 40,borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => {
              this.setState({inputText: text})
            }}
            value={this.state.inputText}
            />
          <TouchableOpacity onPress={this.addTodo.bind(this)}>
            <Text>
              add Todo
            </Text>
          </TouchableOpacity>
        </View> */}

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
    // justifyContent: 'center',
    backgroundColor: '#000',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    height: Dimensions.get('window').height,
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
    color: '#FFF',
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
  }
});

export default withNavigation (CameraRoute);