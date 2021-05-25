import React from 'react';
import {View,Text,TouchableOpacity,Image,TextInput} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import {scale, verticalScale, h} from './Exports';
import styles from './Styles';
import LoadingHome from './LoadingHome';
import ShowData from './ShowData';

const AddItemPopUp = ({whiteScreen,selectedItem,addItemToCart}) => {
   const [counter,setCounter] = React.useState(1);
    return (
        <View style={{flex:1,backgroundColor:'white',position:'relative'}}>
            
                 <View style={{height:verticalScale(45),borderTopRightRadius:scale(20),borderTopLeftRadius:scale(20),borderWidth:0}}>
                   <View style={{flex:1}}>
                     <View style={{flex:1}}/>
                     <View style={{flex:2.5,flexDirection:'row'}}>
                       <View style={{flex:1}}></View>
                       <View style={{flex:12,flexDirection:'row'}}>
                         <TouchableOpacity onPress={() => {whiteScreen()}}
                          style={{flex:1,justifyContent:'center',alignItems:'flex-start'}}>
                             <Image source={require('../StaticImages/arrowDown.png')} resizeMode="contain" style={{width:'60%',height:'60%'}} />
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => addItemToCart({item : selectedItem, quantity : counter})}
                           style={{flex:3,justifyContent:'center',alignItems:'center'}} >
                            <Text allowFontScaling={false}
                             style={{color:'gray',fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}}>Add item</Text>
                         </TouchableOpacity>
                         <TouchableOpacity onPress={() => {whiteScreen()}}
                           style={{flex:3,justifyContent:'center',alignItems:'flex-end',paddingRight:scale(10)}} >
                            <Text allowFontScaling={false}
                             style={{color:'black',fontFamily:'Gilroy-SemiBold',fontSize:scale(15)}}>cancel</Text>
                         </TouchableOpacity>
                       </View>
                       <View style={{flex:1}}></View>
                     </View>
                     <View style={{flex:1}}></View>
                   </View>
                 </View>
                <ScrollView>
                 <View style={{height:verticalScale(110),borderWidth:0}}>
                    {selectedItem?<ShowData 
                       HeaderTitle={selectedItem.name} comments={selectedItem.comments}
                       calories={selectedItem.calories} fats={selectedItem.fats}
                       sodium={selectedItem.sodium} cholestrol={selectedItem.cholestrol}
                       proteins={selectedItem.proteins} cost={selectedItem.price}
                       imageSource={{uri : selectedItem.photoURL}}
                       showNutrition={true}
                       />:<LoadingHome />}
                 </View>

                 <View style={{height:verticalScale(45),backgroundColor:'rgb(247,247,247)',flexDirection:'row'}}>
                   <View style={{flex:1}}></View>
                   <View style={{flex:14,justifyContent:'center'}}>
                      <Text allowFontScaling={false}
                       style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-SemiBold',fontSize:scale(20)}}>How Many</Text>
                   </View>
                   <View style={{flex:1}}></View>
                 </View>
                 <View style={{height:verticalScale(100)}}>
                   <View style={{flex:1}}></View>
                   <View style={{flex:1,flexDirection:'row'}}>
                        <View style={{flex:1}}></View>
                        <View style={{flex:14,flexDirection:'row'}}>
                              <View style={{flex:1}}>
                                  <TouchableOpacity style={styles.istyles} onPress={() => {(counter>=2)?setCounter(counter-1):null}} >
                                    <Image source={require('../StaticImages/minus.png')} resizeMode="contain" style={styles.istyles} />
                                  </TouchableOpacity>
                              </View>
                              <View style={{flex:8,justifyContent:'center',alignItems:'center'}}>
                                   <Text allowFontScaling={false}
                                     style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-SemiBold',fontSize:scale(20)}}>{counter}</Text>
                              </View>
                              <View style={{flex:1}}>
                                    <TouchableOpacity style={styles.istyles} onPress={() => setCounter(counter+1)}  >
                                      <Image source={require('../StaticImages/plus.png')} resizeMode="contain" style={styles.istyles} />
                                    </TouchableOpacity>
                              </View>
                        </View>
                        <View style={{flex:1}}></View>
                   </View>
                   <View style={{flex:1}}></View>
                 </View>
                 {/* <View style={{height:verticalScale(45),backgroundColor:'rgb(247,247,247)',flexDirection:'row',borderWidth:0}}>
                   <View style={{flex:1}}></View>
                   <View style={{flex:14,justifyContent:'center'}}>
                      <Text style={{color:'rgb(14,14,86)',fontFamily:'Gilroy-SemiBold',fontSize:scale(23)}}>Select</Text>
                   </View>
                   <View style={{flex:1}}></View>
                 </View> */}
                 
                 <View style={{height:verticalScale(30),backgroundColor:'rgb(247,247,247)'}}></View>
                 <View style={{height:verticalScale(50),}}>
                   <View style={{flex:1}}></View>
                   <View style={{flex:3,flexDirection:'row'}}>
                     <View style={{flex:1}}></View>
                     <View style={{flex:14,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
                        <Text allowFontScaling={false}
                          style={{color:'rgb(10,10,10)',fontFamily:'Gilroy-SemiBold',fontSize:scale(12)}}>Any request</Text>
                        <Text allowFontScaling={false} 
                         style={{color:'rgb(200,200,200)',fontFamily:'Gilroy-SemiBold',fontSize:scale(14)}}>Add instructions for the item</Text>
                     </View>
                     <View style={{flex:1}}></View>
                   </View>
                   <View style={{flex:1}}></View>
                 </View>

                 <View style={{height:verticalScale(200),backgroundColor:'rgb(240,240,240)'}}>
                    <View style={{flexDirection:'row',flex:1}}>
                          <View style={{flex:1}}></View>
                          <View style={{flex:14,borderTopLeftRadius:10,borderTopRightRadius:10,justifyContent:'flex-start'}}>
                             <TextInput allowFontScaling={false}
                               keyboardType='default' multiline={true}
                               placeholder="enter your valuable instructions here"
                             style={{flex:1,fontFamily:'Gilroy-SemiBold',fontSize:scale(15),backgroundColor:'white',paddingTop:verticalScale(10),paddingBottom:0,textAlignVertical:'top',paddingLeft:scale(6),letterSpacing:1}} />
                          </View>
                          <View style={{flex:1}}></View>
                    </View>
                 </View>

                 <View style={{height:verticalScale(75),borderWidth:0}}>
                    <View style={{flex:1}}></View>
                    <View style={{flex:6,flexDirection:'row'}}>
                     <View style={{flex:1}}></View>
                     <View style={{flex:15,borderRadius:10,overflow:'hidden'}}>
                          <TouchableOpacity onPress={() => addItemToCart({item : selectedItem, quantity : counter})}
                            activeOpacity={0.8}
                            style={{width:'100%',height:'100%',backgroundColor:'rgb(51,148,24)',justifyContent:'center',alignItems:'center'}}  >
                             <Text allowFontScaling={false} style={{fontFamily:'Gilroy-SemiBold',color:'white',fontSize:scale(15)}}>Add to cart</Text>
                          </TouchableOpacity>
                     </View>
                     <View style={{flex:1}}></View>
                   </View>
                   <View style={{flex:1}}></View>
                 </View>
                 <View style={{height:verticalScale(65)}} />

                 </ScrollView>
        </View>
    )
}

export default AddItemPopUp;