import React from 'react';
import {View,Text,Image, TouchableOpacity} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { ScrollView } from 'react-native-gesture-handler';
import { verticalScale, scale } from '../Components/Exports';
import { connect } from 'react-redux';

class ParticularUser extends React.Component
{
    componentDidMount()
    {
        SplashScreen.hide();
    }
    render()
    {
        return (
            <ScrollView style={{flex:1}} >
                <View style={{height:verticalScale(300)}}>
                    <Image source={require('../StaticImages/accountTop.jpg')} style={{width:'100%',height:'100%'}} />      
                </View>
                <View style={{width:scale(100),height:scale(100),alignSelf:'center',marginTop:-scale(50)}}>
                    <TouchableOpacity style={{width:scale(80),height:scale(20),backgroundColor:'white',opacity:0.7,alignSelf:'center'}}>
                        <Text allowFontScaling={false} style={{alignSelf:'center',fontFamily:'Gilroy-SemiBold'}}>choose</Text>
                    </TouchableOpacity>
                    <View style={{width:scale(80),height:scale(80),backgroundColor:'teal',borderRadius:scale(100),alignSelf:'center',borderWidth:3,borderColor:'white'}}></View>
                </View>
                <View style={{height:verticalScale(100),borderBottomWidth:2,borderColor:'rgb(230,230,230)'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:3,flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:15}}>
                            <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                            <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(18),color:'black',fontWeight:'bold'}}>{this.props.userName}</Text>
                            <TouchableOpacity>
                                <Text allowFontScaling={false}
                                style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(16),color:'orange'}}>Edit </Text>
                            </TouchableOpacity>
                            </View>
                            <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                             <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(100,100,100)',fontSize:scale(14)}}>{this.props.phoneNumber}</Text>
                            </View>
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:1}}></View>
               </View>

                <View style={{height:verticalScale(20)}}></View>
                <View style={{height:verticalScale(50),flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity activeOpacity={0.6} style={{flex:15,backgroundColor : 'orange',borderRadius:scale(10),justifyContent:'center',alignItems:'center'}}>
                        <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-SemiBold',fontSize:scale(18)}}>Submit</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}></View>
                </View>

            </ScrollView>
        )
    }
}

const mapStateToProps = state => {
    let phoneNumber = '';
    if(state.phoneReducer.phone_info.user == undefined)
    {
        phoneNumber = state.phoneReducer.phone_info.phoneNumber
    }
    else
    {
        phoneNumber = state.phoneReducer.phone_info.user.phoneNumber
    }
    return {
        userName : state.phoneReducer.userName,
        phoneNumber : phoneNumber
    }
}

export default connect(mapStateToProps,null)(ParticularUser);
