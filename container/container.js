import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from '../components/Home/home';
import SignIn from '../components/Signin/signin';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import Player from '../components/Player/player';
import Navbar from '../components/Navbar/navbar';

const SettingButton = () => {
    return (
        <View style={{marginRight: 10}}>
            <TouchableOpacity>
                <Icon name="settings" color="white" size={15}/>
            </TouchableOpacity>
        </View>
    )
}

const BackButton = () => {
    return (
        <View style={{marginLeft: 10}}>
            <TouchableOpacity>
                <Icon name={'arrow-left'} color="white" size={15}/>
            </TouchableOpacity>
        </View>
    )
}

export default function Container () {
    return (
        <View style={{width: '100%', height: '100%'}}>
            <Router navigationBarStyle={{ backgroundColor: '#1f2021', borderBottomWidth:0, elevation: 0}}>
                <Scene key="root">
                    <Scene key="signin" component={SignIn} initial={true}/>
                    <Scene key="/" tintColor="white" renderRightButton={SettingButton} component={Home} />
                </Scene>
            </Router>
            <Player />
            <Navbar />
        </View>
    )
}