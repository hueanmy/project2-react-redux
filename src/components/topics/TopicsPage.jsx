import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as topicActions from '../../actions/topicActions';
import SingleTopic from './SingleTopic';
import './topic-page.css';

class TopicsPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {topics} = this.props;
    return (
      <div>
        <h1>Topic List</h1>
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
            {topics.map((topic, index) => <SingleTopic key={index} topic={topic}/> )}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    topics: state.topics
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(topicActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopicsPage);