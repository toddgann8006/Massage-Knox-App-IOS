import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

class Giftcards extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.header}>
                        Gift Cards
                    </Text>
                </View>
                <View style={styles.view}>
                    <View style={styles.textContainer}>
                        <Text style={styles.body}>
                            Click the button below to purchase  e-Gift Cards. You will be given the option to email your voucher to yourself or someone else as a gift.  And you can even choose the date it is sent to your loved one so as not to ruin the surprise! Or print it and gift it in person! If you are sending it to yourself or want to print it to give in person, click the box that says "I want to send this to myself."  Your receipt and the gift card will be sent in separate emails so make sure to look for both as the actual gift card contains the redemption code.
                        </Text>
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.smallheader}>
                            Massage prices are as follows:
                        </Text>
                        <Text style={styles.price}>
                            30 minutes: $45
                        </Text>
                        <Text style={styles.price}>
                            45 minutes: $55
                        </Text>
                        <Text style={styles.price}>
                            60 minutes: $65
                        </Text>
                        <Text style={styles.price}>
                            90 minutes: $90
                        </Text>
                        <Text style={styles.price}>
                            120 minutes: $130
                        </Text>
                    </View>
                    <View style={styles.registerView}>
                        <Text style={styles.body}>
                            Give the gift of massage therapy by clicking the button below!
                        </Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://squareup.com/gift/4CSXHA6RBTHT0/order')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}
                            adjustsFontSizeToFit
                            >Purchase</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.registerView}>
                        <Text style={styles.body}>
                            If you have questions about purchasing the gift cards or need help, please feel free to email!
                        </Text>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                            style={styles.button}
                        >
                            <Text style={styles.buttonText}
                            adjustsFontSizeToFit
                            >Email</Text>
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
    header: {
        fontSize: 40,
        color: 'yellow',
        marginTop: '5%'
    },
    headerContainer: {
        backgroundColor: 'black',
        alignItems: 'center',
        marginBottom: '5%',
        paddingBottom: '5%'
    },
    view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0,
        marginBottom: '5%',
        paddingHorizontal: '3%'
    },
    textContainer: {
        alignItems: "flex-start",
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        marginTop: '7%',
        paddingVertical: '5%',
        marginHorizontal: '5%',
        width: '90%'
    },
    registerView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '90%',
        marginTop: '7%'
    },
    smallheader: {
        fontSize: 25,
        color: 'yellow',
        marginTop: '5%',
        paddingLeft: '5%'
    },
    body: {
        color: 'yellow',
        marginTop: '5%',
        fontSize: 18,
        lineHeight: 30,
        paddingLeft: '5%'
    },
    price: {
        color: 'white',
        marginTop: '5%',
        fontSize: 18,
        lineHeight: 30,
        paddingLeft: '5%'
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '70%',
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
    },
});

export default Giftcards;