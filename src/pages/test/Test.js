import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Test extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Test</Text>
            </View>
        );
    }
}

export default Test;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
