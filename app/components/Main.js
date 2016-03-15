import React from 'react';

const Main = () => (
  <div>
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

<div className="hero">
  <div className="container">
    <h1>THE LAST SUPPER</h1>
    <p><a className="readmorelink" href="#">READ MORE</a></p>
  </div>
</div>

<div className="video">
  <div className="videoImage">
    <img src="images/video-snatchers.jpg" />
  </div>
  <div className="videoText">
    <h1>Video: A Growing Number of Cylons are Feeling Misunderstood</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
  </div>
</div>

<div className="hero2"></div>

<div className="bottom">
  <div className="news">
    <h1>IN THE NEWS</h1>
    <div className="newsitem">
      <h1>Cable TV Blackout in The Twelve colonies</h1>
      <p><i className="fa fa-calendar"></i> Tuesday, September 16, 2014</p>
    </div>
    <div className="newsitem">
      <h1>Earth Appears Not to be Where is Was Before</h1>
      <p><i className="fa fa-calendar"></i> Tuesday, September 16, 2014</p>
    </div>
    <div className="newsitem">
      <h1>Cloud 9 Closed for Renovation</h1>
      <p><i className="fa fa-calendar"></i> Tuesday, September 16, 2014</p>
    </div>
  </div>
  <div className="news">
    <h1>EVENT CALENDAR</h1>
    <div className="newsitem">
      <h1>Caprican Bake Sale</h1>
      <p><i className="fa fa-calendar"></i> Tuesday, September 16, 2014</p>
    </div>
    <div className="newsitem">
      <h1>Annual Sixes and Eights Mixer</h1>
      <p><i className="fa fa-calendar"></i> Tuesday, September 16, 2014</p>
    </div>
    <div className="newsitem">
      <h1>2015 Raptor Maintenance and Repair Conference</h1>
      <p><i className="fa fa-calendar"></i> Tuesday, September 16, 2014</p>
    </div>
  </div>

  <div className="news newsfeatured">
    <h1>SO SAY WE ALL</h1>
    <div className="newsitem">
      <div className="newsimage">
        <img src="images/news-thumb.png" />
      </div>
      <h1>When is it appropriate to high-five a commander?</h1>
    </div>
  </div>
</div>

</div>
);

module.exports = Main;
