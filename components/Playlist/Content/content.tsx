import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import Animated from 'react-native-reanimated';
import { MIN_HEADER_HEIGHT, MAX_HEADER_HEIGHT, Playlist } from '../model';
import ShufflePlay, { BUTTON_HEIGHT } from '../Shuffle/shuffle';
import { onScrollEvent } from 'react-native-redash';
import Track from '../Track/track';
import Header from '../Header/header';
import {LinearGradient} from 'expo-linear-gradient'

const {interpolate, Extrapolate} = Animated;

interface ContentProps {
    playlist: Playlist,
    y: Animated.Value<number>
}

export default({playlist: {name, tracks}, y}: ContentProps) => {
    const height = interpolate(y, {
        inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
        outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
        extrapolate: Extrapolate.CLAMP,
      });
      const opacity = interpolate(y, {
        inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
        outputRange: [0, 1, 0],
        extrapolate: Extrapolate.CLAMP,
      });
    return (
        <Animated.ScrollView
        onScroll={onScrollEvent({ y })}
        style={styles.container}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={1}
        stickyHeaderIndices={[1]}
        >
            <View style={styles.cover}>
                <Animated.View
                    style={[styles.gradient, { height }]}
                >
                    <LinearGradient
                    style={StyleSheet.absoluteFill}
                    start={[0, 0.3]}
                    end={[0, 1]}
                    colors={["transparent", "rgba(0, 0, 0, 0.2)", "black"]}
                    />
                </Animated.View>
                <View style={styles.playlistContainer}>
                    <Animated.Text style={[styles.playlist, {opacity}]}>{name}</Animated.Text>
                </View>
            </View>
            <View style={styles.header}>
                <Header {...{name , y}}/>
                <ShufflePlay />
            </View>
            <View style={styles.tracks}>
                {
                    tracks.map((track, id) => <Track key={id} index={id + 1} {...{track, id}}/>)
                }
            </View>
        </Animated.ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
  },
  cover: {
    height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
  },
  gradient: {
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    alignItems: "center",
  },
  playlistContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  playlist: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    fontWeight: "bold",
  },
  header: {
    marginTop: -BUTTON_HEIGHT,
  },
  tracks: {
    paddingTop: 32,
    backgroundColor: "black",
  },
})