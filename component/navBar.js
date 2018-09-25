import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native'
import { withNavigation } from 'react-navigation'

class NavBar extends React.Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.navBarText}>
          trashgram
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: 50,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%"
  },
  navBarText: {
    fontSize: 20,
  }
});

export default withNavigation (NavBar);