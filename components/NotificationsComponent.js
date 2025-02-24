import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, ScrollView, Alert } from 'react-native';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

class Notifications extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notifications: []
        }
    };

    componentDidMount() {
        this.getNotifications();
    };

    // Gets all unopened notifications for the app from the Notification center and adds then to notifications array in state

    getNotifications(){
        PushNotificationIOS.getDeliveredNotifications((all) => {
            console.log(all, "notifications list");
            this.setState({notifications: all})
        })
    };

    // Deletes all notifications for the app from the Notification center and sets notification array in state to empty

    deleteNotifications(){
        PushNotificationIOS.removeAllDeliveredNotifications();
        this.setState({notifications: []})
    };

    render() {

// Maps over items in notification array in state and displays the Body and Date of each notification

const notif = this.state.notifications.map((notif, i) => {
    return (
        <View key={i} style={styles.notificationsContainer}>
            <Text style={styles.notificationsText}>
                {new Date(notif.date).toLocaleDateString('en-US')}
                {" "}
                {notif.body}
            </Text>
        </View>
    )
})

// Checks if there are any notifications in the notifications array in state. If none are found, displays no new notifications
        if(notif.length === 0){
            return (
                <ScrollView style={styles.container}>
                <View style={styles.notificationsContainer}>
                    <Text style={styles.notificationsText}
                    adjustsFontSizeToFit
                    >No New Notifications</Text>
                </View>
                </ScrollView>
            )
        }
// Displays all notifications in the notifications array in state and adds a button to remove them if the user wants
        return (
            <ScrollView style={styles.container}>
                    {notif}
                    <View style={styles.registerView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => {
                                Alert.alert(
                                    `Are you sure you want to delete all Notifications?`,
                                    "Click Ok to continue or Cancel to go back.",
                                    [
                                        {
                                            text: 'OK',
                                            onPress: () => this.deleteNotifications()
                                        },
                                        {
                                            text: 'Cancel',
                                            onPress: () => console.log('Cancelled')
                                        }
                                    ],
                                    { cancelable: true }
                                );
                            }}
                        >
                            <Text style={styles.buttonText}
                            adjustsFontSizeToFit
                            >
                                Delete Notifications
                            </Text>
                        </TouchableOpacity>
                        </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
        container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: '#2ea3f2'
    },
        notificationsText: {
            fontSize: 20,
            color: 'black'
        },
        notificationsContainer: {
            backgroundColor: '#F2B705',
            marginVertical: '5%',
            paddingVertical: '3%',
            paddingHorizontal: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            width: '90%',
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84
        },
        registerView: {
            width: '50%',
            backgroundColor: '#F2B705',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '5%',
            paddingVertical: '3%',
            borderRadius: 10,
            alignSelf: 'center',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84
        },
        button: {
            backgroundColor: '#F2B705',
            color: 'black',
            fontSize: 18,
        },
        buttonText: {
            fontSize: 18,
            color: 'black'
        }
})

export default Notifications