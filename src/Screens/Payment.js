import React from 'react';
import {View,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';

export default class Payment extends React.Component
{
    componentDidMount()
    {
        SplashScreen.hide();
    }
    render()
    {
        return (
            <View>
                <Text> Payment Screen</Text>
                <Text> Payment Screen</Text>
                <Text> Payment Screen</Text>
                <Text> Payment Screen</Text>
                <Text> Payment Screen</Text>
            </View>
        )
    }
}