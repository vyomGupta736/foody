import React from 'react';
import {View,Text,TouchableOpacity,FlatList} from 'react-native';
import { verticalScale, scale } from './Exports';
import ShowData from './ShowData';

const CartComponent = ({items_in_cart,increaseQuantity,decreaseQuantity,removeItem}) => {
    return ( <View style={{flex:1}} >
        <FlatList
        ListFooterComponent={<View style={{height:verticalScale(100)}} />}
         data={items_in_cart}
         keyExtractor={(item) => item.item.name}
         renderItem={({item}) => {
             console.log("from flatlist");
             console.log(item);
             return (<View > 
             <View style={{height:verticalScale(110)}}>
                  <ShowData 
                    HeaderTitle={item.item.name} comments={item.item.comments}
                    calories={item.item.calories} fats={item.item.fats}
                    sodium={item.item.sodium} cholestrol={item.item.cholestrol}
                    proteins={item.item.proteins} cost={item.item.price}
                    imageSource={{uri : item.item.photoURL}}
                    showNutrition={true}
                />
             </View>
             <View style={{height:verticalScale(30),borderColor:'gray'}} >
                <View style={{flex:1,flexDirection:'row'}}>
                    <View style={{flex:2,justifyContent:'center',alignItems:'center'}}>
                    <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'rgb(51,148,24)'}}
                      >Customize</Text>
                    </View>
                    <View style={{flex:2.3}}>
                        <View style={{flex:1,flexDirection:'row'}}>
                            <View style={{width:'25%',height:verticalScale(30),borderWidth:0}}>
                                <TouchableOpacity onPress={() => decreaseQuantity(item,items_in_cart)}
                                style={{width:'100%',height:'100%',borderRadius:scale(4),backgroundColor:'rgb(220,220,220)',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(30)}} >-</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{width:'50%',height:verticalScale(30),borderWidth:0,justifyContent:'center',alignItems:'center'}}>
                               <Text  style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-SemiBold',fontSize:scale(20)}}>{item.quantity}</Text>
                            </View>
                            <View style={{width:'25%',height:verticalScale(30),borderWidth:0}}>
                                <TouchableOpacity onPress={() => increaseQuantity(item,items_in_cart)}
                                style={{width:'100%',height:'100%',borderRadius:scale(4),backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}} >
                                    <Text allowFontScaling={false} style={{color:'white',fontSize:scale(20)}} >+</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{flex:2.2,flexDirection:'row'}}>
                        <View style={{flex:1}} />
                        <TouchableOpacity 
                         onPress={() => removeItem(item) }
                         style={{flex:5,backgroundColor:'orange',borderRadius:scale(4),justifyContent:'center',alignItems:'center'}}>
                            <Text allowFontScaling={false} style={{color:'white',fontSize:scale(11)}} >Remove item</Text>
                        </TouchableOpacity>
                        <View style={{flex:.6}} />
                    </View>
                    <View style={{flex:.3,borderWidth:0}} />
                </View>
              </View>
              <View style={{height:verticalScale(10),backgroundColor:'white'}} />
              <View style={{height:verticalScale(10),backgroundColor:'rgb(230,230,230)'}} />
             </View>
             )
         }}
          />
          </View>
    )
};

export default CartComponent;




