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
            return(
                <View style={styles.notificationsContainer}>
                <Text 
                style={styles.notificationsText}
                key={i}>
                    {notif.date = new Date().toLocaleDateString('en-US')}
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
                    <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Notifications
                    </Text>
                    </View>
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
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Notifications
                    </Text>
                </View>
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
            backgroundColor: 'rgb(38,32,0)'
        },
        header: {
            fontSize: 40,
            color: 'yellow',
            marginTop: '5%'
        },
        headerContainer: {
            backgroundColor: 'black',
            alignItems: 'center',
            marginBottom: '4%'
        },
        notificationsText: {
            fontSize: 20,
            color: 'yellow'
        },
        notificationsContainer: {
            backgroundColor: 'black',
            borderStyle: 'solid',
            paddingVertical: '5%',
            borderStyle: 'solid',
            borderColor: 'yellow',
            borderWidth: 2,
            marginBottom: '3%',
            marginHorizontal: '2%',
            paddingHorizontal: '2%'
        },
        registerView: {
            borderColor: 'yellow',
            borderStyle: 'solid',
            borderWidth: 2,
            backgroundColor: 'black',
            paddingHorizontal: '20%',
            alignItems: 'center',
            marginHorizontal: '2%',
            marginTop: '25%'
        },
        button: {
            backgroundColor: 'yellow',
            width: '80%',
            height: 40,
            marginTop: '5%',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 30,
            marginBottom: '5%'
        },
        buttonText: {
            fontSize: 18,
            color: 'black'
        }
})

export default Notifications