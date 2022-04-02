import React, { Component } from "react";
import { View, Platform } from 'react-native';
import { connect } from 'react-redux';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
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

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home }
    },
    {
        initialRouteName: 'Home',
        defaultNavigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
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
        defaultNavigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const NotificationsNavigator = createStackNavigator(
    {
        Notifications: { screen: Notifications}
    },
    {
        initialRouteName: 'Notifications',
        defaultNavigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const MoreNavigator = createStackNavigator(
    {
        More: { screen: More},
        Contact: { screen: Contact },
        Services: { screen: Services },
        Giftcards: { screen: Giftcards },
        Appointments: { screen: Appointments },
        Register: { screen: Register }
    },
    {
        initialRouteName: 'More',
        defaultNavigationOptions: () => ({
            headerStyle: {
                backgroundColor: '#000000'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        })
    }
);

const MainNavigator = createBottomTabNavigator(
    {
        Home: { screen: HomeNavigator },
        Rewards: { screen: RewardsNavigator },
        Notifications: { screen: NotificationsNavigator},
        More: { screen: MoreNavigator}
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
              const { routeName } = navigation.state;
              let IconComponent = Ionicons;
              let iconName;
              if (routeName === 'Home') {
                iconName = `home${focused ?
                  '' : '-outline'
                }`;
              } else if (routeName === 'Rewards') {
                iconName = `cash${focused ?
                  '' : '-outline'
                }`;
              } else if (routeName === 'Notifications') {
                iconName = `notifications${focused ?
                  '' : '-outline'
                }`;
              } else if (routeName === 'More') {
                iconName = `reorder-four${focused ?
                  '' : '-outline'
                }`;
              }
              return <IconComponent
                       name={iconName}
                       size={25}
                       color={tintColor}
                     />;
            },
          }),
          tabBarOptions: {
            activeTintColor: 'black',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: 'yellow',
              },
          },
        }
);

const AppNavigator = createAppContainer(MainNavigator);



class Main extends Component {

    componentDidMount() {
        const email = this.props.email.email
        if (email.length > 0) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        };
    };

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    paddingTop: Platform.OS === 'ios' ? 0 : 30,
                    marginLeft: Platform.OS === 'ios' ? 0 : 20,
                    marginRight: Platform.OS === 'ios' ? 0 : 20
                }}>
                <AppNavigator />
            </View>
        );
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);