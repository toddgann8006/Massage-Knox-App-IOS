import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

class Appointments extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.header}>
                    Appointments-
                </Text>
                <Text style={styles.body}>
                    If this is your first visit in over a year, you will need to fill out a new massage customization form so plan to arrive a few minutes early. If the client is under 18, a parent/guardian will need to be present to sign the consent at the bottom of the form. If the client is under 16, a parent/guardian will need to stay with  their child  during their appointment.
                </Text>
                <Text style={styles.yellowtext}>
                    ***Please be advised, I cannot accept Nourish Skin Studio's online gift cards, birthday or in-app rewards. If you have an e-gift card, reward or other discount, please confirm that it is from Massage Knox. If you need a Massage Knox punch card, ask for one at your next appointment! And check this website and facebook for any current promotions.***
                </Text>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.centertext}>
                        To schedule an  appointment,
                    </Text>
                    <Text style={styles.centertext}>
                        click this button:
                    </Text>
                </View>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.vagaro.com/us04/massageknoxbyshannoncox')}
                        style={styles.button}
                    >
                        <Text>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 40 }}>
                    <Text style={styles.centertext}>
                        You can also email
                    </Text>
                    <Text style={styles.centertext}>
                        me to schedule!
                    </Text>
                </View>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                        style={styles.button}
                    >
                        <Text>Email</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 0
    },
    header: {
        fontSize: 40,
        color: 'yellow',
        marginTop: 30,
        paddingLeft: 30
    },
    yellowtext: {
        fontSize: 30,
        color: 'yellow',
        marginTop: 30,
        paddingLeft: 30
    },
    body: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 30,
        paddingLeft: 30
    },
    centertext: {
        textAlign: 'center',
        fontSize: 18,
        color: 'white'
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '50%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    }
})

export default Appointments;
