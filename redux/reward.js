import { Alert } from 'react-native';
import * as ActionTypes from './ActionTypes';

export const reward = (state = { errMess: null, rewards: [], isNewUser: true }, action) => {

    switch (action.type) {
        case ActionTypes.ADD_REWARD:
            const reward = action.payload;
            if (state.rewards.length < 7) {
                Alert.alert(
                    'Congratulations',
                    'You earned another stamp!',
                    [
                        {
                            text: 'OK',
                            onPress: () => console.log("OK Pressed")
                        },
                    ],
                    { cancelable: false }
                )
                return state.rewards.concat(reward);
            }
            if (state.rewards.length >= 7) {
                Alert.alert(
                    'Congratulations',
                    'You get 15% off of your massage today!',
                    [
                        {
                            text: 'OK',
                            onPress: () => console.log("OK Pressed")
                        },
                    ],
                    { cancelable: false }
                )
                return initialState;
            }
        default:
            return state;
    }
}

