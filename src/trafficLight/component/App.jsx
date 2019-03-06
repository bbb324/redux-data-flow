import React, {Component} from 'react';
import TrafficLight from './TrafficLight';
import {Provider} from 'react-redux';
import store from '../store/store';
class App extends Component {
    constructor(props, context) {

        super(props, context);
    }

    render() {
        return (<Provider store={store}>
            <TrafficLight />
        </Provider>);
    }
}

export default App;
