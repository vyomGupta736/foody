import React from 'react';
import {View,Text,TouchableOpacity,Image,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { verticalScale, scale } from '../Components/Exports';
import styles from '../Components/Styles';
import Tag from '../Components/Tag';
import { logOut } from '../Actions/logoutActions';

class AccountSettings extends React.Component
{
    state = {
        showLogin : true
    }
    componentDidMount()
    {
        // this.props.navigation.addListener('focus', () => {
        //     console.log("from focusing listener focused");
        //     console.log(this.props.phone_info);
        // }); 
        if(this.props.phone_info)
        {
            this.setState({showLogin : false})
        }

    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.phone_info)
        {
            this.setState({showLogin : false});
        }
        else
        {
            console.log("i am here ");
            this.setState({showLogin : true}, () => {
                this.props.navigation.navigate('LoginFlow',{ screen : 'Login' });  
            })
        }
    }
    
    render()
    {
        return (
            <View style={{flex:1}}>
                {this.state.showLogin?
                <View style = {{backgroundColor : 'white',flex:1}}>
                    <View style={{flex:1.5,backgroundColor:'rgb(51,148,24)'}}>
                        <Image source={require('../StaticImages/mainLogo.png')} resizeMode="contain" style={styles.istyles} />
                    </View>
                    <View style={{flex:0.2}}></View>
                    <View style={{flex:1}}>
                        <View style={{height : verticalScale(65)}}>
                            <View style={{flex:1,flexDirection:'row'}}>
                                <View style={{flex:1}} />
                                <TouchableOpacity onPress = {() => {this.props.navigation.navigate('LoginFlow', { screen : 'PhoneEntry' })}}
                                   style={{flex:15,borderRadius:scale(10),overflow:'hidden',backgroundColor:'orange',justifyContent:'center',alignItems:'center'}}>
                                   <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(18),color:'white'}}>Login</Text>
                                </TouchableOpacity>
                                <View style={{flex:1}} />
                            </View>
                        </View>
                        <View style={{flex:1,alignItems:'center'}}>
                             <Text allowFontScaling={false} style={{fontFamily:'Gilroy-Light',color:'rgb(14,14,86)',fontSize:scale(15),marginHorizontal:scale(26),marginVertical:verticalScale(16)}} >Login/signup to Foody to manage your orders quickly</Text>
                        </View>
                    </View>
                </View>
                :<View style={{backgroundColor:'white',flex:1}}>
                 <View style={{flex:4.5,backgroundColor:'green'}}>
                        <Image source={require('../StaticImages/accountTop.jpg')} resizeMode="cover" style={styles.istyles} />
                        <View style={styles.astyles}>
                        <View style={{flex:3,flexDirection:'row'}}>
                            <View style={{flex:.5}}></View>
                            <View style={{flex:3.5,}}>
                                <View style={{flex:2}}></View>
                                <View style={{flex:3}}>
                                    <Image source={require('../StaticImages/person.png')} resizeMode="contain" style={styles.istyles} />
                                </View>
                                <View style={{flex:1}}></View>
                            </View>
                            <View style={{flex:1}}></View>
                            <View style={{flex:4}}>
                            <View style={{flex:3}}></View>
                            <View style={{flex:1,position:'relative',justifyContent:'center'}}>
                                <View style={{flex:1,backgroundColor:'rgb(216,216,216)',opacity:0.6,borderBottomLeftRadius:10,borderTopLeftRadius:10}}></View>
                                <Text allowFontScaling={false}
                                    style={{position:'absolute',fontSize:scale(15),color:'white',left:'18%',letterSpacing:1,fontFamily:'Gilroy-SemiBold'}}>{this.props.userName}</Text>
                            </View>
                            <View style={{flex:2}}></View>
                            </View>
                        </View>
                        <TouchableOpacity onPress = {() => this.props.navigation.navigate('Main',{ screen : 'OrderHistory' })}
                         activeOpacity={0.8}
                        style={{flex:1,backgroundColor:'white',borderTopLeftRadius:20,borderTopRightRadius:20,overflow:'hidden',borderBottomWidth:2,borderColor:'rgb(241,241,241)'}}>
                            <Tag iconImage={require('../StaticImages/order1.png')} textImage="My Orders"  />
                        </TouchableOpacity>
                    </View>
                 </View>
                <View style={{flex:6}}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSettingsFlow', { screen : 'ParticularUser' })}
                     style={newStyles.tagStyles}>
                        <Tag iconImage={require('../StaticImages/setting.png')} textImage="Account Settings" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSettingsFlow', { screen : 'Payment' })}
                     style={newStyles.tagStyles}>
                        <Tag iconImage={require('../StaticImages/card.png')} textImage="Payment Profile" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('AccountSettingsFlow', { screen : 'Help' })}
                     style={newStyles.tagStyles}>
                        <Tag iconImage={require('../StaticImages/help.png')} textImage="Help & Support" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress = {() => this.props.logOut()}
                      style={newStyles.tagStyles}>
                        <Tag iconImage={require('../StaticImages/out.png')} textImage="Log Out" />
                    </TouchableOpacity>
                    <View style={{flex:1.7}}></View>
                </View>
            </View>}
            </View>
        )
    }
}

const newStyles = StyleSheet.create({
    tagStyles:{
        flex:1,
        borderBottomWidth:2,
        borderColor:'rgb(241,241,241)'
    }
})

const mapStateToProps = (state) => {
    console.log("from account settings flow")
    console.log(state.phoneReducer.phone_info);
    console.log(state.phoneReducer.userName);
    console.log(state.phoneReducer.email);
    return {
         phone_info : state.phoneReducer.phone_info,
         userName : state.phoneReducer.userName,
         email : state.phoneReducer.email
    }
}

export default connect(mapStateToProps,{ logOut })(AccountSettings);