import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated from 'react-native-reanimated';
import Cover from './Cover/cover';
import Content from './Content/content';
import { Album } from './model';

const { Value } = Animated;

const album: Album = {
    name: "Remote Control",
    artist: "Jan Blomqvist",
    release: 2016,
    // eslint-disable-next-line global-require
    cover: {uri: 'https://i.scdn.co/image/ab67706f00000002a3d6894274e9105a4d1bec38'},
    tracks: [
      { name: "Stories Over" },
      { name: "More", artist: "Jan Blomqvist, Elena Pitoulis" },
      { name: "Empty Floor" },
      { name: "Her Great Escape" },
      { name: "Dark Noise" },
      { name: "Drift", artist: "Jan Blomqvist, Aparde" },
      { name: "Same Mistake" },
      {
        name: "Dancing People Are Never Wrong",
        artist: "Jan Blomqvist, The Bianca Story"
      },
      { name: "Back in the Taxi" },
      { name: "Ghosttrack" },
      { name: "Just OK" },
      { name: "The End" }
    ]
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "black"
    }
});

export default () => {
    const y = new Value(0);
    return (
        <View style={styles.container}>
            <Cover {...{y, album}} />
            <Content {...{y, album}} />
        </View>
    )
}