import React from 'react';
import { View, Text, Button, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default class UploadImage extends React.Component {
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

  render() {
    return (
      <View style={styles.constainer}>        
        <Image style={styles.img} source={this.props.img} />
        <Text style={styles.text}> #Test Test </Text>
        
        <View style={styles.textinput}>
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
            score={this.state.inputText}
            />
          <TouchableOpacity onPress={this.addTodo.bind(this)}>
            <Text>
              add Todo
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  constainer:{
    flex:1,
    alignItems: 'center' ,     
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