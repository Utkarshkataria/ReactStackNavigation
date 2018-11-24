import React, {Component} from 'react'
import {StyleSheet, Text, View,TouchableHighlight,TextInput,Alert,ScrollView,AsyncStorage} from 'react-native'
import { LoginButton } from 'react-native-fbsdk';

export default class Login extends Component
{
  
  static navigationOptions = {
    title: 'Welcome',
    
  };

    constructor(props){
        super(props);
        this.state= {email:""}
        this.state= {password:""}

    }


    

     onpress = ()=>{

        const email = this.state.email;
          
        AsyncStorage.setItem('email',email) 
         const { navigate } = this.props.navigation;
         Alert.alert(email)
         this.props.navigation.replace('Home')


        // if(this.state.email === "" && this.state.password === "") {
        //     Alert.alert("Blank Entry's")
        // }
        //  else if(this.state.email === "admin" && this.state.password === "password")
        //  {
           
        //     const email = this.state.email;
          
        //     AsyncStorage.setItem('email',email) 
        //      const { navigate } = this.props.navigation;
        //      Alert.alert(email)
        //     // this.props.navigation.navigate('Home')
        //  }
        //  else {
        //      Alert.alert("incorrect!Re-check")
        //  }

}

displayData = async () =>
     {
    try{
        let useremail = await AsyncStorage.getItem('email') 
        Alert.alert(useremail)
    }
    catch(error )
    {
        alert(error)
    }
    }

//     getData = async () =>
//     {
//    try{
//        let useremail = await AsyncStorage.getItem('email') 
      
//        if(useremail!='')
//        {
//            const navigation = this.props.navigation
//            this.props.navigation.navigate('Home')

//        }
//    }
//    catch(error )
//    {
//        alert(error)
//    }
   

    // onpress = ()=>{
    //
    //     LoginManager.logInWithReadPermissions(['public_profile']).then(
    //         function(result) {
    //             if (result.isCancelled) {
    //                 alert('Login was cancelled');
    //             } else {
    //                 alert('Login was successful with permissions: '
    //                     + result.grantedPermissions.toString());
    //             }
    //         },
    //         function(error) {
    //             alert('Login failed with error: ' + error);
    //         }
    //     );
    // }



    render() {    
      const { navigate } = this.props.navigation;



      return (

         <View style = {styles.container}>
         <ScrollView>

             <View style ={styles.up}>

                 <Text style={[{fontSize:32,color:"blue",fontWeight: "bold",marginBottom: 90,textAlign:"center"}]}>
                     Login here!!
                 </Text>

                 <TextInput
                 placeholder = "Enter Username"
                 placeholderTextColor
                     = "#000"
                 style ={styles.input}
                 onChangeText={
                     (newtext)=>
                         this.setState({email: newtext})
                 }
                 value={this.state.email}
                 >
                 </TextInput>



                 <TextInput
                     placeholder = "Enter password"
                     placeholderTextColor
                         = "#000"
                     style ={styles.input}
                     onChangeText={
                         (newtext)=>
                             this.setState({password: newtext})
                     }
                     value={this.state.password} >
                 </TextInput>

                 

                 {/*<TouchableHighlight*/}
                     {/*underlayColor="blue"*/}
                     {/*style ={styles.button}*/}
                     {/*onPress = {() =>this.props.navigation.navigate('Home')}*/}
                 {/*>*/}

                     {/*<Text style = {styles.text}> Login </Text>*/}
                 {/*</TouchableHighlight>*/}


                 <TouchableHighlight
                     underlayColor="blue"
                     style ={styles.button}
                     onPress = {this.onpress}>

                     <Text style = {styles.text}> Login </Text>
                 </TouchableHighlight>

                 <TouchableHighlight
                     underlayColor="blue"
                     style ={styles.button}
                     onPress = {this.displayData}>

                     <Text style = {styles.text}> Show </Text>
                 </TouchableHighlight>

               
         <View style={{alignItems:'center',justifyContent:'center',marginBottom:20,marginTop:20}}>
                 <LoginButton
                     
                     readPermissions={['public_profile']}
                     onLoginFinished={
                         (error, result) => {
                             if (error) {
                                 alert("Login failed with error: " + error.message);
                             } else if (result.isCancelled) {
                                 alert("Login was cancelled");
                             } else {
                                 alert("Login was successful with permissions: " + result.grantedPermissions)
                             }
                         }
                     }
                     onLogoutFinished={() => alert("User logged out")}/>

                     </View>


                 <Text style={[{color:"blue",marginTop: 60,fontSize:20,textAlign: "center"}]}>
                     Forgot password?
                 </Text>


             </View>

</ScrollView>

         </View>
      );
    }

  }



const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor:"aquamarine",
  },

    up:{

      flex:1,
        justifyContent: "center",
    },

loginlabel:{
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    alignSelf:"stretch"
},
  button:{
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 10,
    borderWidth:2,
    margin:5,
    marginLeft:10,
    marginRight:10,
    borderColor:"black",
  },
    login:{
         fontSize:36,
         color: 'black',
         marginTop: 50

    },
    input:{
        borderWidth:2,
        borderRadius: 10,
        padding: 10,
        marginLeft:10,
        marginRight:10,
        backgroundColor: "white",
        borderColor:"blue",
        marginBottom: 30

    },
    text:{
      fontSize: 22,
        fontWeight: "bold",
        color: "white"
    }
});


