import React, { Component } from "react";
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Services from "./ServicesComponent";

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        initialRouteName: 'About',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const ServicesNavigator = createStackNavigator(
    {
        Services: { screen: Services }
    },
    {
        initialRouteName: 'Services',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: 'yellow',
            headerTitleStyle: {
                color: 'yellow'
            }
        }
    }
);

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Services: { screen: ServicesNavigator }
    },
    {
        drawerBackgroundColor: 'yellow'
    }
);

const AppNavigator = createAppContainer(MainNavigator);

class Main extends Component {
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}>
                <AppNavigator />
            </View>
        );
    }
}

export default Main;