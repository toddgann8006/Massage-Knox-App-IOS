import React, { Component } from "react";
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Services from "./ServicesComponent";
import Appointments from "./AppointmentsComponent";
import Giftcards from "./GiftcardsComponent";
import Rewards from "./RewardsComponent";
import Scanner from "./ScannerComponent";
import { connect } from 'react-redux';

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
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const AppointmentsNavigator = createStackNavigator(
    {
        Appointments: { screen: Appointments }
    },
    {
        initialRouteName: 'Appointments',
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

const GiftcardsNavigator = createStackNavigator(
    {
        Giftcards: { screen: Giftcards }
    },
    {
        initialRouteName: 'Giftcards',
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

const RewardsNavigator = createStackNavigator(
    {
        Rewards: { screen: Rewards },
        Scanner: { screen: Scanner }
    },
    {
        initialRouteName: 'Rewards',
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

const MainNavigator = createDrawerNavigator(
    {
        Home: { screen: HomeNavigator },
        About: { screen: AboutNavigator },
        Services: { screen: ServicesNavigator },
        Appointments: { screen: AppointmentsNavigator },
        Giftcards: { screen: GiftcardsNavigator },
        Rewards: { screen: RewardsNavigator }
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

export default connect()(Main);