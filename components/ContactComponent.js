import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

class Contact extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.imageView}>
                                            <Image
                                                source={require('./images/headshot.jpg')}
                                                resizeMode='contain'
                                                style={styles.image}
                                                accessibilityLabel='Massage Knox Logo'
                                            />
                                        </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.body}>
                            Shannon Cox,
                        </Text>
                        <Text style={styles.body}>Licensed Massage Therapist</Text>
                        </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                            style={styles.button}
                        >
                            <Text style={styles.button}
                                adjustsFontSizeToFit
                            >Email</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonView}>
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
                            <Text style={styles.button}
                                adjustsFontSizeToFit
                            >Find Me On Facebook</Text>
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
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.43, // Adjust this number based on your image dimensions
        resizeMode: 'contain'
    },
    imageView: {
        backgroundColor: '#2ea3f2',
        paddingHorizontal: '0%', 
        alignItems: 'center',
        width: '90%',
        shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    },

    body: {
        color: 'black',
        fontSize: 17,
        marginVertical: '2%'
    },
    button: {
        fontSize: 18,
        color: 'black'
    },
    buttonView: {
        flex: 1,
        width: '60%',
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
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ea3f2',
        marginTop: '1%',
        paddingHorizontal: '3%'
    },
    textView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: '2%',
        width: '100%',
        marginTop: '2%',
        marginBottom: '3%'
    },
    textContainer: {
        backgroundColor: '#F2B705',
        marginTop: "0%",
        marginBottom: "5%",
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
    }
})

export default Contact;