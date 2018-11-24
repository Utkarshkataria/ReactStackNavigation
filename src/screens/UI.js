import React, {Component} from 'react';
import {View,StyleSheet,TouchableHighlight,Text,AsyncStorage,Alert,TextInput,ActivityIndicator} from 'react-native' 
import Custombutton from '../components/Custombutton'
import Input from '../components/Input'



export default class UI extends Component
{

   constructor()
   {
       super()
       this.state =
        {
            data :'asasas',
            isLoading:false,
            dataSource:
            []
        }
     
   }

   componentDidMount()
   {
 
    return fetch('http://facebook.github.io/react-native/movies.json')
    .then((response) => response.json() )
    .then((responseJson) => 
    {

        this.setState({
           
            isLoading: false,
            dataSource: responseJson.movies,
            
        })

    })

    .catch((error) =>
    {
     console.log(error)
    });

   }


    render(){


     if(this.state.isLoading)
     {
         return(

            <View style = {styles.container}>
              
              <ActivityIndicator />
            
             </View>
         )
     }
else{


    let movies = this.state.dataSource.map((val,key) =>
    {
           return <View key={key} style = {styles.item} >
                 <Text>{val.title}</Text>
           </View>
    });
        return(

            <View style = {styles.container}> 
     
            <Custombutton />


            <Input  
               onChangeText={
                (newtext)=>
                    this.setState({data: newtext})} />

        

            <TouchableHighlight
            
            style={styles.button}
            onPress={this.saveData}
            >
                <Text style={{textAlign:'center'}}> Click </Text>
            </TouchableHighlight>



            <TouchableHighlight
            
            style={styles.button}
            onPress={this.displayData}
            >


                <Text style={{textAlign:'center'}} > display </Text>
            </TouchableHighlight>
         
                 {movies}
          
            </View>
        )
               }
    }

    saveData(){
        let input = 'asnba';
        AsyncStorage.setItem('input',input) 
    }
 
    displayData = async () =>
     {
    try{
        let user = await AsyncStorage.getItem('input') 
      Alert.alert(user)
    }
    catch(error )
    {
        alert(error)
    }
    }
} 

const styles = StyleSheet.create(
    {
        container:
        {
            flex:1,
                

        },
       
         button:
         {
           marginTop:30,
           alignItems: 'stretch',
           borderWidth: 2,
           borderColor: 'gray',
         },
         item:
         {
             fontSize:18,
             textAlign:'center',
             justifyContent:'center',
             alignItems:'center',
             marginTop:10
         }
    }
)