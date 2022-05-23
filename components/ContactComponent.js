import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, Linking } from 'react-native';

class Contact extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Contact
                    </Text>
                </View>
                <View style={styles.view}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/headshot.jpg')}
                            style={styles.image}
                            accessibilityLabel='Shannon Cox LMT image'
                        />
                        <Text style={styles.text}>
                            Shannon Cox,
                        </Text>
                        <Text style={styles.text2}>Licensed Massage Therapist</Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}
                                adjustsFontSizeToFit
                            >Email</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text3}>
                            located inside Nourish Skin Studio
                        </Text>
                        <Text style={styles.text3}>
                            110 Westfield Rd.
                        </Text>
                        <Text style={styles.text3}>
                            Knoxville, TN 37919
                        </Text>
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
                            <Text style={styles.buttonText}
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
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
    },
    imageView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        alignItems: 'center',
        marginTop: '3%',
        paddingTop: '4%',
        width: '100%',
        marginBottom: '5%'
    },
    image: {
        width: '70%',
        height: undefined,
        aspectRatio: 1
    },
    header: {
        fontSize: 40,
        color: 'yellow',
        marginTop: '2%'
    },
    headerContainer: {
        backgroundColor: 'black',
        alignItems: 'center',
        marginBottom: '3%',
        paddingBottom: '2%'
    },
    text: {
        color: 'yellow',
        fontSize: 17,
        marginVertical: '2%'
    },
    text2: {
        color: 'yellow',
        fontSize: 17,
        marginBottom: '2%'
    },
    text3: {
        color: 'yellow',
        fontSize: 17,
        marginBottom: '1%'
    },
    button: {
        backgroundColor: 'yellow',
        width: '70%',
        height: 40,
        marginTop: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: '3%'
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
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
    }
})

export default Contact;