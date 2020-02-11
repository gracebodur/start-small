import React, { Component } from 'react';
// import { Switch, Link } from 'react-router-dom'
import Particles from 'react-particles-js'
import Logo from './components/Logo/Logo'
import Navigation from './components/Navigation/Navigation'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 800,
      color: {
        value: '#FFA500'

      }
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='Particles'/>
        <Navigation />
        <Logo />
        <Header />
        <Footer />
      </div>
    )
  }
}


export default App
