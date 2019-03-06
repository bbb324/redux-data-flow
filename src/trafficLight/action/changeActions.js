import {ON_YELLOW, ON_GREEN, ON_RED} from './types';


export const change = (current) => dispatch => {
    switch (current) {
    case 0:
        dispatch({
            type: ON_RED,
            payloads: current
        });
        break;
    case 1:
        dispatch({
            type: ON_YELLOW,
            payloads: current
        });
        break;
    case 2:
        dispatch({
            type: ON_GREEN,
            payloads: current
        });
        break;

    }

};
