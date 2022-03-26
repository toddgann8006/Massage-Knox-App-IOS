import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Linking } from 'react-native';

class More extends Component {
    
    render() {
        const { navigate } = this.props.navigation;
        return (
            <ScrollView style={styles.container}>
                    <View style={styles.registerView}>
                    <TouchableOpacity
                        onPress={() => navigate('Register')}
                        style={styles.button}
                    >
                        <Text style={styles.buttonText}>
                            Register
                        </Text>
                    </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity 
                        onPress={() => navigate('Contact')}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>
                            Contact
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity 
                        onPress={() => Linking.canOpenURL("fb://profile/1515073285379894").then(supported => {
                            if (supported) {
                              return Linking.openURL("fb://profile/1515073285379894");
                            } else {
                              return Linking.openURL("https://www.facebook.com/massageknox");
                            }
                          })}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>
                            Facebook
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity 
                        onPress={() => navigate('Services')}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>
                            Services
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity 
                        onPress={() => navigate('Giftcards')}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>
                            Gift Cards
                        </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity 
                        onPress={() => navigate('Appointments')}
                        style={styles.button}
                        >
                        <Text style={styles.buttonText}>
                            Appointments
                        </Text>
                        </TouchableOpacity>
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
    linkContainer: {
        backgroundColor: 'black',
        borderStyle: 'solid',
        paddingVertical: '5%',
        borderStyle: 'solid',
        borderColor: 'yellow',
        borderWidth: 2,
        marginBottom: 15,
        marginHorizontal: '2%',
        paddingHorizontal: 5
    },
    button: {
        color: 'yellow',
        height: 40,
        marginBottom: 10
    },
    buttonText: {
        fontSize: 30,
        color: 'yellow'
    },
    registerView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        marginHorizontal: '2%',
        marginTop: '5%'
    }
});

export default More;