// <View style={{height:verticalScale(110)}}>
//                                 <ShowData 
//                                     HeaderTitle={this.props.item_in_cart.item.name} comments={this.props.item_in_cart.item.comments}
//                                     calories={this.props.item_in_cart.item.calories} fats={this.props.item_in_cart.item.fats}
//                                     sodium={this.props.item_in_cart.item.sodium} cholestrol={this.props.item_in_cart.item.cholestrol}
//                                     proteins={this.props.item_in_cart.item.proteins} cost={this.props.item_in_cart.item.price}
//                                     imageSource={{uri : this.props.item_in_cart.item.photoURL}}
//                                     showNutrition={true}
//                                 />
//                         </View>
//                         {/* <View style={{height:verticalScale(20),backgroundColor:'rgb(230,230,230)'}} ></View>
//                         <View style={{height:verticalScale(10)}} /> */}
//                         <View style={{height:verticalScale(30),borderColor:'gray'}} >
//                             <View style={{flex:1,flexDirection:'row'}}>
//                                 <View style={{flex:2,justifyContent:'center',alignItems:'center',borderWidth:1}}>
//                                     <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(14),color:'rgb(51,148,24)'}}
//                                       >Customize</Text>
//                                 </View>
//                                 <View style={{flex:2.3,borderWidth:1}}>
//                                     <View style={{flex:1,flexDirection:'row'}}>
//                                         <View style={{width:'25%',height:verticalScale(30),borderWidth:0}}>
//                                             <TouchableOpacity onPress={() => {this.state.newCounter>=2?this.setState({newCounter :  this.state.newCounter-1}):null}}
//                                             style={{width:'100%',height:'100%',borderRadius:scale(4),backgroundColor:'rgb(220,220,220)',justifyContent:'center',alignItems:'center'}} >
//                                                 <Text allowFontScaling={false} style={{color:'white',fontSize:scale(30)}} >-</Text>
//                                             </TouchableOpacity>
//                                         </View>
//                                         <View style={{width:'50%',height:verticalScale(30),borderWidth:0,justifyContent:'center',alignItems:'center'}}>
//                                           <Text  style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-SemiBold',fontSize:scale(20)}}>{this.state.newCounter}</Text>
//                                         </View>
//                                         <View style={{width:'25%',height:verticalScale(30),borderWidth:0}}>
//                                             <TouchableOpacity onPress={() => {this.setState({newCounter :  this.state.newCounter+1})}}
//                                             style={{width:'100%',height:'100%',borderRadius:scale(4),backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}} >
//                                                 <Text allowFontScaling={false} style={{color:'white',fontSize:scale(20)}} >+</Text>
//                                             </TouchableOpacity>
//                                         </View>
//                                         {/* <TouchableOpacity onPress={() => {this.state.newCounter>=2?this.setState({newCounter :  this.state.newCounter-1}):null}}
//                                          style={{width:scale(30),height:scale(30),borderRadius:scale(30),backgroundColor:'rgb(220,220,220)',justifyContent:'center',alignItems:'center'}} >
//                                             <Text allowFontScaling={false} style={{color:'white',fontSize:scale(30)}} >-</Text>
//                                         </TouchableOpacity>
//                                         <View style={{width:scale(50),justifyContent:'center',alignItems:'center'}}>
//                                         </View>
//                                         <TouchableOpacity onPress={() => {this.setState({newCounter :  this.state.newCounter+1})}}
//                                          style={{width:scale(30),height:scale(30),borderRadius:scale(30),backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}} >
//                                             <Text allowFontScaling={false} style={{color:'white',fontSize:scale(20)}} >+</Text>
//                                         </TouchableOpacity> */}
//                                     </View>
//                                 </View>
//                                 <View style={{flex:2.2,borderWidth:1,flexDirection:'row'}}>
//                                     <View style={{flex:1}} />
//                                     <TouchableOpacity style={{flex:5,borderWidth:1,backgroundColor:'orange',borderRadius:scale(4),justifyContent:'center',alignItems:'center'}}>
//                                       <Text allowFontScaling={false} style={{color:'white',fontSize:scale(11)}} >Remove item</Text>
//                                     </TouchableOpacity>
//                                     <View style={{flex:.6}} />
//                                 </View>
//                                 <View style={{flex:.3,borderWidth:1}} />
//                             </View>
//                         </View>
//                         <View style={{height:verticalScale(10)}} />
//                         <View style={{height:verticalScale(60)}}>
//                            <View style={{flex:1}} />
//                            <View style={{flex:5,flexDirection:'row'}}>
//                                <View style={{flex:1}} />
//                                <TouchableOpacity style={{flex:2,backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}}>
//                                    <Text allowFontScaling={false}
//                                     style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(15),color:'white'}}
//                                      >Cancel your order</Text>
//                                </TouchableOpacity>
//                                <View style={{flex:1}} />
//                            </View>
//                            <View style={{flex:1}} />
//                         </View>
//                         <View style={{height:verticalScale(20),backgroundColor:'rgb(230,230,230)'}} ></View>