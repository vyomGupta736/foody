import React from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';
import styles from './Styles';

export const PopBackground = ({isAppeared,whiteScreen,opacity}) => {
    return (
        <Animated.View
                    style={isAppeared?{...styles.astyles,backgroundColor:'rgba(0,0,0,0.5)',opacity:opacity}:{display:'none'}}>
                    <View style={{flex:1}}>
                        <TouchableOpacity  onPress={() => {whiteScreen();}}
                            style={{height:'100%',width:'100%'}}>
                        </TouchableOpacity>
                    </View>
        </Animated.View>
    )
}