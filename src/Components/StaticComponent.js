import React from 'react';
import {View,Text} from 'react-native';
import { verticalScale } from './Exports';
import LoadingHome from './LoadingHome';

const StaticComponent = () => {
    return (
        <View>
             <View style={{height:verticalScale(100)}}>
                <LoadingHome />
             </View>
             <View style={{height:verticalScale(100)}}>
                <LoadingHome />
             </View>
             <View style={{height:verticalScale(100)}}>
                <LoadingHome />
             </View>
             <View style={{height:verticalScale(100)}}>
                <LoadingHome />
             </View>
       </View>
    )
}

export default StaticComponent;