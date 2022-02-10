import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, Linking, TouchableOpacity, Modal, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import InputValidation from 'react-native-input-validation';
import { postEmail, resEmail, fetchNewuser, postUser, fetchRewards, toggleModalOff, toggleModalOn } from '../redux/ActionCreators';

const mapStatetoProps = state => {
    return {
        email: state.email,
        newuser: state.newuser,
        modal: state.modal
    };
};

const mapDispatchToProps = {
    postEmail: (email) => (postEmail(email)),
    resEmail: () => (resEmail()),
    postUser: (email) => (postUser(email)),
    fetchNewuser: () => (fetchNewuser()),
    fetchRewards: () => (fetchRewards()),
    toggleModalOff: () => (toggleModalOff())
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        }
    }

    componentDidMount() {
        this.props.fetchNewuser();
        this.props.fetchRewards();
    }

    componentDidUpdate(prevProps) {
        if (this.props.email !== prevProps.email) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        }
    }

    handleNewuser() {
        const email = this.state.email.toLowerCase()
        this.props.toggleModalOff();
        this.props.postUser(email);
    }

    handleEmail() {
        const { email } = this.state
        this.props.postEmail(email.toLowerCase());
    }

    resetEmail() {
        this.setState({ email: "" })
        this.props.resEmail();
    }

    render() {
        return (
            <ScrollView style={styles.container}
                keyboardShouldPersistTaps='handled'
            >
                <Image
                    source={require('./images/logo.png')}
                    resizeMode='contain'
                    style={styles.image}
                    accessibilityLabel='Massage Knox Logo'
                />
                <Text
                    style={{ fontSize: 25, color: 'white', textAlign: 'center' }}
                >
                    located inside Nourish Skin Studio
                </Text>
                <Text style={styles.address}>
                    110 Westfield Road Suite 1
                </Text>
                <Text style={styles.address}>
                    Knoxville, TN 37919
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <Image
                        source={require('./images/headshot.jpg')}
                        style={styles.headshot}
                        accessibilityLabel='Shannon Cox LMT image'
                    />
                </View>
                <Text style={styles.lmt}>
                    Shannon Cox, Licensed Massage Therapist
                </Text>
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('mailto:shannoncox@massageknox.com')}
                        style={styles.button}
                    >
                        <Text>Email</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.covid}>
                    <Text>
                        Due to Covid 19 the lobby is closed and we are open by appointment only.
                    </Text>
                    <Text>
                        Upon arrival, please wait in your vehicle.
                    </Text>
                </Text>
                <View style={{ alignItems: 'center', marginBottom: 20 }}>
                    <TouchableOpacity
                        onPress={() => Linking.openURL('https://www.facebook.com/massageknox/?ref=py_c')}
                        style={styles.button}
                    >
                        <Text>Find Me On Facebook</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ marginBottom: 100 }}>
                    <Text
                        style={{ fontSize: 20, color: 'yellow', marginTop: 25, marginLeft: 30 }}>
                        Hours of availability:
                    </Text>
                    <Text style={styles.hours}>
                        Tuesday: 10-2
                    </Text>
                    <Text style={styles.hours}>
                        Wednesday: 10-5
                    </Text>
                    <Text style={styles.hours}>
                        Thursday: 10-6
                    </Text>
                    <Text style={styles.hours}>
                        Friday: 10-6
                    </Text>
                    <Text style={styles.hours}>
                        Saturday: 10-6
                    </Text>
                </View>
                <SafeAreaView style={styles.modal}>
                    <Modal
                        animationType={'slide'}
                        transparent={false}
                        visible={this.props.modal.showModal}
                    >
                        <Text>Thanks for downloading the app. Please enter your email to start receiving rewards.</Text>
                        <InputValidation
                            textInputContainerStyle={styles.modalTextinput}
                            validator="email"
                            value={this.state.email}
                            onChangeText={(email) =>
                                this.setState({ email: email })
                            }
                            placeholder='email'
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"
                        />
                        <Button
                            onPress={() => {
                                this.handleEmail()
                                Alert.alert(
                                    `Is ${this.state.email} the correct email?`,
                                    "Click Ok to continue or Cancel to enter a different email.",
                                    [
                                        {
                                            text: 'OK',
                                            onPress: () => this.handleNewuser()
                                        },
                                        {
                                            text: 'Cancel',
                                            onPress: () => this.resetEmail()
                                        }
                                    ],
                                    { cancelable: false }
                                );
                            }}
                            color='#5637DD'
                            title='Register'
                        />
                    </Modal>
                </SafeAreaView>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        marginTop: 0,
        paddingBottom: 50
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1
    },
    headshot: {
        width: '50%',
        height: undefined,
        aspectRatio: 1,
        marginTop: 50
    },
    address: {
        color: 'white',
        textAlign: 'center',
        marginTop: 25,
        fontSize: 15
    },
    hours: {
        color: 'yellow',
        marginTop: 25,
        marginLeft: 30,
        fontSize: 15
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '50%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    lmt: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        marginTop: 10
    },
    covid: {
        color: 'white',
        fontSize: 15,
        marginVertical: 30
    },
    modal: {
        position: 'absolute',
        top: 0, left: 0,
        right: 0, bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTextinput: {
        fontSize: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 30,
        marginBottom: 50,
        width: 350,
        height: 50
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Home);