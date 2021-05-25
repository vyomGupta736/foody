import React from 'react';
import {View,Text,TouchableOpacity,Image,TextInput, ActivityIndicator,StyleSheet} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {scale} from '../Components/Exports';
import styles from '../Components/Styles';
import {connect} from 'react-redux';
import { phoneLogin, phoneClear } from '../Actions/phoneActions';

class PhoneEntry extends React.Component
{
    state = {
        valid : false,
        phone : '',
        error : false
    }
    componentDidMount()
    {
        console.log("from phone entry component did mount ");
        SplashScreen.hide();
        this.props.navigation.addListener('focus', () => {
            console.log("from focusing listener focused of phoneEntry");
            this.setState({phone : ''}, () => this.props.phoneClear())
        }); 
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.loginEntryFail)
        {
           this.setState({error : true})
        }
        else if(nextProps.phone_info && nextProps.autoVerified && !nextProps.viaCodeDispatch)
        {
            this.props.navigation.navigate('UserInfo');
        }
        else if(nextProps.manualLogin && !nextProps.autoVerified && nextProps.viaCodeDispatch)
        {
            this.props.navigation.navigate('PhoneCode');
        }
        else if(nextProps.phone_info && nextProps.afterVerified)
        {
            this.props.navigation.navigate('UserInfo');
        }
    }

    Validate = () => {
        var regexp = /^\d{10}$/;
        // console.log(regexp.test(this.state.phone));
        if(regexp.test(this.state.phone))
        {
            this.setState({valid : true});
        }
        else
        {
            this.setState({valid : false});
        }
    }

    handleNumberVerification = (value) => {
       this.setState({phone : value}, this.Validate);
    }

    handleNumber = () => {
        //call action creator from this.props and pass this validated phone number
        this.props.phoneLogin(this.state.phone);
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'rgb(255,255,255)',position:'relative'}}>
                {this.props.loading?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                    <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                    <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(15),borderBottomRightRadius:scale(15)}}>
                        <ActivityIndicator size="large" />
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Please hold on</Text>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>We are authenticating you</Text>
                    </View>
                </View>:null}
           <View style={{flex:3}}>
               <View style={{flex:1.5}}></View>
               <View style={{flex:1,flexDirection:'row'}}>
                  <View style={{flex:1}}></View>
                  <TouchableOpacity onPress = {() => this.props.navigation.navigate('Login')}
                    style={{flex:1.3}}>
                      <Image source={require('../StaticImages/arrow.png')} resizeMode="contain" style={styles.istyles} />
                  </TouchableOpacity>
                  <View style={{flex:14}}></View>
               </View>
               <View style={{flex:.5}}></View>
           </View>
           <View style={{flex:1,flexDirection:'row'}}>
               <View style={{flex:1}}></View>
               <View style={{flex:10}}>
                   <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontSize:scale(20),fontFamily:'Gilroy-SemiBold'}}>Enter Phone Number for Phone Verification</Text>
               </View>
               <View style={{flex:2.4}}></View>
           </View>
           <View style={{height:10}}></View>
           <View style={{flex:1,flexDirection:'row'}}>
               <View style={{flex:1}}></View>
               <View style={{flex:10}}>
                   <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-Light'}}>This number will be used to contact you for delivery and authentication purposes</Text>
               </View>
               <View style={{flex:2}}></View>
           </View>
           <View style={{flex:2,flexDirection:'row'}}>
               <View style={{flex:1}}></View>
               <View style={{flex:15,}}>
                   <View style={{flex:1}}></View>
                   <View style={{flex:5,flexDirection:'row',borderBottomWidth:3,borderBottomColor:'rgb(14,14,86)'}}>
                       <View style={{flex:1.5}}>
                           <View style={{flex:1}}></View>
                           <View style={{flex:1.4,flexDirection:'row'}}>
                               <View style={{flex:1}}>
                                   <Image source={require('../StaticImages/flag.png')} resizeMode="cover" style={styles.istyles} />
                               </View>
                               <View style={{flex:1,justifyContent:'flex-end',alignItems:'center'}}>
                                   <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontSize:scale(19),fontFamily:'Gilroy-SemiBold'}} >+91</Text>
                               </View>
                           </View>
                           <View style={{flex:1}}></View>
                       </View>
                       <View style={{flex:4}}>
                           <TextInput 
                            allowFontScaling={false}
                            value = {this.state.phone}
                            onChangeText={value => this.handleNumberVerification(value)}
                           style={{flex:1,letterSpacing:2,fontSize:scale(19),fontFamily:'Gilroy-SemiBold',}} keyboardType="phone-pad" maxLength={10} autoFocus={true} />
                       </View>
                   </View>
                   <View style={{flex:3,justifyContent:'center',alignItems:'center'}}>
                       {this.state.error?<Text style={{color:'red',fontFamily:'Gilroy-SemiBold',fontSize:scale(12)}}>There is some network error, Please try after sometime </Text>:null}
                   </View>
               </View>
               <View style={{flex:1}}></View>
           </View>
           <View style={{flex:4}}>
               <View style={{flex:.4}}></View>
               <View style={{flex:1.3,flexDirection:'row'}}>
                   <View style={{flex:1}}></View>
                   <TouchableOpacity onPress={() => this.handleNumber()}
                     disabled={!this.state.valid && this.state.error}
                     style={this.state.valid?{...nStyles.newStyle}:{...nStyles.newStyle,backgroundColor:'gainsboro'}}>
                         <Text allowFontScaling={false} style={{color:'white',fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}} allowFontScaling={false}>Next</Text>
                   </TouchableOpacity>
                   <View style={{flex:1}}></View>
               </View>
               <View style={{flex:4}}></View>
           </View>
           <View style={{flex:1}}></View>
    </View>
        )
    }
}

const nStyles = StyleSheet.create({
    newStyle : {
        flex:15,
        backgroundColor : 'rgb(51,148,24)',
        borderRadius:scale(5),
        overflow:'hidden',
        justifyContent: 'center',
        alignItems : 'center'
    }
});

const mapStateToProps = (state) => {
    console.log("from phone entry map state ");
    console.log(state.phoneReducer.phone_info);
    return {
        loading : state.phoneReducer.loading,
        autoVerified : state.phoneReducer.autoVerified,
        manualLogin : state.phoneReducer.manualLogin,
        phone_info : state.phoneReducer.phone_info,
        viaCodeDispatch : state.phoneReducer.viaCodeDispatch,
        afterVerified : state.phoneReducer.afterVerified,
        loginEntryFail : state.phoneReducer.loginEntryFail,
        locationInfo : state.locationReducer.locationInfo
    }
}

export default connect(mapStateToProps,{phoneLogin,phoneClear})(PhoneEntry);