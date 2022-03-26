import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
import Loading from "./LoadingComponent";
import { resetEmailError, fetchNewuser, fetchRewards} from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        email: state.email,
        newuser: state.newuser,
        modal: state.modal,
        rewards: state.rewards
    };
};

const mapDispatchToProps = {
    fetchNewuser: () => (fetchNewuser()),
    fetchRewards: () => (fetchRewards()),
    resetEmailError: () => (resetEmailError())
};

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            validEmail: false,
            emailError: ""
        }
    }

    componentDidMount() {
        const email = this.props.email.email
        if (email.length > 0) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        };
    };

    componentDidUpdate(prevProps) {
        if (this.props.email !== prevProps.email) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        };
    };

    resetError() {
        const {navigate} = this.props.navigation
        this.props.resetEmailError();
        navigate('Rewards');
    }

    render() {
        const newuser = this.props.newuser
        const email = this.props.email
        const rewards = this.props.rewards
        const { navigate } = this.props.navigation;
        let errMessage
        if (email.errMess) {
            errMessage = email.errMess
        } if (rewards.errMess) {
            errMessage = rewards.errMess
        } if (newuser.errMess) {
            errMessage = newuser.errMess
        }

        if (email.isLoading || rewards.isLoading || newuser.isLoading) {
            return (
                <Loading />
            );
        };

        if (email.email.length > 0) {
            if (email.errMess) {
                return (
                    <ScrollView style={styles.errorContainer}>
                        <View style={styles.view}>
                            <Text style={styles.text}>Sorry, there was an error. {errMessage}</Text>
                            <View style={styles.errorView}>
                                <TouchableOpacity
                                    onPress={() => this.resetError()
                                        }
                                >
                                    <Text>
                                        Go Back
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )
            }
            if (rewards.errMess || newuser.errMess) {
                return (
                    <ScrollView style={styles.errorContainer}>
                        <View style={styles.view}>
                            <Text style={styles.text}>Sorry, there was an error. {errMessage}</Text>
                            <View style={styles.errorView}>
                                <TouchableOpacity
                                    onPress={() => navigate('Rewards')}
                                >
                                    <Text>
                                        Go Back
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                )
            };
        };

        return (
            <ScrollView style={styles.container}>
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
    errorContainer: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'rgb(38,32,0)',
        paddingVertical: 30
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
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
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
    errorView: {
        width: '70%',
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        color: 'black',
        borderRadius: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        marginTop: 50
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
    },
    text: {
        color: 'yellow',
        fontSize: 17,
        alignItems: 'center',
        paddingLeft: 10
    },
    errorButton: {
        backgroundColor: 'yellow',
        width: '70%',
        height: 40,
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginBottom: 20
    }
})

export default withNavigationFocus(connect(mapStateToProps, mapDispatchToProps)(Home));