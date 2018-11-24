import React,{Component} from 'react'
import {View,StyleSheet,DatePickerIOS} from 'react-native'
import {Card,ListItem,Divider,FormLabel, FormInput, FormValidationMessage,Header,Icon,SearchBar} from 'react-native-elements'

export default class Datepicker extends Component{


    constructor(props) {
        super(props);

        this.state = {
            choosendate: new Date()
        }
        this.setDate = this.setDate.bind(this)
    }

    setDate(newDate){
        this.setSate({
            choosendate: newDate
        })
    }



    render(){
        const users = [
            {
                name: 'brynn',
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
            },
        ]
        return(
            <View
            style = {styles.container}
            >
                <Header
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
                    rightComponent={{ icon: 'home', color: '#fff' }}
                />

                <DatePickerIOS
                    date = {this.state.choosendate}
                    onDateChange={this.setDate}
                > </DatePickerIOS>


                <Card containerStyle={{padding: 0}} >
                    {
                        users.map((u, i) => {
                            return (
                                <ListItem
                                    key={i}
                                    roundAvatar
                                    title={u.name}
                                    avatar={{uri:u.avatar}}
                                />
                            );
                        })
                    }
                </Card>

                <Divider style={{ backgroundColor: 'blue' }} />

                <FormLabel>Name</FormLabel>
                <FormValidationMessage>Error message</FormValidationMessage>

                <Icon
                    name='rowing' />

                <Icon
                    name='g-translate'
                    color='#00aced' />

                <SearchBar

                    placeholder='Type Here...' />


            </View>

        )
    }
}

const styles = StyleSheet.create(
    {
        container:{
            flex:1,

        }

    }
)