import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

function Loading() {
    return (
        <View style={styles.loadingView}>
            <ActivityIndicator size='large' color='yellow' />
            <Text style={styles.loadingText}>Loading . . .</Text>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        loadingView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            backgroundColor: 'black'
        },
        loadingText: {
            color: 'yellow',
            fontSize: 14,
            fontWeight: 'bold'
        }
    }
);

export default Loading;