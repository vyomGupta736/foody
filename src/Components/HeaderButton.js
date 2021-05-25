import React from 'react';
import {Text,View,StyleSheet} from 'react-native';
import { scale } from './Exports';

const HeaderButton = ({headerText}) => {
    return <View style={styles.viewStyle}>
           <Text allowFontScaling={false}
             style={{color:'white',fontSize:16,fontFamily:'Gilroy-SemiBold',fontSize:scale(19)}}>{headerText}</Text>
         </View>
};

const styles = StyleSheet.create({
    viewStyle:{
        backgroundColor:'rgb(51,148,24)',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }
});

export default HeaderButton;