import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

class User extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Text>User component</Text>
            </View>
        )
    }
}

export default User;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#082440',
      alignItems: 'center',
      justifyContent: 'center',
    },
});