import React from 'react';
import {View,Text,Image} from 'react-native';
import {scale} from './Exports';
import styles from './Styles';

const Tag = ({iconImage,textImage}) => {
    return <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:1.4,flexDirection:'row'}}>
                <View style={{flex:.8}}></View>
                <View style={{flex:1}}>
                    <Image source={iconImage} resizeMode="contain" style={styles.istyles} />
                </View>
                <View style={{flex:.6}}></View>
                <View style={{flex:5.5,justifyContent:'center',alignItems:'flex-start'}}>
                    <Text style={{fontSize:scale(15),fontFamily:'Gilroy-SemiBold'}} 
                        allowFontScaling={false} 
                    >{textImage}</Text>
                </View>
                <View style={{flex:4.5}}></View>
            </View>
            <View style={{flex:1,}}></View>
       </View>
};

export default Tag;