import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { postReward } from '../redux/ActionCreators';
import { postReset } from '../redux/ActionCreators';
import { postNewuser } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        reward: state.reward,
        newuser: state.newuser
    };
}

const mapDispatchToProps = {
    postReward: (reward) => (postReward(reward)),
    postReset: (reset) => (postReset(reset)),
    postNewuser: (newuser) => (postNewuser(newuser))
};

class Scanner extends Component {
    state = {
        hasCameraPermission: false,
        scanned: false,
        reward: 'heart',
        newuser: 'heart',
        reset: []
    };


    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    resetRewards() {
        const reset = this.state
        this.props.postReset(reset)
        Alert.alert(
            'Congratulations',
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
        const newuser = this.state
        this.props.postNewuser(newuser)
        Alert.alert(
            'Thanks for downloading the app!',
            'Come back again for more discounts!',
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
        const reward = this.state
        this.props.postReward(reward)
        Alert.alert(
            'Congratulations',
            'You earned another reward!',
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
        const hui = 'hui'
        const rewards = this.props.reward.rewards
        const newuser = this.props.newuser.newuser
        this.setState({ scanned: true });
        if (data === hui && newuser.length < 1) {
            return this.handleNewuser()
        } else if (data === hui && rewards.length < 7) {
            return this.handleReward()
        } else if (data === hui && rewards.length >= 7) {
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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Scanner);