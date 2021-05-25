import React, {useState} from 'react';
import {View,Text,Image, ImageBackground} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {scale} from './Exports';
import styles from './Styles';

const ShowData = ({HeaderTitle,comments,calories,fats,proteins,sodium,cholestrol,imageSource,cost,showNutrition}) => {
    return(
        <View style={{flex:1}}>
        <View style={{flex:1}}></View>
        <View style={{flex:5,flexDirection:'row'}}>
            <View style={{flex:1}}></View>
            <View style={{flex:14,flexDirection:"row"}}>
                 <View style={{flex:2.9}}>
                    <View style={{flex:1.2,flexDirection:'row'}}>
                        <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}}
                          allowFontScaling={false}>{HeaderTitle}</Text>
                    </View>
                    
                    <View style={{flex:2,justifyContent:'flex-start',borderWidth:0,justifyContent:'center'}}>
                        {!showNutrition?
                        <Animatable.Text allowFontScaling={false}
                        style={{position:'absolute',color:'rgb(113,118,122)',fontFamily:'Gilroy-SemiBold',fontSize:scale(11)}}>{comments}</Animatable.Text>
                         :<Animatable.Text allowFontScaling={false}
                        style={{position:'absolute',color:"rgb(51,148,24)",fontSize:scale(11),fontFamily:'Gilroy-SemiBold'}}>calories:{calories}, proteins:{proteins}, cholestrol:{cholestrol}, sodium:{sodium}, fats:{fats} </Animatable.Text>}
                    </View>
                    <View style={{flex:1}}>
                        <Text allowFontScaling={false}
                         style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Rs : {cost}</Text>
                    </View>
                </View>
                <View style={{flex:0.2}}></View>
                <View style={{flex:1,borderRadius:scale(5),overflow:'hidden',borderWidth:0}}>
                    <ImageBackground
                      source={require('../StaticImages/loadingImage.png')}
                      style={{width:'100%',height:'100%'}}
                     >
                        <Image
                        source={imageSource} resizeMode="cover" style={styles.istyles}/>
                    </ImageBackground>
                </View>
            </View>
            <View style={{flex:1}}></View>
        </View>
        <View style={{flex:1}}></View>
    </View>
    )
}

export default ShowData;