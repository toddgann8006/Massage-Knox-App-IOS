import React, { Component } from "react";
import { ScrollView, View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'react-native-elements';
import { connect } from 'react-redux';
import { fetchNewuser, fetchRewards } from '../redux/ActionCreators';
import Loading from "./LoadingComponent";

const mapStateToProps = state => {
    return {
        email: state.email,
        rewards: state.rewards,
        newuser: state.newuser
    };
};

const mapDispatchToProps = {
    fetchNewuser,
    fetchRewards
};


class Home extends Component {

    componentDidMount(props) {
        const email = this.props.email.email
        if (email.length) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        };
    };

    render() {

        const newuser = this.props.newuser;
        const email = this.props.email;
        const rewards = this.props.rewards;
        const { navigate } = this.props.navigation;
        const err500 = "Error 500: ";
        let errMessage
        if (email.errMess) {
            errMessage = email.errMess
        } if (rewards.errMess) {
            errMessage = rewards.errMess
        } if (newuser.errMess) {
            errMessage = newuser.errMess
        }

        if (email.email.length) {
            if (email.isLoading || rewards.isLoading || newuser.isLoading) {
                return (
                    <Loading />
                );
            };
        };

        if (email.email.length > 0) {
            if (email.errMess) {
                if (email.errMess !== err500) {
                    return (
                        <ScrollView style={styles.errorContainer}>
                            <View style={styles.mainErrorView}>
                                <Text style={styles.errorText}>Sorry, there was an error. {errMessage}</Text>
                                <View style={styles.errorView}>
                                    <TouchableOpacity
                                        onPress={() => navigate('Rewards')}
                                    >
                                        <Text
                                        adjustsFontSizeToFit
                                        >
                                            Go Back
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </ScrollView>
                    )
                }
            }
        };

        if (rewards.errMess || newuser.errMess) {
            return (
                <ScrollView style={styles.errorContainer}>
                    <View style={styles.mainErrorView}>
                        <Text style={styles.errorText}>Sorry, there was an error. {errMessage}</Text>
                        <View style={styles.errorView}>
                            <TouchableOpacity
                                onPress={() => navigate('Rewards')}
                            >
                                <Text
                                adjustsFontSizeToFit
                                >
                                    Go Back
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            )
        };

        return (
            <ScrollView style={styles.container}>
                <View style={styles.mainView}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/logo.png')}
                            resizeMode='contain'
                            style={styles.image}
                            accessibilityLabel='Massage Knox Logo'
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>
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
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        paddingTop: '5%'
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
    text: {
        color: 'black',
        fontSize: 16,
        paddingBottom: '2%'
    },
    textView: {
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'yellow',
        marginVertical: '5%',
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        alignItems: 'center',
        width: '90%'
    },
    errorText: {
        color: 'yellow',
        fontSize: 16,
        alignItems: 'center',
        paddingLeft: '2%'
    },
    errorContainer: {
        flex: 1,
        marginTop: 0,
        backgroundColor: 'rgb(38,32,0)'
    },
    errorButton: {
        backgroundColor: 'yellow',
        width: '70%',
        height: 40,
        marginVertical: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
    },
    mainErrorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        paddingTop: '10%'
    },
    errorView: {
        width: '70%',
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        color: 'black',
        borderRadius: 10,
        fontWeight: 'bold',
        marginTop: '5%'
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);