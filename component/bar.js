import React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  Button,
  Alert,
  Text,
} from 'react-native';
 
import ProgressBarAnimated from 'react-native-progress-bar-animated';
 
export default class App extends React.Component {
 
  render() {
    
    const barWidth = Dimensions.get('screen').width - 100;
 
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{this.props.label}</Text>
          <ProgressBarAnimated
            width={barWidth}
            value={Math.floor(this.props.score / this.props.max * 100)}
            backgroundColorOnComplete="#6CC644"
          />
        </View>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    marginTop: 5,
    marginBottom: 5,
    padding: (5, 15, 5, 15),
  },
  buttonContainer: {
    marginTop: 15,
  },
  separator: {
    marginVertical: 30,
    borderWidth: 0.5,
    borderColor: '#DCDCDC',
  },
  label: {
    color: '#999',
    fontSize: 14,
    marginBottom: 10,
  },
});