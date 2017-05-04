import React from "react";
import { connect } from 'react-redux';
import './home.css';

class HomePage extends React.Component {
  render() {
    if(this.props.logged_in) {
      return     (
        <div className="jumbotron banner">
          <div className="banner-wrapper">
            <h2>You've logged in successfully!</h2>
          </div>
        </div>
      )
    }
    return (
      <div className="jumbotron banner">
        <div className="banner-wrapper">
          <h1>SIE Internship System</h1>
          <p>This is authorized site, please click login to start</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {logged_in: state.session};
}
export default connect(mapStateToProps)(HomePage);
