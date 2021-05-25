import React from 'react';
import {View,Text,Image,TouchableOpacity} from 'react-native';
import styles from './Styles';
import { scale } from './Exports';

export default CarouselComponent = ({image}) => {
    return (
        <View style={{flex:1}}>
            <View style={{flex:1}} />
            <View style={{flex:16,borderWidth:0,flexDirection:'row'}}>
                <View style={{flex:1}} />
                <TouchableOpacity activeOpacity={0.9} onPress={() => console.log("pressed")} style={{flex:25,borderWidth:0,borderRadius:scale(8),overflow:'hidden'}}>
                    <Image source={image} resizeMode="cover" style={styles.istyles} />
                </TouchableOpacity>
                <View style={{flex:1}}></View>
            </View>
            <View style={{flex:1}} />
        </View>
    )
}