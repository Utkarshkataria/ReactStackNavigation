/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, Text, View,TouchableHighlight,TextInput,ActivityIndicator,AsyncStorage} from 'react-native';



export default class HomeScreen extends Component {


     userLogout = async () => {
        try 
        {
          await AsyncStorage.removeItem('email').then(()=>{
            this.props.navigation.replace('Login')
            Alert.alert('Logout Success!');
          });
        } catch (error) {
          console.log('AsyncStorage error: ' + error.message);
        }
      }

  static navigationOptions = {
    title: 'Home',
  };


    render() {    
      const { navigate } = this.props.navigation;
      return (
        <View style ={styles.container}>
            <TouchableHighlight
            style = {
              styles.button
            }

            onPress= {() =>this.props.navigation.navigate("progressbar")}
            >

                <Text>Progressbar</Text>
            </TouchableHighlight>



            <TouchableHighlight
                style = {
                    styles.button
                }

                onPress= {() =>this.props.navigation.navigate("Datepicker")}
            >

                <Text>DatePicker</Text>
            </TouchableHighlight>



            <TouchableHighlight
                style = {
                    styles.button
                }

                onPress= {() =>this.props.navigation.navigate("ListActivity")}
            >

                <Text>List</Text>
            </TouchableHighlight>




            <TouchableHighlight
                style = {
                    styles.button
                }

                onPress= {() =>this.props.navigation.navigate("SocialIcon")}
            >

                <Text>SocialIcons</Text>
            </TouchableHighlight>

   
            <TouchableHighlight
                style = {
                    styles.button
                }

                onPress= {this.userLogout}
            >

                <Text>Logout</Text>
            </TouchableHighlight>


        </View>


      );
    }
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
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
    alignSelf:"stretch"
    
  },
    cont:{

    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    }
  
 
});
