/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,TextInput} from 'react-native';



export default class HomeScreen extends React.Component {

  static navigationOptions = {
    title: 'Home',
  };
    render() {    
      const { navigate } = this.props.navigation;
      return (
        <View style ={styles.container}>
      
        <Text>HomeScreen</Text>

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
  },
  button:{
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    borderRadius: 20,
    borderWidth:2,
    margin:5,
    borderColor:"#DDD",
    textAlign:"center",
    alignSelf:"stretch"
    
  }
  
 
});
