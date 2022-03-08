import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        newuser: state.newuser,
        rewards: state.rewards,
        email: state.email
    };
};

function RenderText(props) {
    const { newuser } = props
    if (newuser.length < 1) {
        return (
            <Text style={styles.text}>
                Thanks for downloading the app. Enjoy 20% off of your visit today.
            </Text>
        )
    } else {
        return (
            <Text style={styles.text}>
                Get 6 one hour or longer massages at regular price and receive 10% off the 7th. Not to be used in combination with a gift card or another discount.
            </Text>
        )
    }
}

function RenderButtonText(props) {
    const { newuser, rewards } = props
    if (newuser.length < 1 || rewards.length >= 6) {
        return (
            <Text style={styles.button}>Redeem Reward</Text>
        )
    } else {
        return (
            <Text style={styles.button}>Stamp Card</Text>
        )
    }
}

class Rewards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const email = this.props.email.email
        const { navigate } = this.props.navigation;
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

            )
        })
        if(email === "") {
            return(
            <View style={styles.container}>
                <View style={styles.view}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('./images/logo.png')}
                            resizeMode='contain'
                            accessibilityLabel='Massage Knox Logo'
                            style={styles.image} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>
                            Please register on the Home Screen before receiving rewards.
                        </Text>
                    </View>
                    <View style={styles.bottomViewRegister}>
                        <TouchableOpacity
                            onPress={() => navigate('Home')}
                        >
                            <Text style={styles.button}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            )
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
                <View style={styles.textContainer}>
                    <RenderText
                        newuser={this.props.newuser.newuser}
                    />
                </View>
                <View style={styles.icon}>
                    {reward}
                </View>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                        onPress={() => navigate('Scanner')}
                    >
                        <RenderButtonText
                            newuser={this.props.newuser.newuser}
                            rewards={this.props.rewards.rewards}
                        />
                    </TouchableOpacity>
                </View>
                </View>
            </ScrollView>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 0,
        paddingVertical: 50,
        backgroundColor: 'rgb(38,32,0)'
    },
    view: {
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
        width: '50%',
        fontSize: 18
    },
    bottomView: {
        width: '80%',
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