import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import Swiper from 'react-native-swiper'
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

class Rewards extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { navigate } = this.props.navigation;
        const newuser = this.props.user.user.newuser.map(newuser => {
            return (

                <Icon
                    name='heart'
                    type='font-awesome'
                    color='#5637DD'
                    raised
                    reverse
                    key={this.props.user.user.newuser.indexOf(newuser)}
                />

            )
        })
        const reward = this.props.user.user.rewards.map(reward => {
            return (

                <Icon
                    name='heart'
                    type='font-awesome'
                    color='#5637DD'
                    raised
                    reverse
                    key={this.props.user.user.rewards.indexOf(reward)}
                />

            )
        })
        return (
            <Swiper>
                <View style={styles.container}>
                    <Image
                        source={require('./images/logo.png')}
                        resizeMode='contain'
                        style={styles.image} />
                    <Text style={styles.text}>
                        Thanks for downloading the app. Enjoy 20% off of your visit today.
                    </Text>
                    <View style={styles.icon}>
                        {newuser}
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity
                            onPress={() => navigate('Scanner')}
                        >
                            <Text>Stamp Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container}>
                    <Image
                        source={require('./images/logo.png')}
                        resizeMode='contain'
                        style={styles.image} />
                    <Text style={styles.text}>
                        Your Rewards
                    </Text>
                    <View style={styles.icon}>
                        {reward}
                    </View>
                    <View style={styles.bottomView}>
                        <TouchableOpacity
                            onPress={() => navigate('Scanner')}
                        >
                            <Text>Stamp Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Swiper>
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
        aspectRatio: 1
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
        bottom: 50,
        fontSize: 40
    },
    text: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20
    }
});

export default connect(mapStateToProps)(Rewards);