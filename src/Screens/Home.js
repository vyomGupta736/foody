import React from 'react';
import {View,Text,Animated,TouchableOpacity, StyleSheet,Switch,PanResponder, ActivityIndicator,RefreshControl} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { verticalScale, scale, w, h } from '../Components/Exports';
import { PopBackground } from '../Components/PopBackground';
import { ScrollView } from 'react-native-gesture-handler';
import { AddressPopUp } from '../Components/AddressPopUp';
import SearchBar from '../Components/SearchBar';
import CarouselComponent from '../Components/CarouselComponent';
import TopBar from '../Components/TopBar';
import { connect } from 'react-redux';
import AddItemPopUp from '../Components/AddItemPopUp';
import { findData, selectItem } from '../Actions/dataActions';
import { addItemToCart } from '../Actions/cartActions';
import StaticComponent from '../Components/StaticComponent';
import DataComponent from '../Components/DataComponent';

class Home extends React.Component
{
    state = {
        addressTop : new Animated.Value(h),
        addItemTop : new Animated.Value(h),
        random : new Animated.Value(w*0.05),
        opacity : new Animated.Value(0),
        top : new Animated.ValueXY({x:0,y:-verticalScale(30)}),
        appeared : false,
        focusedOne : true,
        focusedTwo : false,
        focusedThree : false,
        data : false,
        showNutrition : false,
        isScrollAtTop : true,
        refreshing : false
    };
    componentDidMount()
    {
        SplashScreen.hide();
        this.props.findData();
        // this.props.navigation.addListener('focus', () => {
        //     console.log("from focusing listener focused of Home ");
        //     this.props.findData();
        // });
    }

     refreshFunction = () => {
         this.setState({refreshing : true},() => { 
             console.log("going for time out")
           setTimeout(() => this.setState({refreshing : false}, () => console.log("made it false again")), 2000);
         }
           );
     }
    

