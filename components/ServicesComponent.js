import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from 'react-native';

class Services extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.header}>
                    Services-
                </Text>
                <Text style={styles.body}>
                    ***Full sinus and TMJ massage is once again available upon request! If you would like this service during your session, please request it at your appointment! There is no additional charge for this service.***
                </Text>
                <Text style={styles.smallheader}>
                    Customized Massage:
                </Text>
                <Text style={styles.body}>
                    Whether you enjoy a relaxing massage with light to medium pressure, a more vigorous deep tissue treatment, or something in between, we can design a session that is right for you, tailoring pressure, focus and techniques to meet your needs!
                </Text>
                <Text style={styles.body}>
                    Hot towels can be included in your service upon request!
                </Text>
                <Text style={styles.price}>
                    30 min: $45 | 45 min: $55 | 60 min: $65 | 90 min: $90 | 120 min: $130
                </Text>
                <Text style={styles.smallheader}>
                    15 Minute Maintenance Massage:
                </Text>
                <Text style={styles.body}>
                    Really need your neck worked on? Or your feet? Or just wanting a scalp, sinus and tmj massage and don't have much time? Stop in for 15 minutes of massage on a single area and leave refreshed!
                </Text>
                <Text style={styles.price}>
                    $25
                </Text>
                <Text style={styles.smallheader}>
                    Aromatherapy:
                </Text>
                <Text style={styles.body}>
                    Essential oils can be added to the massage oil and beneath the face cradle.
                </Text>
                <Text style={styles.price}>
                    $15
                </Text>
                <Text style={styles.smallheader}>
                    Pregnancy Massage:
                </Text>
                <Text style={styles.body}>
                    Get comfy and let your tension melt away with this relaxing escape for expectant mothers! If you are currently pregnant, please book this massage. We will still be able to customize as needed.
                </Text>
                <Text style={styles.price}>
                    30 min: $45 | 45 min: $55 | 60 min: $65
                </Text>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 0,
        paddingLeft: 30
    },
    header: {
        fontSize: 40,
        color: 'yellow',
        marginTop: 30
    },
    smallheader: {
        fontSize: 25,
        color: 'yellow',
        marginTop: 30
    },
    body: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 30
    },
    price: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: 'bold'
    }
})

export default Services;