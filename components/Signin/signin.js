import React from 'react';
import {StyleSheet, View} from 'react-native';
import { Button, Text} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Actions } from 'react-native-router-flux';

export default function SignIn(props) {
    const handleLogin = () => {
      Actions.push('/');
    }
    return (
        <View style={styles.container}>
          <Text style={{color: '#b5b3ac',  fontSize: 18, marginBottom: 20, fontWeight: 'bold'}}>
            Pick up your music right where you left off.
          </Text>
          <Button onPress={handleLogin} titleStyle={{fontSize: 15, fontWeight: 'bold'}} buttonStyle={{backgroundColor: '#1fbf5a', width: 150, borderRadius: 500 }}  title=" SIGN IN" icon= {
            <Icon name="spotify" size={25}/>
          } />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1f2021',
    alignItems: 'center',
    justifyContent: 'center',
  },
});