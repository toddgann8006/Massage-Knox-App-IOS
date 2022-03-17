import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import InputValidation from 'react-native-input-validation';
import Loading from "./LoadingComponent";
import { postEmail, resEmail, fetchNewuser, postUser, fetchRewards, toggleModalOff } from '../redux/ActionCreators';

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
    };

    componentDidUpdate(prevProps) {
        if (this.props.email !== prevProps.email) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        }
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

    // If user hits cancel on alert, this allows them to enter a different email and sets the email state in Home component to empty

    resetEmail() {
        this.setState({ email: "" })
        this.props.resEmail();
    };

    render() {
        const modal = this.props.modal.showModal
        const email = this.props.email;
        const rewards = this.props.rewards;
        const newuser = this.props.newuser;
        let homescreen
        if (email.isLoading || rewards.isLoading || newuser.isLoading) {
            return (
                <Loading />
            );
        }
        if (modal === true) {
            homescreen =
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
                        <InputValidation
                            textInputContainerStyle={styles.modalTextinput}
                            validator="email"
                            value={this.state.email}
                            onChangeText={(email) =>
                                this.setState({ email: email })
                            }
                            ref={input => { this.textInput = input }}
                            returnKeyType="go"
                        />
                    </View>
                    <View style={styles.registerView}>
                        <TouchableOpacity
                            style={styles.button}
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
            homescreen =
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
                            With the Massage Knox By Shannon Cox Rewards App, you will be able to track your sessions with Shannon Cox, Licensed Massage Therapist on a digital stamp card simply by scanning a QR Code during your visit.
                            After accruing a few stamps, you'll receive a discount on the next service. Plus you get a coupon to redeem right away!
                            In addition, you will be able to book appointments and purchase gift cards for your loved ones right from your mobile device!
                            And you'll get up to date information about last minute openings, sales, and specials!
                        </Text>
                    </View>
                </View>
        }
        return (
            <ScrollView style={styles.container}
                keyboardShouldPersistTaps='handled'
            >
                {homescreen}
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
        marginBottom: 30,
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
    }
})

export default connect(mapStatetoProps, mapDispatchToProps)(Home);