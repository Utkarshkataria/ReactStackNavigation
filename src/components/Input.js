import React from 'react'
import {View,StyleSheet,TextInput} from 'react-native'



const inputfield = (props) =>{

    return(

        <View style = {styles.container} >

         <TextInput 
         style={styles.inputStyle}
         onChangeText={
           props.onChangeText
        }>
         </TextInput>

        </View>
    )
}

const styles = StyleSheet.create(

    {
        container:
        {
         flexDirection: 'column'
        },
        inputStyle:
        {
        alignItems: 'stretch',
        borderWidth:2,
        borderRadius: 10,
        padding: 10,
        marginLeft:10,
        marginRight:10,
        backgroundColor: "white",
        borderColor:"blue",
        marginBottom: 30,
        marginTop:30,
        
         }
    }
)

export default inputfield

