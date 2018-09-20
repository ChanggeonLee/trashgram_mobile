import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class TapButtonGroup extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonGroup}>
          <Button 
            title="Home" 
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button 
            title="City" 
            onPress={() => this.props.navigation.navigate('City')}
          />
          <Button 
            title="Upload" 
            onPress={() => this.props.navigation.navigate('Upload')}
          />
          <Button 
            title="Mypage" 
            onPress={() => this.props.navigation.navigate('Mypage')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 50,
    backgroundColor: 'white',
    width:'100%',
    position: 'absolute',
    bottom: 0
  },
  buttonGroup: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default withNavigation (TapButtonGroup);