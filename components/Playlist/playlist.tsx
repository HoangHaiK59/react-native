import React from 'react';
import {View, StyleSheet} from 'react-native';

import Animated from 'react-native-reanimated';
import Cover from './Cover/cover';
import Content from './Content/content';
import {Playlist} from './model';

const { Value } = Animated;

const playlist: Playlist = {
    name: 'Chillies',
    release: 2020,
    cover: {uri: 'https://i.scdn.co/image/ab67616d0000b273e54dbaeef3ecd65e72e2a545'},
    tracks: [
        {name: 'Cảm Ơn Và Xin Lỗi', artist: 'Chillies'},
        {name: 'Và Thế Là Hết', artist: 'Chillies'},
        {name: 'LẦN CUỐI (đi bên em xót xa người ơi)', artist: 'Ngọt'},
        {name: 'Mascara', artist: 'Chillies'},
        {name: 'Có Em Đời Bỗng Vui', artist: 'Chillies'},
        {name: 'Vùng Ký Ức', artist: 'Chillies'},
        {name: 'Những Con Đường Song Song', artist: 'Chillies'},
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
            <Cover {...{playlist, y}}/>
            <Content {...{playlist, y}} />
        </View>
    )
}
