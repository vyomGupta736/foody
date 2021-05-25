import React from 'react';
import {View,Text,TouchableOpacity, ActivityIndicator} from 'react-native';
import InputField from '../Components/InputField';
import SplashScreen from 'react-native-splash-screen';
import { scale, verticalScale } from '../Components/Exports';
import { userAdditionalInfo, isUserAlreadyPresent } from '../Actions/phoneActions';
import { connect } from 'react-redux';
import styles from '../Components/Styles';

class UserInfo extends React.Component{
    componentDidMount()
    {
        SplashScreen.hide();
        console.log("from component did mount of user info screen ");
        this.props.isUserAlreadyPresent(this.props.phone_info.phoneNumber);
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
        if(nextProps.sent)
        {
           if(nextProps.locationInfo)
           {
               this.props.navigation.navigate('Main', { screen : 'Home' });
           }
           else
           {
               this.props.navigation.navigate('LocationFlow',{ screen : 'AskLocation' });
           }
        }
        else if(nextProps.userName)
        {
            if(nextProps.locationInfo)
           {
               this.props.navigation.navigate('Main', { screen : 'Home' });
           }
           else
           {
               this.props.navigation.navigate('LocationFlow',{ screen : 'AskLocation' });
           }
        }
    }

    state = {
        name : '',
        email : '',
        valid : false
    }

    validateForm = () => {
        if(this.state.name.length>=3 && this.state.email.length>=6 && this.state.email.indexOf('@') >= 3 && this.state.email.indexOf('.') >=6 && this.state.email.split('@')[1].length>=8)
        {
            this.setState({valid : true})
        }
        else
        {
            this.setState({valid : false});
        }
    }

    handleAdditionalInfo = () => {
        // let phoneNumber = '';
        // if(this.props.phone_info.user == undefined)
        // {
        //     phoneNumber = this.props.phone_info.phoneNumber
        // }
        // else
        // {
        //     phoneNumber = this.props.phone_info.user.phoneNumber
        // }
        const info = {
            name : this.state.name,
            emailId : this.state.email,
            phoneNumber : this.props.phone_info.phoneNumber
        };
       this.props.userAdditionalInfo(info);
    }

    handleInput = ({value,field}) => {
        switch(field)
        {
            case 'name':
                this.setState({name : value}, this.validateForm);
            case 'email':
                this.setState({email : value}, this.validateForm);
        }
    }

    render()
    {
        return(
            <View style={{flex:1,backgroundColor:'white'}}>
            {this.props.sending?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                    <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                    <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(15),borderBottomRightRadius:scale(15)}}>
                        <ActivityIndicator size="large" />
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Please hold on</Text>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>We are authenticating you</Text>
                    </View>
                </View>:null}
            <View style={{flex:.5}}/>
            <View style={{flex:1,alignItems:'center',justifyContent:'space-between'}}>
                <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-Semibold',fontSize:scale(14)}}>Personal Details</Text>
                <Text allowFontScaling={false} style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-Light',fontSize:scale(18)}}>Tell us a bit more about yourself</Text>
            </View>
            <View style={{flex:.5}}></View>
            <View style={{flex:1.2}}>
                <View style={{flex:1}}></View>
                <View style={{flex:5,flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:15}}>
                        <InputField 
                         onChangeText = {value => this.handleInput({value, field : 'name'})}
                         value = {this.state.name}
                         placeholderText="Vyom " 
                         legendText="User Name" 
                         secure={false} 
                         autoFocus={true} 
                         type="default" />
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{flex:1}}></View>
            </View>
            <View style={{height:verticalScale(12)}}></View>
            <View style={{flex:1.2}}>
                <View style={{flex:1}}></View>
                <View style={{flex:5,flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:15}}>
                        <InputField 
                          onChangeText = {value => this.handleInput({value, field : 'email'})}
                          value = {this.state.email}
                          placeholderText="xyz@123.com" 
                          legendText="Email Address" 
                          secure={false} 
                          autoFocus={false} 
                          type="default" />
                    </View>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{flex:1}}></View>
            </View>

            <View style={{flex:.4}}></View>
            <View style={{flex:1.6}}>
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:1}}></View>
                    <TouchableOpacity onPress={() => this.handleAdditionalInfo()}
                        disabled={!this.state.valid}
                        style={{flex:15,borderRadius:scale(3),overflow:'hidden'}}>
                        <View style={this.state.valid?{flex:1,backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}:{flex:1,backgroundColor:'gainsboro',justifyContent:'center',alignItems:'center'}}>
                            <Text allowFontScaling={false} style={{color:'white',fontSize:16,fontFamily:'Gilroy-SemiBold',fontSize:scale(19)}} >Continue</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={{flex:1}}></View>
                </View>
                <View style={{flex:.8}}></View>
            </View>

            <View style={{flex:1}}></View>

            <View style={{flex:1}}></View>

            <View style={{flex:1}}></View>


            </View>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("inside map state to props function from user info screen ");
    console.log(state.phoneReducer.phone_info);
    console.log(state.phoneReducer.userName);
    return {
       phone_info : state.phoneReducer.phone_info,
       sending : state.phoneReducer.sending,
       sent : state.phoneReducer.sent,
       locationInfo : state.locationReducer.locationInfo,
       userName : state.phoneReducer.userName
    }
}

export default connect(mapStateToProps,{ userAdditionalInfo, isUserAlreadyPresent })(UserInfo);