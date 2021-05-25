import React from 'react';
import {View, Text,TouchableOpacity,Image} from 'react-native';
import SearchBar from './SearchBar';
import styles from './Styles';
import {scale, verticalScale} from './Exports';
import { ScrollView } from 'react-native-gesture-handler';

export const AddressPopUp = ({whiteScreen}) => {
    return (
        <ScrollView style={{flex:1,backgroundColor:'white'}}>
                <View style={{height:verticalScale(20),borderTopRightRadius:scale(20),borderTopLeftRadius:scale(20),flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:2.5}}>
                    <TouchableOpacity  onPress={() => {whiteScreen()}}
                       style={styles.istyles}>
                       <Image source={require('../StaticImages/header.png')} resizeMode="cover" style={styles.istyles} />
                    </TouchableOpacity>
                        
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{height:verticalScale(55)}}>
                    <SearchBar title="Search for any location" scale={(value) => scale(value)} />
                </View>
                <View style={{height:verticalScale(20)}}></View>
                <View style={{height:verticalScale(40)}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:4,flexDirection:'row'}}>
                       <View style={{flex:1}}></View>
                       <View style={{flex:14,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                           <TouchableOpacity>
                             <Text allowFontScaling={false}
                               style={{fontFamily:'Gilroy-SemiBold',color:'rgb(14,14,86)',fontSize:scale(17)}} >Deliver to</Text>
                           </TouchableOpacity>
                          <TouchableOpacity>
                             <Text allowFontScaling={false}
                               style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>Manage</Text>
                          </TouchableOpacity>
                           
                       </View>
                       <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{height:verticalScale(60)}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1.5,flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                       <View style={{flex:14,flexDirection:'row'}}>
                           <View style={{flex:1,}}>
                               <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} >
                                  <Image source={require('../StaticImages/plusOther.png')} resizeMode="contain" style={{width:'100%',height:'80%'}} />
                               </TouchableOpacity>
                           </View>
                           <View style={{flex:1}}></View>
                           <View style={{flex:9}}>
                           <TouchableOpacity>
                           <Text allowFontScaling={false}
                            style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}} >Add Address</Text>
                           </TouchableOpacity>
                           </View>
                           <View style={{flex:1}}></View>
                       </View>
                         <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{height:verticalScale(60)}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:1.5,flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                       <View style={{flex:14,flexDirection:'row'}}>
                           <View style={{flex:1,}}>
                               <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} >
                                  <Image source={require('../StaticImages/gps.png')} resizeMode="contain" style={{width:'100%',height:'80%'}} />
                               </TouchableOpacity>
                           </View>
                           <View style={{flex:1}}></View>
                           <View style={{flex:9,}}>
                           <TouchableOpacity>
                           <Text allowFontScaling={false} 
                             style={{fontFamily:'Gilroy-SemiBold',color:'rgb(0,0,0)',fontSize:scale(16)}} >Current Location</Text>
                           </TouchableOpacity>
                           </View>
                           <View style={{flex:1,}}>
                              <TouchableOpacity style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}} >
                                  <Image source={require('../StaticImages/off.png')} resizeMode="contain" style={styles.istyles} />
                               </TouchableOpacity>
                           </View>
                       </View>
                         <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{height:verticalScale(130),}}></View>
            </ScrollView>
    )
}