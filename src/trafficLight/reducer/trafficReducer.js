import {ON_GREEN, ON_RED, ON_YELLOW} from '../action/types';

const initialState = {
    lights: ['red', 'yellow', 'green'], // post list
    current: '' // new post that add to list
};

export default function(state = initialState, action) {
    switch(action.type) {
    case ON_RED:
        return {
            ...state,
            current: 'red'
        };
    case ON_GREEN:
        return {
            ...state,
            current: 'green'
        };
    case ON_YELLOW:
        return {
            ...state,
            current: 'yellow'
        };
    default:
        return state;
    }
}
