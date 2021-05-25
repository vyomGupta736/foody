import React from 'react';
import {View,Image,Text} from 'react-native';
import {scale} from './Exports';
import styles from './Styles';

const LoadingHome = () => {
   return (
    <View style={{flex:1}}>
    <View style={{flex:1}}></View>
    <View style={{flex:5,flexDirection:'row'}}>
         <View style={{flex:1}}></View>
         <View style={{flex:10,}}>
             <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:.5,backgroundColor:'rgb(205,205,205)',borderRadius:scale(5),overflow:'hidden'}}>
                   <Image source={require('../StaticImages/loadingImage.png')} resizeMode="cover" style={styles.istyles} />
                 </View>
             </View>
             <View style={{flex:1}}></View>
             <View style={{flex:1,backgroundColor:'rgb(216,216,216)',borderRadius:scale(10)}}></View>
             <View style={{flex:.6}}></View>
             <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:.8,backgroundColor:'rgb(216,216,216)',borderRadius:scale(10),overflow:"hidden"}}>
                   <Image source={require('../StaticImages/loadingImage.png')} resizeMode="cover" style={styles.istyles} />
                 </View>
             </View>
             <View style={{flex:1.2}}></View>
             <View style={{flex:1,flexDirection:'row'}}>
                 <View style={{flex:1.2,backgroundColor:'rgb(210,210,210)',borderRadius:scale(10)}}></View>
                 <View style={{flex:.6}}></View>
                 <View style={{flex:2,backgroundColor:'rgb(216,216,216)',borderRadius:scale(10)}}></View>
                 <View style={{flex:2}}></View>
             </View>
         </View>
         <View style={{flex:2}}></View>
         <View style={{flex:4,borderRadius:scale(10),overflow:'hidden',backgroundColor:'rgb(216,216,216)',position:'relative'}}>
             <Image source={require('../StaticImages/loadingImage.png')} resizeMode="cover" style={styles.istyles} />
             <View style={{...styles.astyles}}>
                <View style={{flex:1}}>
                    <View style={{flex:2}} />
                    <View style={{flex:1,justifyContent:'center',alignItems:'center'}} >
                        <Text allowFontScaling={false}
                          style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),alignSelf:'center',color:'rgb(190,190,190)'}} >Foody</Text>
                    </View>
                    <View style={{flex:2}} />
                </View>
             </View>
         </View>
         <View style={{flex:1}}></View>
    </View>
    <View style={{flex:1}}></View>
</View>
   )
}

export default LoadingHome;
