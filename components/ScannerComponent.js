import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Alert, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { QR_CODE } from '@env';
import { postReward } from '../redux/ActionCreators';
import { postReset } from '../redux/ActionCreators';
import { postNewuser } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        newuser: state.newuser,
        rewards: state.rewards
    };
}

const mapDispatchToProps = {
    postReward: (reward) => (postReward(reward)),
    postReset: () => (postReset()),
    postNewuser: (newuser) => (postNewuser(newuser))
};

class Scanner extends Component {
    state = {
        hasCameraPermission: false,
        scanned: false,
        reward: 'heart',
        newuser: 'heart'
    };


    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    resetRewards() {
        this.props.postReset()
        Alert.alert(
            'Thanks for being a loyal customer!',
            'You get a discount on your massage today!',
            [
                {
                    text: 'OK',
                    onPress: () => this.props.navigation.goBack()
                },
            ],
            { cancelable: false }
        );
    }

    handleNewuser() {
        const newuser = this.state.newuser
        this.props.postNewuser(newuser)
        Alert.alert(
            'Thanks for downloading the app!',
            'Enjoy 20% off your first service!',
            [
                {
                    text: 'OK',
                    onPress: () => this.props.navigation.goBack()
                },
            ],
            { cancelable: false }
        );
    }

    handleReward() {
        const reward = this.state.reward
        this.props.postReward(reward)
        Alert.alert(
            'Congratulations',
            'You earned a stamp!',
            [
                {
                    text: 'OK',
                    onPress: () => this.props.navigation.goBack()
                },
            ],
            { cancelable: false }
        );
    }

    handleBarCodeScanned = ({ data }) => {
        const rewards = this.props.rewards.rewards
        const newuser = this.props.newuser.newuser
        this.setState({ scanned: true });
        if (data === QR_CODE && newuser.length < 1) {
            return this.handleNewuser()
        } else if (data === QR_CODE && rewards.length < 6) {
            return this.handleReward()
        } else if (data === QR_CODE && rewards.length >= 6) {
            return this.resetRewards()
        } else {
            console.log('ok')
        }
    }

    render() {
        const { hasCameraPermission, scanned } = this.state;

        if (hasCameraPermission === null) {
            return <Text>Requesting for camera permission</Text>;
        }
        if (hasCameraPermission === false) {
            return <Text>No access to camera</Text>;
        }
        return (
            <SafeAreaView style={styles.container}>
                <Text style={styles.text}>
                    Scan Now
                </Text>
                <View style={styles.mainView}>

                    <BarCodeScanner
                        onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                        style={StyleSheet.absoluteFillObject}
                    />

                    {scanned && (
                        <Button
                            title={'Tap to Scan Again'}
                            onPress={() => this.setState({ scanned: false })}
                        />
                    )}
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text>
                            Back To Rewards
                            </Text>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    mainView: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    text: {
        color: 'yellow',
        backgroundColor: 'black',
        textAlign: 'center',
        fontSize: 50
    },
    bottomView: {
        width: '100%',
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        color: 'black',
        paddingBottom: 10,
        fontWeight: 'bold'
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);