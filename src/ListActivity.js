import React,{Component} from 'react'
import {View,StyleSheet} from 'react-native'
import {List,ListItem,FlatList} from 'react-native-elements'

export default class ListActivity extends Component{
    renderRow ({ item }) {
        return (
            <ListItem
                roundAvatar
                title={item.name}
                subtitle={item.subtitle}
                avatar={{uri:item.avatar_url}}
            />
        )
    }
    render()
    {


        const list = [
            {
                name: 'Amy Farha',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
                subtitle: 'Vice President'
            },
            {
                name: 'Chris Jackson',
                avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                subtitle: 'Vice Chairman'
            },
        ]

        return(
            <View style = {styles.container}>

                <List>
                    <FlatList
                        data={list}
                        renderItem={this.renderRow}
                        keyExtractor={item => item.name}
                    />
                </List>

            </View>
        )
    }

}
const styles = StyleSheet.create(
    {
        container:{
            flex:1
        }
    }

)