import React from 'react';
import {View,TextInput,Image,TouchableOpacity} from 'react-native';
import {scale} from './Exports';

const SearchBar = ({title}) => {
    return <View style={{flex:1}}>
            <View style={{flex:1}}></View>
            <View style={{flex:7,flexDirection:'row'}}>
                <View style={{flex:1}}></View>
                <View style={{flex:22,borderRadius:scale(8),flexDirection:'row',borderWidth:1,borderColor:'rgb(180,180,180)'}}>
                    <View style={{flex:1.3}}>
                        <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                           <Image source={require('../StaticImages/magnify.png')} resizeMode="contain" style={{width:'80%',height:'80%'}} />
                        </TouchableOpacity>
                    </View>
                    <View style={{flex:.1}}></View>
                    <View style={{flex:7}}>
                        <TextInput
                            allowFontScaling={false} style={{width:'100%',height:'100%',fontFamily:'Gilroy-SemiBold',fontSize:scale(15)}} 
                            placeholder={title}
                            />
                    </View>
                </View>
                <View style={{flex:1}}></View>
            </View>
            <View style={{flex:1}}></View>
       </View>
};

export default SearchBar;