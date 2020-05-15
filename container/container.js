import React from 'react';
import {Router, Scene} from 'react-native-router-flux';
import Home from '../components/Home/home';
import SignIn from '../components/Signin/signin';
import { TouchableOpacity, View, StatusBar } from 'react-native';
import { Icon } from 'react-native-elements';
import Player from '../components/Player/player';
import Navbar from '../components/Navbar/navbar';
import BottomTab from '../components/BottomTab/bottomTab';
import LoadAssets from '../components/loadAssets';
import Album from '../components/Album';

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

//renderRightButton={SettingButton}

// <Router navigationBarStyle={{ backgroundColor: '#1f2021', borderBottomWidth:0, elevation: 0}}>
// <Scene key="root">
//     <Scene key="signin" component={SignIn} />
//     <Scene key="/" tintColor="white" initial={true}  component={Home} />
// </Scene>
// </Router>

export default function Container () {
    return (
        <LoadAssets >
            <StatusBar barStyle="light-content"/>
            <Album />
            <BottomTab />
        </LoadAssets>
    )
}