import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./Screens/Login";
import PhoneEntry from "./Screens/PhoneEntry";
import PhoneCode from "./Screens/PhoneCode";
import Home from "./Screens/Home";
import OrderHistory from "./Screens/OrderHistory";
import Cart from "./Screens/Cart";
import AccountSettings from "./Screens/AccountSettings";
import TabBarIcon from './Components/TabBarIcon';
import {verticalScale} from './Components/Exports';
import AskLocation from './Screens/AskLocation';
import ManualLocation from './Screens/ManualLocation';
import UserInfo from './Screens/UserInfo';
import { connect } from 'react-redux';
import ParticularUser from './Screens/ParticularUser';
import Payment from './Screens/Payment';
import Help from './Screens/Help';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LoginFlow = () => {
    return (
        <Stack.Navigator >
            <Stack.Screen name="Login" component={Login} options={{headerShown:false}}/>
            <Stack.Screen name="PhoneEntry" component={PhoneEntry} options={{headerShown:false}} />
            <Stack.Screen name="PhoneCode" component={PhoneCode} options={{headerShown:false}} />
        </Stack.Navigator>
    )
};

const LocationFlow = () => {
    return(
        <Stack.Navigator>
            <Stack.Screen name="AskLocation" component={AskLocation} options={{headerShown : false}} />
            <Stack.Screen name="ManualLocation" component={ManualLocation} options={{headerShown:false}} />
        </Stack.Navigator>
    )
}

const AccountSettingsFlow = () => {
    return(
        <Stack.Navigator initialRouteName="AccountSettings"  >
            <Stack.Screen name="AccountSettings" component={AccountSettings} options={{headerShown : false}} />
            <Stack.Screen name="ParticularUser" component={ParticularUser} options={{headerShown : false}} />
            <Stack.Screen name="Payment" component={Payment} options={{headerShown : false}} />
            <Stack.Screen name="Help" component={Help} options={{headerShown : false}} />
        </Stack.Navigator>
    )
}




class Routes extends React.Component
{
    render()
    {
        const Main = () => {
            return (
                <Tab.Navigator screenOptions={({route}) => ({
                    tabBarIcon : ({focused,size}) => {
                        return (
                        <TabBarIcon badgeForCartScreen={this.props.items_in_cart} paid={this.props.paid} focused={focused} routeName = {route.name} focusedBackgroundColor='rgb(234,156,25)' bluredBackgroundColor='rgb(212,212,212)' size={size} />
                        )
                    },
                    tabBarVisible : (route.name === "Cart")?false:true
                })
              }
                tabBarOptions={{
                    activeTintColor : 'rgb(255,255,255)',
                    inactiveTintColor : 'rgb(190,190,190)',
                    style : {height : verticalScale(65),justifyContent:'center'},
                    allowFontScaling : false,
                    keyboardHidesTabBar : true,
                    showLabel : false,
                }} >
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="OrderHistory" component={OrderHistory} />
                    <Tab.Screen name="Cart" component={Cart} />
                    <Tab.Screen name="AccountSettingsFlow" component={AccountSettingsFlow} />
                </Tab.Navigator>
            )
        }
        return (
            <NavigationContainer>
                <Tab.Navigator 
                    tabBarOptions = {{
                        showIcon : false,
                        showLabel : false,
                        style : { height : 0}
                    }}
                    backBehavior="none"
                    screenOptions={{
                        tabBarVisible : false
                    }} >
                    <Tab.Screen name="LoginFlow" component={LoginFlow} />
                    <Tab.Screen name="UserInfo" component={UserInfo} />
                    <Tab.Screen name="LocationFlow" component={LocationFlow} />
                    <Tab.Screen name="Main" component={Main} />
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
};

const mapStateToProps = (state) => {
    return {
        items_in_cart : state.cartReducer.items_in_cart,
        paid : state.cartReducer.paid
    }
}

export default connect(mapStateToProps,null)(Routes);


