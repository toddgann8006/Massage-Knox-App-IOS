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
                            source={require('./images/new-logo.png')}
                            resizeMode='contain'
                            style={styles.image}
                            accessibilityLabel='Massage Knox Logo'
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.text}>
                        With the Massage Knox By Shannon Cox Rewards App, you will be able to track your full priced sessions with Shannon Cox, Licensed Massage Therapist, on a digital stamp card simply by scanning a QR code during your visit. After accruing a few stamps, you’ll receive a discount on the next service. In addition, you will be able to book appointments and purchase gift cards for your loved ones right from your mobile device! And you’ll get up to date information about last minute openings, sales, and specials if you enable notifications!
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
        backgroundColor: '#2ea3f2'
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ea3f2',
        paddingTop: '5%'
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
    text: {
        color: 'black',
        fontSize: 16,
        paddingBottom: '2%'
    },
    textView: {
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
    errorText: {
        color: '#F2B705',
        fontSize: 16,
        alignItems: 'center',
        paddingLeft: '2%'
    },
    errorContainer: {
        flex: 1,
    marginTop: 0,
    backgroundColor: '#2ea3f2' 
    },
    errorButton: {
        backgroundColor: '#F2B705',
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
        backgroundColor: '#2ea3f2',  
        paddingTop: '10%',
        width: '90%'
    },
    errorView: {
        width: '90%',  
        backgroundColor: '#F2B705',  
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '5%',
        paddingVertical: '3%',
        borderRadius: 10,
        shadowColor: '#000',  
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);