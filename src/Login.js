import React, {Component} from 'react'
import {StyleSheet, Text, View,TouchableHighlight,TextInput} from 'react-native'

export default class Login extends Component
{
  
  static navigationOptions = {
    title: 'Welcome',
  };
    render() {    
      const { navigate } = this.props.navigation;
      return (
        <View style ={styles.container}>
        
        <TouchableHighlight 
        style={styles.button}
        underlayColor='blue'
        onPress={()=> {this.props.navigation.navigate('Home')}}>
      <Text> HomeScreen </Text>
      </TouchableHighlight>

      <TouchableHighlight 
        style={styles.button}
        underlayColor='blue'
        onPress={()=>{this.props.navigation.navigate('Profile')}}>
      <Text> ProfileScreen </Text>
      </TouchableHighlight>

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


