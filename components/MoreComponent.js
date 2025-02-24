import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

class More extends Component {

    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                <TouchableOpacity 
                style={styles.registerView}
                onPress={() => navigate('Register')}>
                    <Text style={styles.buttonText} adjustsFontSizeToFit>
                        Register
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.registerView}
                onPress={() => navigate('Appointments')}>
                    <Text style={styles.buttonText}
                            adjustsFontSizeToFit >
                            Appointments
                        </Text>
                </TouchableOpacity>
                    <TouchableOpacity
                    style={styles.registerView}
                        onPress={() => navigate('Contact')}
                    >
                        <Text style={styles.buttonText}
                            adjustsFontSizeToFit
                        >
                            Contact
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => Linking.canOpenURL("fb://page/1515073285379894").then(supported => {
                            if (supported) {
                                return Linking.openURL("fb://page/1515073285379894");
                            } else {
                                return Linking.openURL("https://www.facebook.com/massageknox");
                            }
                        })}
                        style={styles.registerView}
                    >
                        <Text style={styles.buttonText}
                            adjustsFontSizeToFit
                        >
                            Facebook
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigate('Giftcards')}
                        style={styles.registerView}
                    >
                        <Text style={styles.buttonText}
                            adjustsFontSizeToFit
                        >
                            Gift Cards
                        </Text>
                    </TouchableOpacity>
            </ScrollView>
        );
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: '#2ea3f2',
        paddingTop: 20
    },
    linkContainer: {
        backgroundColor: '#08678C',
        borderStyle: 'solid',
        paddingVertical: '5%',
        borderStyle: 'solid',
        borderColor: '#F2B705',
        borderWidth: 2,
        marginBottom: '2%',
        marginVertical: '2%',
        paddingHorizontal: '1%'
    },
    button: {
        color: '#F2B705',
        height: 40,
        marginVertical: '2%'
    },
    buttonText: {
        fontSize: 25,
        color: 'black'
    },
    registerView: {
        backgroundColor: '#F2B705',
            marginVertical: '3%',
            marginHorizontal: '5%',
            paddingVertical: '2%',
            paddingHorizontal: '5%',
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            width: '70%',
            alignSelf: 'flex-start',
            shadowColor: '#000',
            shadowOffset: {
                width: 0,
                height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84
        },
})

export default More;