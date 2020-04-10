import React from 'react';
import { StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import {
    Router,
    Switch,
    Route,
} from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Home from './src/pages/home/Home';
import Test from './src/pages/test/Test';
import { Header } from './src/templates/Templates';

export default function App() {
    return (
        <View style={styles.container}>
            <Header />
            <Router history={createMemoryHistory()}>
                <Switch>
                    <Route path="/" component={Home} />
                    <Route path="/test" component={Test} />
                </Switch>
            </Router>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
