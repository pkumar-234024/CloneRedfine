import 'bootstrap/dist/css/bootstrap.min.css'
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';


function Navbar() {
    return (
        <>
<nav className="navbar navbar-expand-md bg-dark navbar-dark sticky-top">
  <a className="navbar-brand" href="#">GreatProperty</a>
  <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navb" aria-expanded="true">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div id="navb" className="navbar-collapse collapse hide">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Sell</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Buy</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">About</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#">Contact</a>
      </li>
    </ul>

    <ul className="nav navbar-nav ml-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#"><span className="fas fa-user"></span> Sign Up</a>
      </li>
      <li className="nav-item active">
        <a className="nav-link" href="#"><span className="fas fa-sign-in-alt"></span> Login</a>
      </li>
    </ul>
  </div>
</nav>
        </>
    );
    
}

export default Navbar;