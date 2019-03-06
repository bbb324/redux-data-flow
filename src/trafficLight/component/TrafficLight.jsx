import React, {Component} from 'react';
import {connect} from 'react-redux';
import {change} from '../action/changeActions';
class TrafficLight extends Component {

    constructor(props, context) {

        super(props, context);
        this.index = 0;
    }

    componentDidMount() {
        setInterval(() => {

            this.props.change(this.index);
            if(this.index < this.props.lights.length-1) {
                this.index ++;
            } else {
                this.index = 0;
            }
        }, 1000);
    }

    render() {
        return (<div>
            <span>{this.props.current}</span>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        lights: state.trafficLights.lights,
        current: state.trafficLights.current
    };
};


export default connect(mapStateToProps, {change})(TrafficLight);
