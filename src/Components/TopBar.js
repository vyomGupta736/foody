import React from 'react';
import {View,Text} from 'react-native';
import { scale, verticalScale } from './Exports';

export default TopBar = ({title,focused,width}) => {
    const commonStyles = {
        width : width,
        justifyContent : 'flex-end',
        alignItems: 'center',
        height:'100%'
    }
    const textStyles = {
        fontFamily : 'Gilroy-SemiBold',
        marginBottom : verticalScale(10)
    }
    return (
        <View style={focused?{...commonStyles,borderBottomColor:'rgb(51,148,24)',borderBottomWidth:3}:{...commonStyles}}>
            <Text allowFontScaling={false}
             style={focused?{...textStyles,color:'rgb(51,148,24)',fontSize:scale(16)}:{...textStyles,color:'gray',fontSize:scale(15)}} >{title}</Text>
        </View>
    )
}