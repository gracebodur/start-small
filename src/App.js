import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PrivateRoute from '../src/components/Utils/PrivateRoute'
import PublicOnlyRoute from '../src/components/Utils/PublicOnlyRoute'
import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import ProjectPage from './routes/ProjectPage/ProjectPage'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage'
import './App.css';

class App extends Component {
  
  state = { hasError: false }

  static getDerivedStateFromError(error) {
    console.error(error)
    return { hasError: true }
  }

  render() {
    return (
      <div>
        <header>
        <Header />
        </header>
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
            <ProjectPage/>
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
