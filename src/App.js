import React, { Component } from 'react';
import { BrowserRouter, Link, Route} from 'react-router-dom';
import './App.css';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import Portfolio from './components/Portfolio/Portfolio';
import Footer from './components/Footer/Footer';
import Particles from 'react-particles-js';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 800
      }
    },
    color: {
      value: '#000'
    },
    size: {
      value: 6,
      random: true
    },
    line_linked: {
      enable: false
    }
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles
          className="Particles"
          params={particlesOptions} />
          <BrowserRouter>
            <div>
              <Route exact path="/home" Component={Hero}/>
              <Route path="/about" Component={AboutMe}/>
              <Route path="/projects" Component={Portfolio}/>
            </div>
          </BrowserRouter>
        <Hero />
        <AboutMe/>
        <Portfolio/>
        <Footer/>
      </div>
    );
  }
}

export default App;
