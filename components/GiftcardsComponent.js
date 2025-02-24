import React, { Component } from "react";
import { ScrollView, StyleSheet, Text, View, Linking, TouchableOpacity } from 'react-native';

class Giftcards extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.textContainer}>
                        <Text style={styles.body}>
                        You can send your gift card directly to the recipient, now or on a specified date. If you want to print it to give them a paper gift card, choose the option to send it to yourself. Please note, if you send it to yourself, you will receive two emails. One is your receipt, the other your gift card. Your recipient (or you) will need the gift card with the 16 digit gift card code to redeem the gift card. Gift cards are for dollar amounts, not particular services. Massage prices are subject to periodic increase. The value of your gift card is the dollar amount purchased. For current pricing, visit massageknox.com.
                        </Text>
                        <Text style={styles.body}>
                        Please make sure and save your email (or printed copy) with the 16 digit gift card code. Gift cards are not redeemable without the 16 digit gift card code. Due to the current structure laid out by our gift card provider, we must abide by this.
                        </Text>
                    </View>
                    <View style={styles.buttonView}>
                        <TouchableOpacity
                            onPress={() => Linking.openURL('https://squareup.com/gift/4CSXHA6RBTHT0/order')}
                            style={styles.button}
                        >
                            <Text style={styles.button}
                            adjustsFontSizeToFit
                            >Purchase</Text>
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
        marginTop: '1%',
        paddingHorizontal: '3%'
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
        color: 'black',
        fontSize: 17,
        marginVertical: '2%'
    },
    price: {
        color: 'white',
        marginTop: '5%',
        fontSize: 18,
        lineHeight: 30,
        paddingLeft: '5%'
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
    }
});

export default Giftcards;