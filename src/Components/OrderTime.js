import React from 'react';
import {View,Text,Image,Picker,TouchableOpacity} from 'react-native';
import {scale, verticalScale} from './Exports';

const OrderTime = ({whiteScreen}) => {
    const [today,setToday] = React.useState(true);
    return (
        <View style={{flex:1,backgroundColor:'white'}} >
             <View style={{height:verticalScale(60),borderTopLeftRadius:20,borderTopRightRadius:20}} >
                     <View style={{flex:1.3}}></View>
                     <View style={{flex:3,flexDirection:'row'}}>
                        <View style={{flex:7,flexDirection:'row'}}>
                            <View style={{flex:1}}></View>
                            <TouchableOpacity onPress={() => setToday(!today)}
                             style={{flex:4,borderRadius:scale(10),overflow:'hidden',borderWidth:1,borderColor:'gray',justifyContent:'center',alignItems:'center'}}>
                                <Text allowFontScaling={false}  style={today?style.focusedText:style.blurredText}>Today</Text>
                            </TouchableOpacity>
                            <View style={{flex:.6}}></View>
                            <TouchableOpacity onPress={() => setToday(!today)}
                             style={{flex:4,borderRadius:scale(10),overflow:'hidden',justifyContent:'center',alignItems:'center'}}>
                                <Text allowFontScaling={false} style={!today?style.focusedText:style.blurredText}>Tommorow</Text>
                            </TouchableOpacity>
                            <View style={{flex:0.4}}></View>
                        </View>
                        <View style={{flex:4,flexDirection:'row'}}>
                            <View style={{flex:3}}></View>
                            <View style={{flex:1}}>
                                <TouchableOpacity onPress={whiteScreen}
                                style={{width:'100%',height:'100%'}} >
                                <Image source={require('../StaticImages/arrowDown.png')} resizeMode="contain" style={{width:'100%',height:'100%'}} />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>
                     </View>
                     <View style={{flex:1}}></View>
                </View>
        </View>
    )
};

const style = {
    focusedStyle:{
        width:'100%',
        height:'100%',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'rgb(230,230,230)'
    },BlurredStyle:{
      width:'100%',
      height:'100%',
      alignItems:'center',
      justifyContent:'center',
      backgroundColor:'rgb(241,241,241)'
  },focusedText:{
      color:'rgb(14,14,86)',
      fontFamily:'Gilroy-SemiBold',
      fontSize:scale(17)
  },blurredText:{
      color:'rgb(210,210,210)',
      fontFamily:'Gilroy-SemiBold',
      fontSize:scale(16)
  }
}

export default OrderTime;