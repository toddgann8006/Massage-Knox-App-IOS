import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from "./LoadingComponent";
import { postEmail, resEmail, postUser, toggleModalOff } from '../redux/ActionCreators';

const mapStatetoProps = state => {
    return {
        email: state.email,
        newuser: state.newuser,
        modal: state.modal,
        rewards: state.rewards
    };
};

const mapDispatchToProps = {
    postEmail: (email) => (postEmail(email)),
    resEmail: () => (resEmail()),
    postUser: (email) => (postUser(email)),
    toggleModalOff: () => (toggleModalOff())
};

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            validEmail: false,
            emailError: ""
        };
    };

    // Takes value of email state in Home component and sends it to addEmail in email reducer

    handleEmail() {
        const { email } = this.state
        this.props.postEmail(email.toLowerCase());
    };

    // If user confirms this is the correct email, this sends POST request with the email value to the server 

    handleNewuser() {
        const email = this.state.email.toLowerCase()
        this.props.postUser(email);
        this.props.toggleModalOff();
    };

    resetNewuser() {
        const email = this.props.email.email
        this.props.postUser(email);
    }

    // If user hits cancel on alert, this allows them to enter a different email and sets the email state in Home component to empty

    resetEmail() {
        this.setState({ email: "" })
        this.props.resEmail();
    };

    //Checks if email is valid. If invalid, register is disabled

    onChangeEmail(email) {
        const emailCheckRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        this.setState({ email });
        if (emailCheckRegex.test(email)) {
            this.setState({
                validEmail: true,
                emailError: ""
            });
        } else if (!emailCheckRegex.test(email)) {
            this.setState({
                validEmail: false,
                emailError: "Invalid email address."
            });
        };
    };

    render() {
        const modal = this.props.modal.showModal
        const email = this.props.email;
        const rewards = this.props.rewards;
        const newuser = this.props.newuser;
        let registerScreen
        if (email.isLoading || rewards.isLoading || newuser.isLoading) {
            return (
                <Loading />
            );
        }
        if (modal === true) {
            registerScreen =
                <View style={styles.modal}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/logo.png')}
                            resizeMode='contain'
                            style={styles.image}
                            accessibilityLabel='Massage Knox Logo'
                        />
                    </View>
                    <View
                        accessible
                        accessibilityLabel="Enter email"
                        style={styles.inputView}
                    >
                        <Text style={styles.welcomeText}>
                            Welcome to the Massage Knox By Shannon Cox Rewards App!
                            Enter your email address to unlock rewards! We will never share your email address and you won't receive emails from the app. It will be used solely for logging your rewards.
                        </Text>
                        <TextInput
                            style={styles.modalTextinput}
                            value={this.state.email}
                            onChangeText={(email) =>
                                this.onChangeEmail(email)
                            }
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"
                        />
                        <Text style={styles.emailError}>{this.state.emailError}</Text>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity
                            style={styles.button}
                            disabled={!this.state.validEmail}
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
                        >
                            <Text style={styles.buttonText}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        } else {
            registerScreen =
                <View style={styles.welcome}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/logo.png')}
                            resizeMode='contain'
                            style={styles.image}
                            accessibilityLabel='Massage Knox Logo'
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.welcomeTextHome}>
                            Thanks for registering. Check out our rewards page and start receiving rewards. The email you registered is:
                        </Text>
                        <Text style={styles.welcomeTextHome}>{email.email}</Text>
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.resetNewuser()}
                        >
                            <Text style={styles.buttonText}>
                                Reset Email
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        };

        return (
            <ScrollView style={styles.container}
                keyboardShouldPersistTaps='handled'
            >
                {registerScreen}
            </ScrollView >
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'rgb(38,32,0)'
    },
    image: {
        width: '80%',
        height: undefined,
        aspectRatio: 1
    },
    imageView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '20%',
        alignItems: 'center',
        width: '90%'
    },
    registerView: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: '20%',
        alignItems: 'center',
        width: '90%'
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
    welcomeText: {
        color: 'black',
        fontSize: 16
    },
    welcomeTextHome: {
        color: 'black',
        fontSize: 16,
        paddingBottom: 10
    },
    welcome: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        paddingTop: 50
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
    },
    modalTextinput: {
        fontSize: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: 30,
        marginBottom: 15,
        width: 250,
        height: 50,
        backgroundColor: 'white'
    },
    inputView: {
        alignItems: "center",
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'yellow',
        paddingHorizontal: 10,
        marginVertical: 20,
        paddingTop: 10,
        marginHorizontal: '5%'
    },
    emailError: {
        color: "red",
        paddingBottom: 10,
        fontSize: 16
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Register);