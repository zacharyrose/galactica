import React from 'react';

const Nav = () => (

<div className = "nav">
  <div className="topnav">
    <div className="logo">
      <div className="logo-img-container">
        <img src="images/gallactica-logo.jpg" />
      </div>
    </div>
    <ul className="navlinks">
      <li><a className="navlink" href="#">ABOUT THE CREW</a></li>
      <li><a className="navlink" href="#">HYPERSPACE FAQS</a></li>
      <li><a className="navlink" href="#">THE SPACECRAFT</a></li>
      <li className="social-container">
        <ul className="social-links">
          <li><a href="#"><i className="fa fa-facebook"></i></a></li>
          <li><a href="#"><i className="fa fa-twitter"></i></a></li>
          <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
          <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
        </ul>
      </li>
    </ul>
  </div>
  <div className="topnav2">
    <div className="social-margin-left"></div>
    <div className="social-container">
      <ul className="social-links">
        <li><a href="#"><i className="fa fa-facebook"></i></a></li>
        <li><a href="#"><i className="fa fa-twitter"></i></a></li>
        <li><a href="#"><i className="fa fa-pinterest"></i></a></li>
        <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
      </ul>
    </div>

  </div>
</div>
);

module.exports = Nav;
