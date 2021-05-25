import React from 'react';
import {View,Text,Button,TouchableOpacity,Image, ActivityIndicator} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import SkipButton from '../Components/SkipButton';
import styles from '../Components/Styles';
import {scale, verticalScale} from '../Components/Exports';
import { connect } from 'react-redux';
import { facebookLogin, googleLogin} from '../Actions/oAuthActions';

class Login extends React.Component
{
    state = {
        loading : true
    }
    componentDidMount()
    {
        console.log("from login screen component did mount ");
        console.log(this.props.phone_info);
        if((this.props.logged_in || (this.props.phone_info && this.props.userName)) && this.props.locationInfo)
        {
            this.props.navigation.navigate('Main',{screen : 'Home'})
        }
        else if((this.props.logged_in || (this.props.phone_info && this.props.userName)) && !this.props.locationInfo)
        {
            this.props.navigation.navigate('LocationFlow',{ screen : 'AskLocation' });
        }
        else if(!this.props.logged_in && !this.props.phone_info && this.props.locationInfo)
        {
            this.props.navigation.navigate('Main', { screen : 'Home' });
        }else
        {
            SplashScreen.hide();
        }
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.logged_in)
        {
            this.props.navigation.navigate('LocationFlow');
        }
    }

    render()
    { 
        return (
                <View style = {{backgroundColor:'rgb(255,255,255)',flex:1,position:'relative'}}>
                    {this.props.loading?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                        <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}}></View>
                        <View style={{width:'65%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                            <ActivityIndicator size="large" />
                            <Text allowFontScaling={false} style={{color : 'rgb(14,14,86)',fontFamily:'Gilroy-SemiBold',fontSize:scale(13),marginTop:verticalScale(15)}}>Please wait while logging you in....</Text>
                        </View>
                    </View>:null}
                    <View style={{flex:1.3}}>
                        <View style={{flex:2.3}}></View>
                        <View style={{flex:1.4,flexDirection:'row'}}>
                        <View style={{flex:3.3}}></View>
                        <View style={{flex:1}}>
                            <TouchableOpacity onPress={() => {this.props.navigation.navigate('LocationFlow', { screen : 'AskLocation' })}}
                               activeOpacity={.8}>
                                <SkipButton />
                            </TouchableOpacity>
                        </View>
                        <View style={{flex:.4}}></View>
                        </View>
                    </View>
                <View style={{height:verticalScale(5)}}></View>
                <View style={{flex:4.7,position:'relative'}}>
                    <Image source={require('../StaticImages/food3.jpg')} resizeMode="cover" style={styles.istyles} />
                    <View style={styles.astyles}>
                        <View style={{flex:1.2,flexDirection:'row'}}>
                            <View style={{flex:.7}}></View>
                            <View style={{flex:2.7}}>
                                <Image source={require('../StaticImages/LOGO.png')} resizeMode="contain" style={styles.istyles} />
                            </View>
                            <View style={{flex:4}}></View>
                        </View>
                        <View style={{flex:4.5}}></View>
                    </View>
                </View>
                <View style={{height:verticalScale(5)}}></View>
                <View style={{flex:4.4}}>
                    <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:.4}}></View>
                        <View style={{flex:5}}>
                            <Image source={require('../StaticImages/foodText.png')} resizeMode="contain" style={styles.istyles} />
                        </View>
                        <View style={{flex:1.2}}></View>
                    </View>
                    <View style={{flex:1.5}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:1.2,flexDirection:'row'}}>
                            <View style={{flex:1}}></View>
                            <View style={{flex:15,borderRadius:scale(4),overflow:'hidden'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('PhoneEntry') }
                                  activeOpacity={0.8}>
                                    <Image source={require('../StaticImages/continue.jpg')} resizeMode="cover" style={styles.istyles} />
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}}></View>
                        </View>
                    </View>
                    <View style={{flex:1}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:3,flexDirection:'row'}}>
                            <View style={{flex:1}}></View>
                            <TouchableOpacity onPress={() => this.props.googleLogin()}
                             style={{flex:6,borderRadius:scale(4),backgroundColor:'rgb(234,233,235)'}}>
                                <View style={{flex:1}}></View>
                                <View style={{flex:3,flexDirection:'row'}}>
                                    <View style={{flex:1}}></View>
                                    <View style={{flex:6,flexDirection:'row'}}>
                                        <View style={{flex:1.5}}>
                                            <Image source={require('../StaticImages/google.png')} resizeMode="contain" style={styles.istyles} />
                                        </View>
                                        <View style={{flex:4,alignContent:'flex-start',justifyContent:'flex-end'}}>
                                            <Image source={require('../StaticImages/googletext.png')} resizeMode="contain" style={{width:'70%',height:'80%'}} />
                                        </View>
                                    </View>
                                    <View style={{flex:1}}></View>
                                </View>
                                <View style={{flex:1}}></View>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                            <TouchableOpacity onPress = {() => this.props.facebookLogin()}
                              style={{flex:6,borderRadius:scale(4),backgroundColor:'rgb(234,233,235)'}}>
                            <View style={{flex:1}}></View>
                                <View style={{flex:3,flexDirection:'row'}}>
                                    <View style={{flex:1}}></View>
                                    <View style={{flex:6,flexDirection:'row'}}>
                                        <View style={{flex:1.5}}>
                                            <Image source={require('../StaticImages/facebook.png')} resizeMode="contain" style={styles.istyles} />
                                        </View>
                                        <View style={{flex:4,alignItems:'center',justifyContent:'flex-end'}}>
                                        <Image source={require('../StaticImages/facebooktext.png')} resizeMode="contain" style={{width:'85%',height:'90%'}} />
                                        </View>
                                    </View>
                                    <View style={{flex:1}}></View>
                                </View>
                                <View style={{flex:1}}></View>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                        </View>
                    </View>
                    <View style={{height:verticalScale(15)}}></View>
                    <View style={{flex:.9}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{flex:1}}></View>
                            <TouchableOpacity style={{flex:13}}>
                                <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(12),color:'rgb(14,14,86)'}}>By continuing, you agree that you have read & accepted our T&c and privacy policy</Text>
                            </TouchableOpacity>
                            <View style={{flex:1}}></View>
                        </View>
                        <View style={{flex:1}}></View>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged_in : state.oAuthReducer.logged_in,
        loading : state.oAuthReducer.loading,
        phone_info : state.phoneReducer.phone_info,
        locationInfo : state.locationReducer.locationInfo,
        userName : state.phoneReducer.userName
    }
}

export default connect(mapStateToProps, {facebookLogin,googleLogin})(Login);