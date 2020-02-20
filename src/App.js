import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Particles from 'react-particles-js'
import Header from './components/Header/Header'

import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import SearchPage from './routes/SearchPage/SearchPage'
import AccountPage from './routes/AccountPage/AccountPage'

import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 20,
      density: {
        enable: true,
        value_area: 800,
      color: {
        value: '#362245',
      }
      }
    }
  }
}


class App extends Component {
  render() {
    return (
      <>
        <Particles 
          params={particlesOptions} 
          className='Particles'/>
        <Header />
        <Switch>
          <Route exact path='/'>
            <LandingPage />
          </Route>

          <Route path='/login'> 
            <LoginPage />
          </Route>

          <Route path='/register'>
            <RegistrationPage />
          </Route>

          <Route path='/search'>
            <SearchPage />
          </Route>

          <Route path='/account'>
            <AccountPage />
          </Route>

        </Switch>
      </>
    )
  }
}


export default App
