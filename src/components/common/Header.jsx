import React from 'react';
import { Link, IndexLink } from 'react-router';

const Header = () => {
  return (
    <nav className="navbar navbar-inverse navbar-embossed navbar-fixed-top" role="navigation">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-01">
          <span className="sr-only">Toggle navigation</span>
        </button>
        <IndexLink className="navbar-brand" to="/">SIE Internship Manager</IndexLink>
      </div>
      <div className="collapse navbar-collapse" id="navbar-collapse-01">
        <ul className="nav navbar-nav navbar-left">
          <li><Link to="/">Notifications<span className="navbar-unread">1</span></Link></li>
          <li className="dropdown">
            <Link to="/" className="dropdown-toggle" data-toggle="dropdown">Internship <b className="caret"></b></Link>
            <span className="dropdown-arrow"></span>
            <ul className="dropdown-menu">
              <li><Link to="/">Main Info</Link></li>
              <li><Link to="/topics">Register Topic</Link></li>
              <li><Link to="/">Timetable</Link></li>
              <li><Link to="/">Internship schedule</Link></li>
            </ul>
          </li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/cvs">CV List</Link></li>
        </ul>
        <form className="navbar-form navbar-right" action="#" role="search">
          <div className="form-group">
            <div className="input-group">
              <input className="form-control" id="navbarInput-01" type="search" placeholder="Search"/>
              <span className="input-group-btn">
                      <button type="submit" className="btn"><span className="fui-search"></span></button>
                    </span>
            </div>
          </div>
        </form>
      </div>
    </nav>
  )
}

export default Header;