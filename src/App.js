import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import PrivateRoute from '../src/components/Utils/PrivateRoute'
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
      <div className='App'>
        <header className='App__header'>
        <Header />
        </header>
        <main className='App__main'>
        {this.state.hasError && <p className='red'>Something went wrong! Oh no!</p>}
        <Switch>
          <Route 
            exact path='/'
            component={LandingPage}
          />

          <Route 
            path='/login' 
            component={LoginPage} 
          />

          <Route 
            path='/register' 
            component={RegistrationPage} 
          />

          <PrivateRoute 
            path='/projects/:project_id' 
            component={ProjectPage}
          />

          <Route
            component={NotFoundPage}
          />
        </Switch>
        </main>
      </div>
    )
  }
}


export default App
