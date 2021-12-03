import React, { Component } from 'react';
import { Text, View, StyleSheet, Button, SafeAreaView, Alert } from 'react-native';
import { connect } from 'react-redux';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { postReward } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        reward: state.reward
    };
}

const mapDispatchToProps = {
    postReward: (reward) => (postReward(reward))
};

class Scanner extends Component {
    state = {
        hasCameraPermission: false,
        scanned: false,
        reward: 'heart'
    };

    async componentDidMount() {
        this.getPermissionsAsync();
    }

    getPermissionsAsync = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
    }

    handleReward() {
        const reward = this.state
        this.props.postReward(reward);
    }

    handleBarCodeScanned = ({ type, data }) => {
        const hui = 'hui'
        this.setState({ scanned: true });
        if (data === hui) {
            Alert.alert(
                'Congratulations',
                'You earned another r!',
                [
                    {
                        text: 'OK',
                        onPress: () => console.log("OK Pressed")
                    },
                ],
                { cancelable: false }
            );
            this.handleReward();
        }
    };

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