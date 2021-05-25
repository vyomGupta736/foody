import React from 'react';
import {View,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Help extends React.Component
{
    componentDidMount()
    {
        SplashScreen.hide();
    }
    render()
    {
        return (
            <View>
                <Text> Help Screen</Text>
                <Text> Help Screen</Text>
                <Text> Help Screen</Text>
                <Text> Help Screen</Text>
                <Text> Help Screen</Text>
            </View>
        )
    }
}