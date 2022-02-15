import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        newuser: state.newuser,
        rewards: state.rewards
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

        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        source={require('./images/logo.png')}
                        resizeMode='contain'
                        accessibilityLabel='Massage Knox Logo'
                        style={styles.image} />
                </View>
                <View style={styles.text}>
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
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
        marginBottom: 60
    },
    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 2.5
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '50%',
        fontSize: 18
    },
    bottomView: {
        width: '100%',
        height: 40,
        backgroundColor: 'yellow',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginBottom: 50,
        color: 'black',
        borderRadius: 10,
        paddingBottom: 10,
        fontWeight: 'bold'
    },
    text: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 17,
        width: '90%',
        alignItems: 'center',
        paddingLeft: 10
    }
});

export default connect(mapStateToProps)(Rewards);