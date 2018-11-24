
import React, {Component} from 'react';
import {
  createStackNavigator,
} from 'react-navigation';

import Home from './src/Home'
import Profile from './src/Profile'
import Login from './src/Login'
import progressbar from './src/progressbar'
import Datepicker from './src/Datepicker'
import ListActivity from './src/ListActivity'
import Socialicon from './src/Socialicon'
import FBLoginButton from './src/FBLoginButton'
import Custombutton from './src/components/Custombutton'
import UI from './src/screens/UI'
import SplashScreen from './src/screens/SplashScreen'

const AppNavigator = createStackNavigator({
  SplashScreen:{screen:SplashScreen},
  UI:{screen:UI},
  Custombutton:{screen:Custombutton},
  FBLoginButton: { screen:FBLoginButton},
  Login: {screen:Login},
  Home: { screen:Home },
  Profile: { screen:Profile },
  progressbar: { screen:progressbar },
  Datepicker: { screen:Datepicker },
  ListActivity: { screen:ListActivity },
  SocialIcon: { screen:Socialicon },

},
{
  initialRouteName:'SplashScreen'
});

export default class App extends Component {


  render() {
    return (
      
         <AppNavigator />
  
    );
  }
}


