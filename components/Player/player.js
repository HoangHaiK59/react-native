import React from 'react';
import { View, Text } from 'react-native';

class Player extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return <View style={{backgroundColor: '#3b3c3d', height: 50, borderWidth: 1}}>
            <Text style={{color: 'black'}}>Player work!</Text>
        </View>
    }
}

export default Player;