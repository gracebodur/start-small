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

import ProjectList from './components/ProjectList/ProjectList'

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

const isFavorite = <img src='./img/heart-fill.png' className="ri-heart-line favorite" alt='heart'></img>
const isDeleted = <img src='./img/delete-bin-line.png' className="ri-heart-line favorite" alt='delete'></img>


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: projectsData,
      results: [],
      addProject: isFavorite,
      deleteProject: isDeleted,
      isLoggedIn: false,
      isLoggedOut: false
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
              addProject={this.state.addProject}
              deleteProject={this.state.deleteProject}/>
          </Route>

          <Route path='/project'>
            <ProjectList results={this.state.results} />
          </Route>

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