    UNSAFE_componentWillMount(){
        this.PanResponder = PanResponder.create({
            onStartShouldSetPanResponder: (evt, gestureState) => false,
            onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
            onMoveShouldSetPanResponder: (evt, gestureState) => { 
                 false
             },
            onMoveShouldSetPanResponderCapture: (evt, gestureState) =>{
                if(gestureState.dy > 0)
                 {
                     return true;
                 }else
                 {
                     return false;
                 }
            },
            onPanResponderMove:(evt,gestureState) => {
                console.log(this.state.isScrollAtTop);
                if(this.state.isScrollAtTop)
                {
                    Animated.spring(this.state.top.y,{
                        useNativeDriver : true,
                        toValue : verticalScale(50),
                        speed : 30
                    }).start(() => {
                        Animated.spring(this.state.top.y,{
                            useNativeDriver : true,
                            toValue : -verticalScale(30),
                            speed : 30
                        }).start();
                    });
                    // after completion of this we can call for findData actions
                }
            },
            onPanResponderEnd:(evt,gestureState) => {
                console.log("released")
                // Animated.timing(this.state.top.y,{
                //     useNativeDriver : true,
                //     toValue : -10,
                //     duration : 500
                // }).start();
                
            }
        })
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

        const scrolledx = (value1,value2,shouldREFF) => {
            this.scrollview_ref.scrollTo({
                x: value1,
                y: 0,
                animated: true,
            });
            if(shouldREFF)
            {
                this.scrollview_reff.scrollTo({
                    x: value2,
                    y: 0,
                    animated: true,
                });
            }
        }
        const deciderOne = (shouldREFF) => {
            if(!this.state.focusedOne)
            {
                this.setState({focusedOne : true, focusedTwo : false, focusedThree : false}, () => {scrolledx(w*0,0,shouldREFF);});
            }
          };
          const deciderTwo = (shouldREFF) => {
            if(!this.state.focusedTwo)
            {
                this.setState({focusedOne : false, focusedTwo : true, focusedThree : false}, () => {scrolledx(w*0.06+w*0.24,w,shouldREFF);});
            }
         };
         const deciderThree = (shouldREFF) => {
             if(!this.state.focusedThree)
             {
                this.setState({focusedOne : false, focusedTwo : false, focusedThree : true}, () => {scrolledx(w*0.06+w*0.32+w*0.55,2*w,shouldREFF);});
             }
         };

         const handle = (event) => {
            const off = event.nativeEvent.contentOffset.x;
            if(this.state.focusedOne)
            {
              if(off === w)
              {
                 deciderTwo(false);
              }else if(off === 2*w)
              {
                  deciderThree(false);
              }
            }
            if(this.state.focusedTwo)
            {
               if(off === 0)
               {
                   deciderOne(false);
               }else if(off === 2*w)
               {
                   deciderThree(false);
               }
            }
            if(this.state.focusedThree)
            {
                if(off === 0)
                {
                    deciderOne(false);
                }else if(off === w)
                {
                    deciderTwo(false);
                }
            }
         }

        const handleMainScrollView = (event) => {
            const off = event.nativeEvent.contentOffset.y;
            if(off === 0)
            {
                this.setState({isScrollAtTop : true})
            }else
            {
                this.setState({isScrollAtTop : false})
            }
        }

        return (
            <View
              style={{flex:1,backgroundColor:'white',borderWidth:0,position:'relative'}}>
                <View style={{height:verticalScale(30),borderWidth:0,width:'100%',flexDirection:'row'}}>
                    <View style={{flex:1}}/>
                    <TouchableOpacity style={{justifyContent:'center',alignItems:'center'}}
                     disabled={!this.props.data.length}
                     onPress={() => {this.setState({appeared : true}, () => {  showPopup((h-(2*h/3)),this.state.addressTop); }) } } style={{flex:15,borderWidth:0,alignItems:'center',justifyContent:'center'}}>
                        <Text allowFontScaling={false}
                         style={{color:'black',fontSize:scale(17),fontFamily:'Gilroy-SemiBold',letterSpacing:1}} >Select your address</Text>
                    </TouchableOpacity>
                    <View style={{flex:1}}/>
                </View>
                <View style={{height:verticalScale(60)}}>
                    <SearchBar title="search for dishes and cuisines" />
                </View>
                <ScrollView 
                 refreshControl={
                     <RefreshControl 
                      colors={['red','orange','rgb(51,148,24)']}
                      refreshing={this.state.refreshing} 
                      onRefresh={() => this.refreshFunction()} />
                 }
                 ref={ref => {
                    this.scrollview_refMain = ref ;
                       }}
                 onScroll={(event) => handleMainScrollView(event)}
                //  {...this.PanResponder.panHandlers}
                 showsVerticalScrollIndicator={false} stickyHeaderIndices={[1]} >
                    <View style={{height:verticalScale(200),borderWidth:0,backgroundColor:'red'}}>
                        <ScrollView 
                          horizontal={true} pagingEnabled={true} showsHorizontalScrollIndicator={false} >
                            <View style={{width:w,backgroundColor:'white'}}>
                                <CarouselComponent image={require('../StaticImages/loadingImage.png')} />
                            </View>
                            <View style={{width:w,backgroundColor:'white'}}>
                                <CarouselComponent image={require('../StaticImages/loadingImage.png')} />
                            </View>
                            <View style={{width:w,backgroundColor:'white'}}>
                                <CarouselComponent image={require('../StaticImages/loadingImage.png')} />
                            </View>
                        </ScrollView>
                    </View>
                    <View style={{height:verticalScale(60),backgroundColor:'white'}}>
                        <ScrollView 
                          ref={ref => {
                            this.scrollview_ref = ref ;
                               }}
                          pagingEnabled={false}
                          horizontal={true} showsHorizontalScrollIndicator={false} >
                            <View style={{width:0.02*w,borderWidth:0}} />
                            <TouchableOpacity onPress={() => {this.props.data.length?deciderOne(true):null}} style={{height:verticalScale(60)}}>
                              <TopBar focused={this.state.focusedOne} width={0.32*w} title="Today's Menu" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {this.props.data.length?deciderTwo(true):null}} style={{height:verticalScale(60)}} >
                               <TopBar focused={this.state.focusedTwo} width={w*0.55} title="Make your own combo" />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {this.props.data.length?deciderThree(true):null}} style={{height:verticalScale(60)}} >
                               <TopBar focused={this.state.focusedThree} width={w*0.6} title="All day breakfast & snacks" />
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                    <View style={{height:verticalScale(40),borderWidth:0,flexDirection:'row'}}>
                        <TouchableOpacity onPress={() => {this.props.data.length?this.setState({showNutrition : !this.state.showNutrition}):null} }
                           style={{flex:3.5,borderWidth:0,justifyContent:'center',alignItems:'flex-end'}}>
                            <Text allowFontScaling={false}
                             style={this.state.showNutrition?{fontFamily:'Gilroy-SemiBold',color:'rgb(51,148,24)'}:{fontFamily:'Gilroy-SemiBold',color:'gray'}}>Nutrition Value</Text>
                        </TouchableOpacity>
                        <View style={{flex:1,borderWidth:0,justifyContent:'center',alignItems:'center'}}>
                           <Switch
                              value={this.state.showNutrition}
                              onValueChange={() => {this.props.data.length?this.setState({showNutrition : !this.state.showNutrition}):null} } />
                        </View>
                    </View>
                    {this.props.data.length?<ScrollView 
                      disableIntervalMomentum={true}
                      onScroll={(event) => handle(event)}
                      ref={ref => {
                            this.scrollview_reff = ref ;
                               }}
                       horizontal={true} 
                       pagingEnabled={true} >
                        <View style={{width:w,backgroundColor:'white'}}>
                            <DataComponent 
                             selectItem={(item) => {this.props.selectItem(item) } }
                             itemPressHandler={() => {this.setState({appeared : true}, () => {  showPopup((h-(3*h/4)),this.state.addItemTop); }) } }
                             data={this.props.data} 
                             showNutrition={this.state.showNutrition} />
                        </View>
                        <View style={{width:w,height:400,backgroundColor:'white'}}></View>
                        <View style={{width:w,height:400,backgroundColor:'blue'}}></View>
                    </ScrollView>:<StaticComponent />}

