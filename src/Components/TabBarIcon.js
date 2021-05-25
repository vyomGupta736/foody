import React from 'react';
import {View,Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/FontAwesome5';
import {scale} from './Exports';

export default TabBarIcon = ({focused,routeName, focusedBackgroundColor, bluredBackgroundColor,size, badgeForCartScreen,paid}) => {
    let iconName, label;
    if(routeName === "Home")
    {
        iconName = 'utensils';
        label = "Home";
    }else if(routeName === "Cart")
    {
        iconName = 'cart-plus';
        label = "Cart"
    }else if(routeName === "OrderHistory")
    {
        iconName = 'list';
        label = "My Orders";
    }else if(routeName === "AccountSettingsFlow")
    {
        iconName = "user";
        label = "My Account";
    }

    return <View>
        {focused?
       <View style={{alignItems:'center'}}>
            <View style={{width:1.37*size,height:1.35*size,borderRadius:size/2,justifyContent:"center",alignItems:'center',backgroundColor:focusedBackgroundColor,marginTop:scale(0)}}>
                <Ionicons name={iconName} size={scale(16)} color='white' />
            </View>
            <Text allowFontScaling={false} style={{fontFamily:"Gilroy-SemiBold",color:focusedBackgroundColor,marginTop:scale(4),fontSize:scale(12)}}>{label}</Text>
       </View> :<View style={{alignItems:'center'}}>
                    <View style={{width:1.37*size,height:1.35*size,borderRadius:size/2,justifyContent:"center",alignItems:'center',backgroundColor:bluredBackgroundColor,marginTop:scale(5),position:'relative'}}>
                        {(routeName === "Cart" && badgeForCartScreen.length && !paid )?<View style={{position:'absolute',width:scale(15),height:scale(15),borderRadius:scale(15),backgroundColor:'orange',right:0,top:-scale(7.5),justifyContent:'center',alignItems:'center'}} >
                            <Text allowFontScaling={false} style={{color:'white',fontSize:scale(10),fontFamily:'Gilroy-SemiBold'}}>1</Text>
                        </View>:null}
                        <Ionicons name={iconName} size={scale(16)} color='white' />
                    </View>
                    <Text allowFontScaling={false} style={{fontFamily:"Gilroy-SemiBold",color:"gray",marginTop:scale(4),fontSize:scale(12)}}>{label}</Text>
           </View>}
    </View>    
}