import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image,ScrollView,Animated} from 'react-native';
import {connect} from 'react-redux';
import {verticalScale, scale, w, h} from '../Components/Exports';
import { PopBackground } from '../Components/PopBackground';
import styles from '../Components/Styles';
import OrderTime from '../Components/OrderTime';
import CartComponent from '../Components/CartComponent';
import { increaseQuantity, decreaseQuantity, removeItem } from '../Actions/cartActions';

class Cart extends React.Component
{
    state = {
        paymentTop : new Animated.Value(h),
        timeTop : new Animated.Value(h),
        random : new Animated.Value(w*0.05),
        opacity : new Animated.Value(0),
        newCounter : this.props.item_in_cart?this.props.item_in_cart.quantity:1,
        appeared : false,
    }

    render()
    {
        const showPopup = (showHeight,variable) => {
            Animated.parallel([
                Animated.timing(variable, {
                    useNativeDriver : true,
                    toValue : showHeight,
                    duration : 300
                }),
                Animated.timing(this.state.opacity, {
                    useNativeDriver : true,
                    toValue: 1,
                    duration: 300,
                  })
            ]).start();
        }

        const hidePopup = (hideHeight,variable1,variable2) => {
            Animated.parallel([
                Animated.timing(variable1, {
                    useNativeDriver : true,
                    toValue : hideHeight,
                    duration : 300
                }),
                Animated.timing(variable2, {
                    useNativeDriver : true,
                    toValue : hideHeight,
                    duration : 300
                }),
               Animated.timing(this.state.opacity, {
                useNativeDriver : true,
                toValue: 0,
                duration: 300
               })
            ]).start(() => this.setState({appeared : false}))
        }

        return (
            <View style={{flex:1,backgroundColor:'white',position:'relative'}}>
                <View style={{...style.headerStyle}}>
                    <View style={{flex:1}}>
                        <View style={{flex:1}} />
                        <View style={{flex:3,flexDirection:'row'}}>
                            <View style={{flex:1}} />
                            <View style={{flex:14,flexDirection:'row'}}>
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('Main',{screen:"Home"})}
                                  style={{flex:1.4}}>
                                    <Image source={require('../StaticImages/left.png')} resizeMode="contain" style={styles.istyles} />
                                </TouchableOpacity>
                                <View style={{flex:3.4,justifyContent:'center'}}>
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15)}}
                                     >My Orders</Text>
                                </View>
                                <TouchableOpacity disabled={!this.props.items_in_cart.length}
                                 onPress={() => {this.setState({appeared : true}, () => {  showPopup((h-(2*h/3)),this.state.timeTop); }) } }
                                 style={{flex:3,justifyContent:'center',alignItems:'center',borderRadius:scale(20),backgroundColor:'rgb(230,230,230)'}}>
                                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'rgb(14,14,86)'}}
                                     >Schedule</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{flex:1}} />
                        </View>
                        <View style={{flex:1}} />
                    </View>
                </View>
                {!this.props.items_in_cart.length?<View style={{flex:1}}>
                    <View style={{flex:.6,borderWidth:0}}>
                        <Image source={require('../StaticImages/mainLogoGreen.png')} resizeMode="contain" style={styles.istyles} />
                    </View>
                    <View style={{flex:.1,borderWidth:0}}></View>
                    <View style={{flex:.1,borderWidth:0,justifyContent:'center',alignItems:'center'}}>
                        <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'rgb(14,14,86)'}}
                         >Feeling hungry ? order something for you now!</Text>
                    </View>
                    <View style={{flex:.1,justifyContent:'center',alignItems:'center',flexDirection:'row',borderWidth:0}}>
                        <View style={{flex:2}}></View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Main',{ screen : "Home" })}
                          style={{flex:10,borderWidth:0,justifyContent:'center',alignItems:'center',height:'80%',borderRadius:scale(10),backgroundColor:'orange'}}>
                           <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'white'}} >Order Something</Text>
                        </TouchableOpacity>
                        <View style={{flex:2}}></View>
                    </View>
                </View>:<View style={{flex:1,backgroundColor:'white',position:'relative'}} >
                      
                      <CartComponent 
                       decreaseQuantity={(selectedItem,items_in_cart) => this.props.decreaseQuantity(selectedItem,items_in_cart)}
                       increaseQuantity={(selectedItem,items_in_cart) => this.props.increaseQuantity(selectedItem,items_in_cart)}
                       items_in_cart={this.props.items_in_cart}
                       removeItem={(selectedItem) => this.props.removeItem(selectedItem,this.props.items_in_cart)}
                        />
                        <View style={{height:verticalScale(60),position:'absolute',bottom:0,left:0,right:0}}>
                            <View style={{flex:1}}/>
                            <View style={{flex:10,flexDirection:'row'}} >
                                <View style={{flex:1}} />
                                <View style={{flex:15,flexDirection:'row'}} >
                                    <View style={{flex:2,backgroundColor:'rgb(230,230,230)',justifyContent:'center'}} >
                                        <Text allowFontScaling={false}
                                        style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'black',marginHorizontal:scale(20)}}
                                        >Rs : {this.props.payment}</Text>
                                    </View>
                                    <TouchableOpacity style={{flex:1.2,backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false}
                                    style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'white'}}
                                     >Pay Now</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{flex:1}} />
                            </View>
                            <View style={{flex:1}} />
                            
                        </View>
                    </View>}
                    <PopBackground whiteScreen={() => { hidePopup( h,this.state.paymentTop,this.state.timeTop); }} isAppeared={this.state.appeared} opacity={this.state.opacity} />
                    <Animated.View style={[{...style.commonPopStyles},{transform : [{
                    translateY : this.state.timeTop
                    }]}]} >
                        <OrderTime whiteScreen={() => { hidePopup(h, this.state.timeTop, this.state.paymentTop); }} />
                  </Animated.View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    headerStyle:{
        height : verticalScale(70),
        borderBottomColor : 'gray',
        borderBottomWidth:1,
        backgroundColor : 'white',
        elevation : 9
    },commonPopStyles : {
        height : 2*h/3,
        backgroundColor : 'red',
        position : 'absolute',
        left : 0,
        right : 0,
        zIndex : 1000,
        borderTopLeftRadius : scale(20),
        borderTopRightRadius:scale(20),
        overflow :'hidden'
       }
})

const mapStateToProps = state => {
    console.log("from map state pf cart history");
    console.log(state.cartReducer.items_in_cart);
    console.log(state.cartReducer.payment);
    return{
        items_in_cart : state.cartReducer.items_in_cart,
        payment : state.cartReducer.payment
    }
}
 
export default connect(mapStateToProps,{increaseQuantity, decreaseQuantity, removeItem})(Cart);