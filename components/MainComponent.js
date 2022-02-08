import React, { Component } from "react";
import Constants from 'expo-constants';
import { View, Platform } from 'react-native';
import { Icon } from "react-native-elements";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createAppContainer } from 'react-navigation';
import messaging from '@react-native-firebase/messaging';
import Home from "./HomeComponent";
import About from "./AboutComponent";
import Services from "./ServicesComponent";
import Appointments from "./AppointmentsComponent";
import Giftcards from "./GiftcardsComponent";
import Rewards from "./RewardsComponent";
import Scanner from "./ScannerComponent";
import { fetchNewuser, fetchRewards } from '../redux/ActionCreators';
import { connect } from 'react-redux';

const mapDispatchToProps = {
    fetchNewuser,
    fetchRewards
}

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft:
                <Icon
                    name='bars'
                    onPress={() => navigation.toggleDrawer()}
                    type='font-awesome'
                    color='white'
                />
        })
    }
);

const AboutNavigator = createStackNavigator(
    {
        About: { screen: About }
    },
    {
        initialRouteName: 'About',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft:
                <Icon
                    name='bars'
                    onPress={() => navigation.toggleDrawer()}
                    type='font-awesome'
                    color='white'
                />
        })
    }
);

const ServicesNavigator = createStackNavigator(
    {
        Services: { screen: Services }
    },
    {
        initialRouteName: 'Services',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft:
                <Icon
                    name='bars'
                    onPress={() => navigation.toggleDrawer()}
                    type='font-awesome'
                    color='white'
                />
        })
    }
);

const AppointmentsNavigator = createStackNavigator(
    {
        Appointments: { screen: Appointments }
    },
    {
        initialRouteName: 'Appointments',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft:
                <Icon
                    name='bars'
                    onPress={() => navigation.toggleDrawer()}
                    type='font-awesome'
                    color='white'
                />
        })
    }
);

const GiftcardsNavigator = createStackNavigator(
    {
        Giftcards: { screen: Giftcards }
    },
    {
        initialRouteName: 'Giftcards',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft:
                <Icon
                    name='bars'
                    onPress={() => navigation.toggleDrawer()}
                    type='font-awesome'
                    color='white'
                />
        })
    }
);

const RewardsNavigator = createStackNavigator(
    {
        Rewards: { screen: Rewards },
        Scanner: { screen: Scanner }
    },
    {
        initialRouteName: 'Rewards',
        defaultNavigationOptions: ({ navigation }) => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft:
                <Icon
                    name='bars'
                    onPress={() => navigation.toggleDrawer()}
                    type='font-awesome'
                    color='white'
                />
        })
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

    componentDidMount() {
        this.props.fetchNewuser();
        this.props.fetchRewards();
    }

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

export default connect(null, mapDispatchToProps)(Main);