import React,{Component} from 'react'
import {View,StyleSheet,Alert} from 'react-native'
import {SocialIcon} from 'react-native-elements'

export default class Socialicon extends Component{

    render()
    {
        return(
            <View style ={styles.container}>

                <SocialIcon
                    type='twitter'
                    underlayColor={'blue'}
                    onPress={() => Alert.alert("Twitter")}
                />

                <SocialIcon
                    raised={false}
                    type='gitlab'
                />

                <SocialIcon
                    light
                    type='medium'
                />

                <SocialIcon
                    light
                    raised={false}
                    type='medium'
                />


                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />

                <SocialIcon
                    title='Some Twitter Message'
                    button
                    type='twitter'
                />

                <SocialIcon
                    button
                    type='medium'
                />

                <SocialIcon
                    button
                    light
                    type='instagram'
                />


            </View>
        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex: 1
        }
    }
)