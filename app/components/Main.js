import React from 'react';
import Nav from './Nav';
import Hero from './Hero';
import Video from './Video';
import Bottom from './Bottom';

class Main extends React.Component{
  render () {
    return (
      <div>
        <Nav />
        <Hero />
        <Video />

        <div className="hero2"></div>
        <Bottom />
      </div>
    );
  }
}

module.exports = Main;
