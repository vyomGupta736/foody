import React from 'react';
import {View,Text,FlatList,TouchableOpacity} from 'react-native';
import ShowData from './ShowData';
import { verticalScale } from './Exports';

const DataComponent = ({data,showNutrition,itemPressHandler,selectItem}) => {
    console.log("from data component");
    console.log(data);
    return (
       <FlatList 
         data={data}
         keyExtractor={(item) => item.name}
         renderItem={({item}) => {
             console.log(item);
             return (
                 <TouchableOpacity 
                  onPress={() => { selectItem(item); itemPressHandler(); }}
                  style={{height:verticalScale(100)}} >
                    <ShowData 
                        HeaderTitle={item.name} comments={item.comments}
                        calories={item.calories} fats={item.fats}
                        sodium={item.sodium} cholestrol={item.cholestrol}
                        proteins={item.proteins} cost={item.price}
                        imageSource={{uri : item.photoURL}}
                        showNutrition={showNutrition}
                    />
                 </TouchableOpacity>
             )
         }}
       />
    )
};

export default DataComponent;