import React, {Component} from 'react'
import {View,ActivityIndicator,StyleSheet} from 'react-native'
import {Avatar,Badge,Text,Button} from 'react-native-elements'


export default class progressbar extends Component
{

    static navigationOptions={
      title:'Progressbar'
    };
    render()
    {
        return(

        <View style ={styles.container}>
            <ActivityIndicator size={"large"} color={"blue"}/>

            <Avatar
                large
                rounded
                source={{uri: "https://s3.amazonaws.com/uifaces/faces/twitter/kfriedson/128.jpg"}}
                onPress={() => console.log("Works!")}
                activeOpacity={0.7}
            />

            <Badge
                value={3}
                textStyle={{ color: 'orange' }}
            />

            <Badge containerStyle={{ backgroundColor: 'violet'}}>
                <Text>User 1</Text>
            </Badge>

            <Button
                large
                rightIcon={{name: 'code'}}
                title='LARGE WITH RIGHT ICON' />

        </View>

        );
    }
}
const styles = StyleSheet.create(
    {
        container:{
            flex:1,
            justifyContent: 'center',
            alignItems: 'center'
        }

    }
);