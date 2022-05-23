import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { withNavigationFocus } from 'react-navigation';
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
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Please register your email before receiving rewards.
                </Text>
            </View>
        );

        // Text box if user is registered, but hasn't redeemed their initial reward

    } else if (newuser.length === 0 && rewards.length === 0) {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Thanks for downloading the app. Enjoy 20% off of your visit today.
                </Text>
            </View>
        );

        // Text box if user has registered and has received first reward

    } else {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Get 6 one hour or longer massages at regular price and receive 10% off the 7th. Not to be used in combination with a gift card or another discount.
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
            <View style={styles.bottomView}>
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
            <View style={styles.bottomView}>
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
            <View style={styles.bottomView}>
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

class Rewards extends Component {
    constructor(props) {
        super(props);
    }

    // Fetch Newuser and Rewards array from server when component is focused. 

    componentDidUpdate(prevProps, props) {
        if (this.props.email.email.length && prevProps.isFocused !== this.props.isFocused) {
            this.props.fetchNewuser();
            this.props.fetchRewards();
        };
    };

    resetError() {
        this.props.resetEmailError();
    }

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

        // Maps over all the rewards in the rewards array, received as props from rewards reducer, and displays a heart icon for each one. This lets user know how many rewards they currently have.

        const reward = this.props.rewards.rewards.map((reward, i) => {
            return (
                <Icon
                    name={reward}
                    type='font-awesome'
                    color='#FFFF00'
                    raised
                    reverse
                    key={i}
                    size={14}
                />
            );
        });

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
                                <Text style={styles.text}>Sorry, there was an error. {errMessage}</Text>
                                <View style={styles.errorView}>
                                    <TouchableOpacity
                                        onPress={() => this.props.resetEmailError()
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
            }
        };

        if (rewards.errMess || newuser.errMess) {
            return (
                <ScrollView style={styles.errorContainer}>
                    <View style={styles.mainErrorView}>
                        <Text style={styles.text}>Sorry, there was an error. {errMessage}</Text>
                        <View style={styles.errorView}>
                            <TouchableOpacity
                                onPress={() => navigate('Home')}
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

        return (
            <ScrollView style={styles.container} >
                <View style={styles.mainView}>
                    <View style={styles.imageView}>
                        <Image
                            source={require('./images/logo.png')}
                            resizeMode='contain'
                            accessibilityLabel='Massage Knox Logo'
                            style={styles.image} />
                    </View>
                    <RenderText
                        newuser={this.props.newuser.newuser}
                        rewards={this.props.rewards.rewards}
                        email={this.props.email.email}
                    />
                    <View style={styles.icon}>
                        {reward}
                    </View>
                    <RenderButton
                        newuser={this.props.newuser.newuser}
                        rewards={this.props.rewards.rewards}
                        email={this.props.email.email}
                        navigate={this.props.navigation.navigate}
                    />
                </View>
            </ScrollView>
        );
    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        paddingVertical: '5%',
        backgroundColor: 'rgb(38,32,0)'
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
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
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: '5%',
        marginBottom: '5%'
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        fontSize: 18
    },
    bottomView: {
        flex: 1,
        width: '80%',
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '5%',
        color: 'black',
        borderRadius: 10,
        fontWeight: 'bold',
        marginHorizontal: '10%'
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
    textContainer: {
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        marginVertical: '4%',
        paddingVertical: '3%',
        paddingHorizontal: '4%',
        alignItems: 'center',
        width: '90%'
    },
    text: {
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
    mainErrorView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        paddingTop: '10%'
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
    },
});

export default withNavigationFocus(connect(mapStateToProps, mapDispatchToProps)(Rewards));