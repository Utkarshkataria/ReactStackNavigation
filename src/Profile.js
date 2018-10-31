/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,TextInput} from 'react-native';



export default class Profile extends Component {
  
  static navigationOptions = {
    title: 'Profile'
  };

  render() {
    return (
      <View style={[
        styles.container,
      ]}>
          <Text>ProfileScreen</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
 
});
