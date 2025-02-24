import React, { useEffect } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import Loading from './LoadingComponent';
import { resetEmailError, fetchNewuser, fetchRewards } from '../redux/ActionCreators';

const mapStateToProps = state => {
    return {
        newuser: state.newuser,
        rewards: state.rewards,
        email: state.email
    };
};

const mapDispatchToProps = {
    fetchNewuser: () => (fetchNewuser()),
    fetchRewards: () => (fetchRewards()),
    resetEmailError: () => (resetEmailError())
};

// Sets the text box in Rewards component. This is determined by if the user is registered, if they are a new user, and if they have any rewards currently

function RenderText(props) {
    const { newuser, rewards, email } = props;

    // Text box if user hasn't registered on the Home Component

    if (email === "") {
        return (
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Please register your email before receiving rewards.
                </Text>
            </View>
        );

        // Text box if user is registered, but hasn't redeemed their initial reward

    } else if (newuser.length === 0 && rewards.length === 0) {
        return (
            <View style={styles.textView}>
                <Text style={styles.text}>
                    Thanks for downloading the app. Enjoy $5 off of your visit today.
                </Text>
            </View>
        );

        // Text box if user has registered and has received first reward

    } else {
        return (
            <View style={styles.textView}>
                <Text style={styles.text}>
                Get 6 one hour or longer massages at regular price and receive 10% off the 7th. When checking out, show your massage therapist this page before completing payment to receive your stamp. (No stamp is given if paying with a gift card or another discount and rewards are not to be redeemed in combination with a gift card or another discount.)
                </Text>
            </View>
        );
    };
};

// Renders a button at bottom of Rewards Component. This is determined by if the user is registered, if they are a new user, and if they have any rewards currently

function RenderButton(props) {
    const { newuser, rewards, email, navigate } = props;

    // Button to return to Home Component if user hasn't registered yet

    if (email === "") {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => navigate('Register')}
                >
                    <Text style={styles.button}
                        adjustsFontSizeToFit
                    >
                        Register
                    </Text>
                </TouchableOpacity>
            </View>
        );

        // Button to go to Scanner Component if user has registered and hasn't received initial reward. Also displayed if user has six rewards currently

    } else if (newuser.length === 0 || rewards.length === 6) {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => navigate('Scanner')}
                >
                    <Text style={styles.button}
                        adjustsFontSizeToFit
                    >Redeem Reward</Text>
                </TouchableOpacity>
            </View>
        );

        // Button to go to Scanner Component if user has registered and has received initial reward but doesn't currently have six rewards

    } else {
        return (
            <View style={styles.buttonView}>
                <TouchableOpacity
                    onPress={() => navigate('Scanner')}
                >
                    <Text style={styles.button}
                        adjustsFontSizeToFit
                    >Stamp Card</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

function Rewards(props) {
    const isFocused = useIsFocused();

    useEffect(() => {
        if (props.email.email.length && isFocused) {
            props.fetchNewuser();
            props.fetchRewards();
        }
    }, [isFocused, props.email.email]);

    const resetError = () => {
        props.resetEmailError();
    };

    const newuser = props.newuser;
    const email = props.email;
    const rewards = props.rewards;
    const { navigate } = props.navigation;
    const err500 = "Error 500: ";
    let errMessage;

    if (email.errMess) {
        errMessage = email.errMess;
    }
    if (rewards.errMess) {
        errMessage = rewards.errMess;
    }
    if (newuser.errMess) {
        errMessage = newuser.errMess;
    }

    const reward = props.rewards.rewards.map((reward, i) => {
        return (
            <Icon
                name={reward}
                type='font-awesome'
                color='#F2B705'
                raised
                reverse
                key={i}
                size={14}
            />
        );
    });

    if (email.email.length) {
        if (email.isLoading || rewards.isLoading || newuser.isLoading) {
            return <Loading />;
        }
    }

    if (email.email.length > 0) {
        if (email.errMess) {
            if (email.errMess !== err500) {
                return (
                    <ScrollView style={styles.errorContainer}>
                        <View style={styles.mainErrorView}>
                            <Text style={styles.text}>Sorry, there was an error. {errMessage}</Text>
                            <View style={styles.errorView}>
                                <TouchableOpacity onPress={resetError}>
                                    <Text>Go Back</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ScrollView>
                );
            }
        }
    }

    if (rewards.errMess || newuser.errMess) {
        return (
            <ScrollView style={styles.errorContainer}>
                <View style={styles.mainErrorView}>
                    <Text style={styles.text}>Sorry, there was an error. {errMessage}</Text>
                    <View style={styles.errorView}>
                        <TouchableOpacity onPress={() => navigate('Home')}>
                            <Text>Go Back</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        );
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.mainView}>
                <View style={styles.imageView}>
                    <Image
                        source={require('./images/new-logo.png')}
                        resizeMode='contain'
                        accessibilityLabel='Massage Knox Logo'
                        style={styles.image}
                    />
                </View>
                <RenderText
                    newuser={props.newuser.newuser}
                    rewards={props.rewards.rewards}
                    email={props.email.email}
                />
                <View style={styles.icon}>
                    {reward}
                </View>
                <RenderButton
                    newuser={props.newuser.newuser}
                    rewards={props.rewards.rewards}
                    email={props.email.email}
                    navigate={props.navigation.navigate}
                />
            </View>
        </ScrollView>
    );
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
        aspectRatio: 1.43, 
        resizeMode: 'contain'
    },
    imageView: {
        backgroundColor: '#08678C',
        paddingHorizontal: '0%', 
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
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginVertical: '5%',
        color: '#F2B705'
    },
    button: {
        color: 'black',
        fontSize: 18,
        textAlign: 'center'
    },
    buttonView: {
        width: '60%',
        backgroundColor: '#F2B705',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: '3%',
        borderRadius: 10
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
        shadowRadius: 3.84
    },
    text: {
        color: 'black',
        fontSize: 16,
        paddingBottom: '2%'
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
        shadowRadius: 3.84
    },
    errorContainer: {
        flex: 1,
    marginTop: 0,
    backgroundColor: '#2ea3f2'
    },
    mainErrorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2ea3f2',  
        paddingTop: '10%',
        width: '90%'   
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Rewards);