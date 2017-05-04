import React from 'react';
import './single-topic.css';
import toastr from 'toastr';

class SingleTopic extends React.Component {
  constructor(props) {
    super(props);
  }

  handleRegister(e) {
    e.preventDefault();
    toastr.success("Register done");
  }

  render () {
    let topic = this.props.topic;
    return (
      <div>
        <div className="topic-card">
          <h4>{topic.title}</h4>
          <div className="topic-content">
            <div className="category">Category: {topic.categories}</div>
            <p>{topic.description}</p>
            <button className="pseudo btn btn-primary">nothing</button>
            <button className="btn btn-primary register"
              onClick={this.handleRegister}>Register Now</button>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleTopic;