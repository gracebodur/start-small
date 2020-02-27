import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Particles from 'react-particles-js'
import Header from './components/Header/Header'
import PrivateRoute from '../src/components/Utils/PrivateRoute'
import PublicOnlyRoute from '../src/components/Utils/PublicOnlyRoute'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import SearchPage from './routes/SearchPage/SearchPage'
import UserPage from './routes/UserPage/UserPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'

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
      <div>
        <Particles 
          params={particlesOptions} 
          className='Particles'/>
        <Header />
        
        <main>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>

          <PublicOnlyRoute path='/login'> 
            <LoginPage />
          </PublicOnlyRoute>

          <PublicOnlyRoute path='/register'>
            <RegistrationPage />
          </PublicOnlyRoute>

          <PrivateRoute path='/projects/:projects_id'>
            <SearchPage/>
          </PrivateRoute>

          <PrivateRoute path='/users'>
            <UserPage />
          </PrivateRoute>

          <Route>
            <NotFoundPage/>
          </Route>
        </Switch>
        </main>
      </div>
    )
  }
}


export default App
