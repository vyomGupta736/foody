import React from 'react';
import {View,Image,ActivityIndicator,TouchableOpacity,Text} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { connect } from 'react-redux';
import styles from '../Components/Styles';
import { autoLocation } from '../Actions/locationActions';
import { scale, verticalScale } from '../Components/Exports';

class AskLocation extends React.Component
{

    componentDidMount()
    {
        SplashScreen.hide();
    }

    UNSAFE_componentWillReceiveProps(nextProps)
    {
       if(nextProps.locationInfo)
       {
           this.props.navigation.navigate('Main',{ screen : 'Home' });
       }
       else if(nextProps.locationFail)
       {
           this.props.navigation.navigate('LocationFlow', { screen : 'ManualLocation' });
       }
    }

    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white',position:'relative'}}>
                {this.props.loading?<View style={{...styles.astyles,zIndex:100,justifyContent:'center',alignItems:'center'}}>
                    <View style={{...styles.astyles,backgroundColor:'gray',opacity:0.5}} />
                    <View style={{width:'70%',height:'20%',backgroundColor:'white',justifyContent:'center',alignItems:'center',borderTopLeftRadius:scale(15),borderBottomRightRadius:scale(15)}}>
                        <ActivityIndicator size="large" />
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Please hold on</Text>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)',fontSize:scale(15)}}>We are locating you</Text>
                    </View>
                </View>:null}
                <Image source={require('../StaticImages/locationPerson.jpg')} resizeMode="contain" style={styles.istyles} />
                <View style={styles.astyles}>
                    <View style={{flex:13}}></View>
                    <View style={{flex:1.2,flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                        <TouchableOpacity onPress = {() => this.props.autoLocation()}
                            style={{flex:14}}>
                            <Image source={require('../StaticImages/permission.jpg')} resizeMode="cover" style={styles.istyles} />
                        </TouchableOpacity>
                        <View style={{flex:1}}></View>
                    </View>
                    <View style={{flex:2}}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('ManualLocation')}
                            style={{flex:1,justifyContent:'flex-start',alignItems:'center'}}>
                            <Text allowFontScaling={false} style={{color:'rgb(51,148,24)',fontFamily:'Gilroy-SemiBold',fontSize:scale(17),marginTop:verticalScale(17)}} >Enter your location manually</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        loading : state.locationReducer.loading,
        locationInfo : state.locationReducer.locationInfo,
        locationFail : state.locationReducer.locationFail
    }
}

export default connect(mapStateToProps,{autoLocation})(AskLocation);