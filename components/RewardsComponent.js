import React, { Component } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, Image } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

const mapStateToProps = state => {
    return {
        reward: state.reward
    };
};

class Rewards extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        const { navigate } = this.props.navigation;
        const reward = this.props.reward.rewards.map(reward => {
            return (

                <Icon
                    name='heart'
                    type='font-awesome'
                    color='#5637DD'
                    raised
                    reverse
                    key={this.props.reward.rewards[reward]}
                />

            )
        })
        return (
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
        bottom: 0,
        fontSize: 40
    },
    text: {
        color: 'yellow',
        textAlign: 'center',
        fontSize: 20
    }
});

export default connect(mapStateToProps)(Rewards);