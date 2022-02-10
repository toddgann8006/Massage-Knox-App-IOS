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
            <View style={styles.container}>
                <Text style={styles.text}>
                    Thanks for downloading the app. Enjoy 20% off of your visit today.
                </Text>
            </View>
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
            <Text>Redeem Reward</Text>
        )
    } else {
        return (
            <Text>Stamp Card</Text>
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
                    size={17}
                />

            )
        })

        return (
            <View style={styles.container}>
                <Image
                    source={require('./images/logo.png')}
                    resizeMode='contain'
                    accessibilityLabel='Massage Knox Logo'
                    style={styles.image} />
                <RenderText
                    newuser={this.props.newuser.newuser}
                />
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
        backgroundColor: 'black'
    },
    icon: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 40
    },

    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1.5,
        marginBottom: 30
    },
    button: {
        backgroundColor: 'yellow',
        color: 'black',
        width: '50%',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    bottomView: {
        width: '100%',
        height: 50,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 15,
        fontSize: 40
    },
    text: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20
    }
});

export default connect(mapStateToProps)(Rewards);