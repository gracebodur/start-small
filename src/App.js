import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Particles from 'react-particles-js'
import Header from './components/Header/Header'
import PrivateRoute from '../src/components/Utils/PrivateRoute'

import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
// import ProjectPage from './routes/ProjectPage/ProjectPage'
import SearchPage from './routes/SearchPage/SearchPage'
import AccountPage from './routes/AccountPage/AccountPage'
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
        <header>
          <Header />
        </header>
        <main>
        <Switch>
          <Route exact path='/'>
            <LandingPage/>
          </Route>

          <Route path='/login'> 
            <LoginPage />
          </Route>

          <Route path='/register'>
            <RegistrationPage />
          </Route>

          <Route path='/:project_id'>
            <SearchPage/>
          </Route>

          {/* <Route path='/:project_id'>
            <ProjectPage />
          </Route> */}

          <PrivateRoute path='/account/'>
            <AccountPage />
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
