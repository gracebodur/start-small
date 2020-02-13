import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Particles from 'react-particles-js'

import Header from './components/Header/Header'
import SearchButton from './components/SearchButton/SearchButton'
import LoginForm from './components/Login/LoginForm'
import RegistrationForm from './components/Registration/RegistrationForm'

import LandingPage from './routes/LandingPage/LandingPage'
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
    this.state = {
      route: 'login',
      isLoggedIn: false
    }
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
            <LoginForm />
          </Route>

          <Route path='/register'>
            <RegistrationForm />
          </Route>

          <Route path='/search/:projectId'>
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
