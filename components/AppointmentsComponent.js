import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

class Appointments extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Appointments
                    </Text>
                </View>
                <View style={styles.view}>
                    <View style={styles.textContainer}>
                        <Text style={styles.body}>
                            If this is your first visit in over a year, you will need to fill out a new massage customization form so plan to arrive a few minutes early. If the client is under 18, a parent/guardian will need to be present to sign the consent at the bottom of the form. If the client is under 16, a parent/guardian will need to stay with  their child  during their appointment.
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.body}>
                            ***Please be advised, I cannot accept Nourish Skin Studio's online gift cards, birthday or in-app rewards. If you have an e-gift card, reward or other discount, please confirm that it is from Massage Knox. And check the website and facebook for any current promotions.***
                        </Text>
                    </View>
                    <View style={styles.registerView}>
                        <Text style={styles.centertext}>
                            To schedule an  appointment,
                        </Text>
                        <Text style={styles.centertext}>
                            click this button:
                        </Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.vagaro.com/us04/massageknoxbyshannoncox')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <Text style={styles.centertext}>
                            You can also email
                        </Text>
                        <Text style={styles.centertext}>
                            me to schedule!
                        </Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}>Email</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0,
        marginBottom: 30
    },
    textContainer: {
        alignItems: "center",
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        marginVertical: '3%',
        paddingVertical: '2%',
        marginHorizontal: '5%'
    },
    header: {
        fontSize: 40,
        color: 'yellow',
        marginTop: 30
    },
    headerContainer: {
        backgroundColor: 'black',
        alignItems: 'center',
        marginBottom: 20,
        paddingBottom: 10
    },
    registerView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '90%',
        marginTop: 20
    },
    body: {
        color: 'yellow',
        marginTop: '3%',
        fontSize: 18,
        lineHeight: 30,
    },
    centertext: {
        textAlign: 'center',
        fontSize: 18,
        color: 'yellow'
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '70%',
        height: 40,
        marginTop: 25,
        marginBottom: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    }
})

export default Appointments;