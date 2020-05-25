import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faClone } from '@fortawesome/free-solid-svg-icons';

import Home from './src/pages/home/Home';
import Test from './src/pages/test/Test';

import * as CONSTANTS from './src/config/constants.json';

const screenOption = {
    headerStyle: {
        backgroundColor: CONSTANTS.THEME.HEADING,
    },
    headerTintColor: "#000",
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

const HomeStack = createStackNavigator();
const TestStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator
        screenOptions={screenOption}
    >
        <HomeStack.Screen
            name="Home"
            component={Home}
        />
    </HomeStack.Navigator>
);

const TestStackScreen = () => (
    <TestStack.Navigator
        screenOptions={screenOption}
    >
        <TestStack.Screen
            name="Test"
            component={Test}
        />
    </TestStack.Navigator>
);

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                        let iconName;

                        if (route.name === 'Home') {
                            iconName = faHome;
                        } else if (route.name === 'Test') {
                            iconName = faClone;
                        }

                        // You can return any component that you like here!
                        return <FontAwesomeIcon icon={iconName} color={color} />;
                    },
                })}
                tabBarOptions={{
                    activeTintColor: CONSTANTS.THEME.ACTIVE,
                    inactiveTintColor: CONSTANTS.THEME.INACTIVE,
                    style: {
                        backgroundColor: CONSTANTS.THEME.HEADER,
                        height: 50,
                    },
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeStackScreen}
                />
                <Tab.Screen
                    name="Test"
                    component={TestStackScreen}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
