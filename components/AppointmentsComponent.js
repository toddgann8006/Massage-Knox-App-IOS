import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

class Appointments extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.textContainer}>
                        <Text style={styles.body}>
                        We are open by appointment only. You can book online or by messaging Shannon. 
If booking for a new client, they will need to fill out an intake form and minors will need a parent/guardian present.
                        </Text>
                        <Text style={styles.body}>
                       Please note, we cannot accept Nourish Skin Studio’s gift cards, rewards, or discounts. If you have a gift card, reward, or discount, please confirm that it is from Massage Knox before booking.
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://www.vagaro.com/us04/massageknoxbyshannoncox')}
                            style={styles.button}
                        >
                            <Text style={styles.button}>Book Now</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                            style={styles.button}
                        >
                            <Text style={styles.button}>Message</Text>
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
        marginTop: 0,
        backgroundColor: '#2ea3f2'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ea3f2',
        marginTop: 0,
        marginBottom: 30
    },
    textContainer: {
        backgroundColor: '#F2B705',
        marginVertical: '5%',
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '90%',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    header: {
        fontSize: 30,
        color: 'black',
        marginVertical: '5%',
        justifyContent: 'center'
    },
    headerContainer: {
        backgroundColor: '#F2B705',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: '4%'
    },
    registerView: {
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '90%',
        marginTop: 20
    },
    body: {
        color: 'black',
        marginTop: '3%',
        fontSize: 18,
        lineHeight: 30,
    },
    centertext: {
        textAlign: 'center',
        fontSize: 18,
        color: 'black'
    },
    buttonView: {
        flex: 1,
        width: '50%',
        height: 40,
        backgroundColor: '#F2B705',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        color: '#08678C',
        borderRadius: 10,
        fontWeight: 'bold',
        marginHorizontal: '10%'
    },
    button: {
        fontSize: 18,
        color: 'black'
    }
})

export default Appointments;