                    {/* in place of null we would fetch array of data from servers and show them in above three placed views inside scrollView */}
                </ScrollView>
                <PopBackground whiteScreen={() => { hidePopup((h),this.state.addressTop,this.state.addItemTop); }} isAppeared={this.state.appeared} opacity={this.state.opacity} />
                <Animated.View style={[{...style.commonPopStyles},{transform : [{
                    translateY : this.state.addressTop
                }]}]} >
                   <AddressPopUp whiteScreen={() => { hidePopup((h), this.state.addressTop, this.state.addItemTop); }} />
                </Animated.View>

                <Animated.View style={[{...style.commonPopStyles},{transform :[{
                    translateY : this.state.addItemTop
                }]}]} >
                  <AddItemPopUp 
                    addItemToCart={(item) => {this.props.addItemToCart(item); hidePopup((h), this.state.addressTop, this.state.addItemTop); } } 
                    selectedItem={this.props.selectedItem} 
                    whiteScreen={() => { hidePopup((h), this.state.addressTop, this.state.addItemTop); }} />
                </Animated.View>

         </View>
        )
    }
};

const style = StyleSheet.create({
   commonPopStyles : {
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
    console.log("from map state to props from home");
    console.log(state.dataReducer.data);
    console.log(state.cartReducer.items_in_cart);
    return {
       data : state.dataReducer.data,
       selectedItem : state.dataReducer.selectedItem
    }
}

export default connect(mapStateToProps,{ findData, selectItem, addItemToCart })(Home);

