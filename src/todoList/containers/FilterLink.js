import {connect} from 'react-redux';
import {setVisiblityFilter} from '../action/index';
import Link from '../component/Link';

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisiblityFilter(ownProps.filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
