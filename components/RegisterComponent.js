import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, TextInput, Alert, KeyboardAvoidingView } from 'react-native';
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

    // Sends email to server again if error occured

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

        if (modal === true) {
            registerScreen =
                <View style={styles.mainView}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/new-logo.png')}
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
                            <Text style={styles.buttonText}
                                adjustsFontSizeToFit
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
        } else {
            registerScreen =
                <View style={styles.mainView}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/new-logo.png')}
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
                </View>
        };

        return (
            <KeyboardAvoidingView 
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
            keyboardVerticalOffset={100}
        >
        <ScrollView 
               style={styles.container}
               keyboardShouldPersistTaps='handled'
        >
            {registerScreen}
        </ScrollView>
    </KeyboardAvoidingView>
        )
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        backgroundColor: '#2ea3f2'
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.43, // Adjust this number based on your image dimensions
        resizeMode: 'contain'
    },
    imageView: {
        backgroundColor: '#08678C',
        paddingHorizontal: '0%', // Reduced padding to give image more room
        alignItems: 'center',
        width: '90%',
        shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    },
    registerView: {
        width: '50%',
        backgroundColor: '#F2B705',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        paddingVertical: '3%',
        borderRadius: 10,
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84
    },
    button: {
       fontSize: 18,
            color: 'black'
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
        paddingBottom: '3%'
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ea3f2',
        paddingTop: '5%'
    },
    modalTextinput: {
        fontSize: 20,
        borderWidth: 1,
        borderStyle: 'solid',
        marginTop: '5%',
        marginBottom: '1%',
        width: 250,
        height: 50,
        backgroundColor: 'white'
    },
    inputView: {
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
    shadowRadius: 3.84,
    },
    emailError: {
        color: "red",
        paddingBottom: '5%',
        fontSize: 16
    }
});

export default connect(mapStatetoProps, mapDispatchToProps)(Register);