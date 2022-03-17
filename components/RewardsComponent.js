import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import Loading from './LoadingComponent';

const mapStateToProps = state => {
    return {
        newuser: state.newuser,
        rewards: state.rewards,
        email: state.email
    };
};

// Sets the text box in Rewards component. This is determined by if the user is registered, if they are a new user, and if they have any rewards currently

function RenderText(props) {
    const { newuser, rewards, email } = props;

    // Text box if user hasn't registered on the Home Component

    if (email === "") {
        return (
            <View style={styles.textContainer}>
                <Text style={styles.text}>
                    Please register on the Home Screen before receiving rewards.
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
            <View style={styles.bottomViewRegister}>
                <TouchableOpacity
                    onPress={() => navigate('Home')}
                >
                    <Text style={styles.button}>
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
                    <Text style={styles.button}>Redeem Reward</Text>
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
                    <Text style={styles.button}>Stamp Card</Text>
                </TouchableOpacity>
            </View>
        );
    };
};

class Rewards extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const email = this.props.email;
        const rewards = this.props.rewards;
        const newuser = this.props.newuser;
        const { navigate } = this.props.navigation;

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
        if (email.isLoading || rewards.isLoading || newuser.isLoading) {
            return (
                <Loading />
            );
        }
        return (
            <ScrollView style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.imageContainer}>
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
        paddingVertical: 30,
        backgroundColor: 'rgb(38,32,0)'
    },
    view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgb(38,32,0)',
        marginTop: 0
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 60
    },
    image: {
        width: '80%',
        height: undefined,
        aspectRatio: 1
    },
    imageContainer: {
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
        color: 'black',
        fontSize: 18
    },
    bottomView: {
        flex: 1,
        width: '90%',
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        color: 'black',
        borderRadius: 10,
        paddingBottom: 10,
        fontWeight: 'bold',
        marginHorizontal: '10%'
    },
    bottomViewRegister: {
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
    textContainer: {
        alignItems: "center",
        borderColor: 'yellow',
        borderStyle: 'solid',
        borderWidth: 2,
        backgroundColor: 'black',
        paddingHorizontal: 10,
        marginVertical: 20,
        paddingVertical: 10,
        marginHorizontal: '5%'
    },
    text: {
        color: 'yellow',
        fontSize: 17,
        alignItems: 'center',
        paddingLeft: 10
    }
});

export default connect(mapStateToProps)(Rewards);