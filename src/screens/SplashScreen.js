import React,{Component} from 'react'
import {View,StyleSheet,ImageBackground,Text,Image,StatusBar,AsyncStorage} from 'react-native'



export default class SplashScreen extends Component
{
    constructor()
    {
        super()

        this.state={
            email:''
        }
    }
    static navigationOptions = {
    
        header: null
      };

//     getData = async () =>
//     {
//    try{
//        let useremail = await AsyncStorage.getItem('email') 
    

//        if(useremail!='')
//        {
//            const navigation = this.props.navigation
//            this.props.navigation.replace('Home')

//        }
//    }
//    catch(error )
//    {
//        alert(error)
//    }
//    }

   
    componentWillMount()
    {
    setTimeout(async () =>
    {
   try{
      let useremail = await AsyncStorage.getItem('email');

        if(!useremail == ' ')
       {
           
           this.props.navigation.replace('Home')
       }
       else{
        this.props.navigation.replace('Login')

       }
   }
    
   catch(error )
   {
       alert(error)
       this.props.navigation.replace('Login')
   }},3000)
    }

     render()
     {
         return(

   <ImageBackground style={styles.container}
        resizeMode='cover'
        source={require('../../assets/images/splash.png')}>
        <StatusBar backgroundColor="rgba(160, 202, 209,0.5)" barStyle="default" hidden={true} />
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/images/logo.png')} style={styles.logoImage} />
          <Text>PSP SUP</Text>
        </View>
      </ImageBackground>

         )
     }


}

const styles = StyleSheet.create(
  
    {
        container: {
            backgroundColor: 'grey',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          },
          logoImage: {
            height: 200,
            width: 200,
            //  borderRadius: 75
          },
          logoContainer: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }
    }
)