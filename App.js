
import React, {Component} from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import Home from './src/Home'
import Profile from './src/Profile'
import Login from './src/Login'

const AppNavigator = createStackNavigator({
  Login: {screen:Login},
  Home: { screen:Home },
  Profile: { screen:Profile }

});

export default class App extends Component {


  render() {
    return (
      
         <AppNavigator />
  
    );
  }
}


