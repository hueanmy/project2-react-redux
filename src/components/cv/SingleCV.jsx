import React from 'react';
import './single-cv.css';
import { Link } from 'react-router';

class SingleCV extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    let cv = this.props.cv;
    return (
      <div className="cv-card">
        <div className="row">
          <div className="col-md-2">
            <img src={'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50'} alt=""/>
          </div>
          <div className="col-md-8">
            <h5><Link to={'/view/${cv.id}'}>{cv.name}</Link></h5>
          </div>
        </div>
      </div>
    );
  }
}

export default SingleCV;