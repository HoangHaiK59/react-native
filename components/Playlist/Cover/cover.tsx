import React from 'react';
import { Image, StyleSheet } from 'react-native';
import Animated from 'react-native-reanimated';
import {Playlist, MAX_HEADER_HEIGHT, HEADER_DELTA} from '../model';
import {BUTTON_HEIGHT} from '../Shuffle/shuffle';

const {interpolate, Extrapolate} = Animated;

interface CoverProps {
    playlist: Playlist,
    y: Animated.Value<number>
}

export default ( {playlist: {cover}, y}: CoverProps) => {
    const scale: any = interpolate(y, {
        inputRange: [- MAX_HEADER_HEIGHT, 0],
        outputRange: [4 , 1],
        extrapolateRight: Extrapolate.CLAMP
    });
    const opacity = interpolate(y, {
        inputRange: [-64, 0 , HEADER_DELTA],
        outputRange: [0, 0.2, 1],
        extrapolateRight: Extrapolate.CLAMP
    })
    return(
        <Animated.View style={[styles.container, {transform: [{scale}]}]}>
            <Image source={cover} style={styles.image}/>
            <Animated.View style={{...StyleSheet.absoluteFillObject, backgroundColor: 'black', opacity}} />
        </Animated.View>
    )
}

const styles= StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        height: MAX_HEADER_HEIGHT + BUTTON_HEIGHT * 2
    },
    image: { 
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined
    }
})