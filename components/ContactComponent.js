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
                            <Text style={styles.buttonText}>Email</Text>
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
                            <Text style={styles.buttonText}>Find Me On Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        )
    }
}

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
        paddingHorizontal: 20,
        alignItems: 'center',
        marginTop: 20, 
        paddingTop: 15,
        width: '100%',
        marginBottom: 40
    },
    image: {
        width: '70%',
        height: undefined,
        aspectRatio: 1
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
    text: {
        color: 'yellow',
        fontSize: 17,
        marginVertical: 10
    },
    text2: {
        color: 'yellow',
        fontSize: 17,
        marginBottom: 10
    },
    text3: {
        color: 'yellow',
        fontSize: 17
    },
    button: {
        backgroundColor: 'yellow',
        width: '70%',
        height: 40,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20
    },
    buttonText: {
        fontSize: 18,
        color: 'black'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 10,
        paddingHorizontal: '3%'
    },
    textView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        alignItems: 'center',
        padding: 10, 
        width: '100%',
        marginTop: 10,
        marginBottom: 20
    }
})

export default Contact;