import React, { Component } from "react";
import { ScrollView, StyleSheet, Text } from 'react-native';

class About extends Component {

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text style={styles.header}>
                    About-
                </Text>
                <Text style={styles.body}>
                    Shannon Cox, LMT is the owner of Massage Knox, which is a separate entity from Nourish Skin Studio. She has been a practicing massage therapist since 2012. She graduated from Tennessee School of Therapeutic Massage and has since studied various therapeutic techniques including myofascial release, positional release, and muscle energy technique. She offers Swedish massage and deep tissue, but specializes in her own therapeutic blend of the two. She believes that massage is more effective when the pressure is increased only as the muscles start to give and relax. She doesn't force the pressure beyond that point, but rather waits until she feels the muscles give way and then sinks in to the tissue at a deeper level. She uses slow, sustained holds and releases, focusing on tender points and areas of tension, and increasing pressure as the body relaxes.
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
    body: {
        color: 'white',
        marginTop: 20,
        fontSize: 18,
        lineHeight: 30
    }
})

export default About;