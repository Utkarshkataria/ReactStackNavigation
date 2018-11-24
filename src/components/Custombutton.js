import {View,StyleSheet,Text} from 'react-native'
import React, {Component} from 'react';


const custbtn= () => {
    return(

    <View style={styles.container}>
    
    <Text>
        button text
    </Text>

      <Text>
        button yayya
    </Text>
    
    <Text>
        button yaya
    </Text>
    </View>
    )

}


const styles = StyleSheet.create(

    {
        container:{
        
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'

        }


    }
)



export default custbtn;