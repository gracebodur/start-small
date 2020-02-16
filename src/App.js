import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import Particles from 'react-particles-js'

import Header from './components/Header/Header'
// import ProjectItems from './components/ProjectItems/ProjectItems'

import LandingPage from './routes/LandingPage/LandingPage'
import LoginPage from './routes/LoginPage/LoginPage'
import RegistrationPage from './routes/RegistrationPage/RegistrationPage'
import SearchPage from './routes/SearchPage/SearchPage'
import UserPage from './routes/UserPage/UserPage'

import projectsData from './dummyProjectsList'

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
  constructor(props) {
    super(props)
    this.state = {
      projects: projectsData,
      results: []
    }
  }

  handleSearchSubmit = (searchTerms, city) => {
    console.log('projects arr', this.state.projects)
    let resultsData = this.state.projects.filter(res => res.schoolName === searchTerms && res.city === city);
      console.log('results', resultsData)
      this.setState({
        results: resultsData
      })
  }

  render() {
    console.log('results', this.state.results)
    return (
      <>
        <Particles params={particlesOptions} className='Particles'/>
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
            <SearchPage handleSearchSubmit={this.handleSearchSubmit} results={this.state.results}/>
          </Route>

          {/* <Route path='/project/:projectId'>
          <Route path='/project'>
             <ProjectList  results={this.results}/>
            <ProjectItems />
          </Route> */}

          <Route path='/account'>
            <UserPage />
          </Route>
        </Switch>
      </>
    )
  }
}


export default App
