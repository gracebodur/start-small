import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import Particles from 'react-particles-js'
import Header from './components/Header/Header'

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
      projects: projectsData,
      results: [],
      isLoggedIn: false,
      isLoggedOut: false,
      checked: false
    }
  }

  handleSearchSubmit = (searchTerms, city,state) => {
    console.log('projects arr', this.state.projects)
    let resultsData = this.state.projects.filter(
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

  onClick = (e, props) => {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    console.log('results', this.state.results)
    const { checked } = this.state;
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
            <LandingPage  projectsData={this.state.projects}/>
           
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

          {/* <Route path='/project'>
           
          </Route> */}

          <Route path='/account'>
            <UserPage 
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


// {/* <Route path='/project/:projectId'>
//           <Route path='/project'>
//              <ProjectList  results={this.results}/>
//             <ProjectItems />
//           </Route>  */}