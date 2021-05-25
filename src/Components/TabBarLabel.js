import React from 'react';
import {Text} from 'react-native';

const tabBarLabel = ({focused,focusedTextColor,blurTextColor,routeName}) => {
    let label;

    if(routeName === "Home")
    {
        label = 'Home';
    }else if(routeName === "Cart")
    {
        label = 'Cart';
    }else if(routeName === "OrderHistory")
    {
        label = "My Orders"
    }else if(routeName === "AccountSettings")
    {
        label = "My Account"
    }
  return <Text allowFontScaling={false} style={focused?{color : focusedTextColor, fontSize : 12}:{color: blurTextColor,fontSize:12}}>{label}</Text>    
};

export default tabBarLabel;