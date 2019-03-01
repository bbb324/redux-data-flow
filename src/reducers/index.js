import {combineReducers} from 'redux';
import todos from './todos';
import visibilityFilter from './visiblityFilter';

export default combineReducers({
    todos, visibilityFilter
});
