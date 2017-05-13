import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cvActions from '../../actions/cvActions';
import SingleCV from './SingleCV';

class CVPage extends React.Component {
  render() {
    const {cvs} = this.props;
    return (
        <div>
          <h1>Topic List</h1>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              {cvs.map((cv, index) => <SingleCV key={index} cv={cv}/> )}
            </div>
          </div>
        </div>
        // {cvs.map((cv, index) => <div key={index}>{cv.name}</div> )}
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    cvs: state.cvs
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(cvActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CVPage);