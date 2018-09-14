import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class ButtonGroup extends React.Component {
  render() {
    return (
      <View style={styles.buttonGroup}>
        <View style={{flex: 1, flexDirection: 'row'}}>
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
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button 
            title="Mypage" 
            onPress={() => this.props.navigation.navigate('Home')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonGroup: {
    height: 50,
    backgroundColor: 'white',
  },
});

export default withNavigation (ButtonGroup);