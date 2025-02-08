import React, { Component } from "react";
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from "./HomeComponent";
import More from "./MoreComponent";
import Contact from "./ContactComponent";
import Services from "./ServicesComponent";
import Appointments from "./AppointmentsComponent";
import Giftcards from "./GiftcardsComponent";
import Rewards from "./RewardsComponent";
import Register from "./RegisterComponent";
import Scanner from "./ScannerComponent";
import Notifications from "./NotificationsComponent";

import { fetchNewuser, fetchRewards } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        email: state.email
    };
};

const mapDispatchToProps = {
    fetchNewuser,
    fetchRewards
};

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const screenOptions = {
    headerStyle: {
        backgroundColor: '#000000'
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        color: '#fff'
    }
};

function HomeStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="HomeScreen" component={Home} />
        </Stack.Navigator>
    );
}

function RewardsStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="RewardsScreen" component={Rewards} />
            <Stack.Screen name="Scanner" component={Scanner} />
        </Stack.Navigator>
    );
}

function NotificationsStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="NotificationsScreen" component={Notifications} />
        </Stack.Navigator>
    );
}

function MoreStack() {
    return (
        <Stack.Navigator screenOptions={screenOptions}>
            <Stack.Screen name="MoreScreen" component={More} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Services" component={Services} />
            <Stack.Screen name="Giftcards" component={Giftcards} />
            <Stack.Screen name="Appointments" component={Appointments} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}

function TabNavigator() {
    return (
        <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
                if (route.name === 'HomeTab') {
                    iconName = focused ? 'home' : 'home-outline';
                } else if (route.name === 'RewardsTab') {
                    iconName = focused ? 'cash' : 'cash-outline';
                } else if (route.name === 'NotificationsTab') {
                    iconName = focused ? 'notifications' : 'notifications-outline';
                } else if (route.name === 'MoreTab') {
                    iconName = focused ? 'reorder-four' : 'reorder-four-outline';
                }
                return <Ionicons name={iconName} size={25} color={color} />;
            },
            tabBarActiveTintColor: 'black',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle: {
                backgroundColor: 'yellow'
            }
        })}
    >
        <Tab.Screen name="HomeTab" component={HomeStack} options={{ headerShown: false, tabBarLabel: 'Home' }} />
        <Tab.Screen name="RewardsTab" component={RewardsStack} options={{ headerShown: false, tabBarLabel: 'Rewards' }} />
        <Tab.Screen name="NotificationsTab" component={NotificationsStack} options={{ headerShown: false, tabBarLabel: 'Notifications' }} />
        <Tab.Screen name="MoreTab" component={MoreStack} options={{ headerShown: false, tabBarLabel: 'More' }} />
    </Tab.Navigator>    
    );
}

class Main extends Component {
    componentDidMount() {
        const email = this.props.email.email;
        if (email.length > 0) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        }
    }

    render() {
        return (
            <View style={{
                flex: 1,
                paddingTop: Platform.OS === 'ios' ? 0 : 30,
                marginLeft: Platform.OS === 'ios' ? 0 : 20,
                marginRight: Platform.OS === 'ios' ? 0 : 20
            }}>
                <NavigationContainer>
                    <TabNavigator />
                </NavigationContainer>
            </View>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);