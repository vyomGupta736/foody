import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import { connect } from 'react-redux';
import { verticalScale, scale } from '../Components/Exports';

class OrderHistory extends React.Component
{
    componentDidMount()
    {
        console.log("hey i am there from order")
    }
    render()
    {
        return (
            <View style={{flex:1,backgroundColor:'white'}}>
                <View style={style.headerStyle}>
                    <Text style={{fontFamily:'Gilroy-SemiBold',fontSize:scale(17)}}>Order History</Text>
                </View>
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
        justifyContent:'center',
        alignItems:'center',
        shadowColor : 'gray',
        shadowOpacity:0.8,
        shadowOffset:{height : 10},
        elevation : 7
    }
})

const mapStateToProps = state => {
    console.log("from map state pf order history");
    return{

    }
}
 
export default connect(mapStateToProps,null)(OrderHistory);