import React from 'react';
import logo from './logo.png';
import {Link} from 'react-router-dom';

export function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm bg-dark  navbar-dark">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Profile Pic" style={{ width: "30px", margin: "5px" }} className="rounded-pill" />
          DHULIPALLA DINESH VENKATA CHANDRA
        </a>
        <div class="nav ms-auto">
            <Link to="/" class="nav-link"><b>Home</b></Link>
            <Link to="/Education" class="nav-link"><b>Education</b></Link>
            <Link to="/Project" class="nav-link"><b>Projects</b></Link>
            <Link to="/Skills" class="nav-link"><b>Skills</b></Link>
        </div>
      </nav>
    </div>
  );
}
