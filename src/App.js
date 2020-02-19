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
  constructor(props) {
    super(props)
    this.state = {
      projectsData: [],
      results: [],
      isLoggedIn: false,
      isLoggedOut: false,
    }
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(result => {
      const projects = result.map(item => {
        return item
      })
      this.setState({
        projectsData: projects
    })
  })
}

  handleSearchSubmit = (searchTerms, city,state) => {
    console.log('projects arr', this.state.projects)
    let resultsData = this.state.projectsData.filter(
      res => res.schoolName === searchTerms || res.city === city ||  res.state === state)
      console.log('results', resultsData)
      this.setState({
        results: resultsData
      })
  }

  handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedOut: true});
  }

  render() {
    console.log('results', this.state.results)
    return (
      <>
        <Particles 
          params={particlesOptions} 
          className='Particles'/>

        <Header 
          onClick={this.handleLoginClick} 
          isLoggedIn={this.state.isLoggedIn}
          isLoggedOut={this.state.isLoggedOut}/>
        
        <Switch>

          <Route exact path='/'>
            <LandingPage  projectsData={this.state.projectsData}/>
           
          </Route>

          <Route path='/login'> 
            <LoginPage />
          </Route>

          <Route path='/register'>
            <RegistrationPage />
          </Route>

          <Route path='/search'>
            <SearchPage
              handleSearchSubmit={this.handleSearchSubmit} 
              results={this.state.results}
            />
          </Route>

          <Route path='/account'>
            <AccountPage 
              onClick={this.handleLogoutClick} 
              isLoggedOut={this.state.isLoggedOut}
              isLoggedIn={this.state.isLoggedIn}/>
          </Route>

        </Switch>
      </>
    )
  }
}


export default App
