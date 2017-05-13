import React from 'react';
import './personalcv.css';

const PersonalCV = React.createClass( {

  handleSubmit(e) {
    e.preventDefault();
    const name = this.refs.name.value;
    alert(name);
  },

  render() {
    return (
      <div className="container personalcv">
        <h2 className="cv-header">Your Personal CV</h2>
        <form ref="cvForm" className="form-group" onSubmit={this.handleSubmit}>
          <div className="row main-content">
            <div className="col-md-5 general-info">
              <div className="basic-info">
                <h3>Basic information</h3>
                <label>Enter your name:</label>
                <input type="text" ref="name" placeholder="Name" className="form-control"/>

                <label>Enter your birthday</label>
                <input type="text" ref="birthday" placeholder="Enter your birthday" className="form-control"/>

                <label>Enter your phone number</label>
                <input type="text" ref="phonenumber" placeholder="Enter your phone number" className="form-control"/>

                <label>Enter your address</label>
                <input type="text" ref="address" placeholder="Enter your address" className="form-control"/>

                <label>Enter your email</label>
                <input type="text" ref="email" placeholder="Enter your email" className="form-control"/>
              </div>

              <div className="basic-info">
                <h3>Skills</h3>
                <h6>Programming skill</h6>
                <label className="checkbox-inline">
                  <input type="checkbox" value=""/>Java
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value=""/>C
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value=""/>Rails
                </label>

                <h6>Others</h6>
                <label className="checkbox-inline">
                  <input type="checkbox" value=""/>Teamwork
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value=""/>Foreign Language
                </label>
                <label className="checkbox-inline">
                  <input type="checkbox" value=""/>Development Tools
                </label>
              </div>

              <div className="basic-info">
                <h3>Career expectation</h3>
                ​<textarea id="txtArea" rows="5" className="form-control"
                  placeholder="Enter your job expectation"></textarea>
              </div>
            </div>
            {/*END GENERAL INFO*/}

            <div className="col-md-7 main-info">
              <div id="degree main-info-box">
                <h3>Degree</h3>
                <table class="table table-bordered table-striped table-hover">
                  <colgroup>
                    <col className="col-md-4"/>
                    <col className="col-md-7"/>
                  </colgroup>
                  <tbody>
                  <tr>
                    <td>Time</td>
                    <td>Activity</td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  </tbody>
                </table>

                <h3>Working experiences</h3>
                <table class="table table-bordered table-striped table-hover">
                  <colgroup>
                    <col className="col-md-4"/>
                    <col className="col-md-7"/>
                  </colgroup>
                  <tbody>
                  <tr>
                    <td>Time</td>
                    <td>Activity</td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  </tbody>
                </table>

                <h3>Certificates & Awards</h3>
                <table class="table table-bordered table-striped table-hover">
                  <colgroup>
                    <col className="col-md-4"/>
                    <col className="col-md-7"/>
                  </colgroup>
                  <tbody>
                  <tr>
                    <td>Time</td>
                    <td>Activity</td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  <tr>
                    <td><input type="text" className="form-control"/></td>
                    <td><input type="text" className="form-control"/></td>
                  </tr>
                  </tbody>
                </table>

                <input type="submit" className="btn btn-success success-custom" value="Submit"/>
              </div>
            </div>
          </div>
          {/*<input type="submit" hidden/>*/}
        </form>
      </div>
  )
  }
  });

  export default PersonalCV;