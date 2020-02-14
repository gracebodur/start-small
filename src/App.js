import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Particles from 'react-particles-js'

import Header from './components/Header/Header'
import SearchButton from './components/SearchButton/SearchButton'


import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './components/Registration/RegistrationPage'
import SearchPage from './routes/SearchPage/SearchPage'
import UsersPage from './routes/UsersPage/UsersPage'

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
    this.state = {}
  }

  render() {
    return (
      <>
        <Particles params={particlesOptions} className='Particles'/>
        <Header />
        <SearchButton />
        
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

          <Route path='/search-page'>
            <SearchPage />
          </Route>

          <Route path='/users-page'>
            <UsersPage />
          </Route>
        </Switch>
      </>
    )
  }
}


export default App
