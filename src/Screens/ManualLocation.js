import React from 'react';
import {View,Text} from 'react-native';

export default class ManualLocation extends React.Component
{
    componentDidMount()
    {
        console.log("from manual screen");
    }
    render()
    {
        return (
            <View>
                <Text> ManualLocation Screen</Text>
                <Text> ManualLocation Screen</Text>
                <Text> ManualLocation Screen</Text>
                <Text> ManualLocation Screen</Text>
                <Text> ManualLocation Screen</Text>
            </View>
        )
    }
}