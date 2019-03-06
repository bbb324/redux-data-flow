import {combineReducers} from 'redux';
import trafficReducer from './trafficReducer';

export default combineReducers({
    trafficLights: trafficReducer,
});

