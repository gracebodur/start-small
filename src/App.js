import React, { Component } from 'react';
import Particles from 'react-particles-js'
import Logo from './components/Logo/Logo'
import SearchButton from './components/SearchButton/SearchButton'
import Navigation from './components/Navigation/Navigation'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
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
  constructor() {
    super()
    this.state = {
      route: 'login',
      isLoggedIn: false
    }
  }

  onRouteChange = (route) => {
    if(route === 'logout') {
      this.setState({isLoggedIn: false})
    } else if (route === 'landing') {
      this.setState({isLoggedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    return (
      <div className="App">
        <Particles params={particlesOptions} className='Particles'/>
        <Navigation onRouteChange={this.onRouteChange}/>
        { this.state.route === 'landing' ? <div>
            <Logo />
            <SearchButton />
            <Header />
            <Intro />
            <Footer /> 
         </div>
         : (
           this.state.route === 'login' 
           ? <Login onRouteChange={this.onRouteChange}/>
          : <Register onRouteChange={this.onRouteChange}/>
         )
        
        }
      </div>
    )
  }
}


export default App
