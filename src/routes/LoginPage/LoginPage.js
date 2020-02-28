import React, {Component} from 'react'
import {Redirect} from 'react-router-dom'
import LoginForm from '../../components/LoginForm/LoginForm'
import TokenService from '../../services/token-service'

class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    constructor() {
      super()
      this.state = {
        loggedIn: TokenService.hasAuthToken()
        ? true : false
      }
    }

    setLoggedIn = () => {
      this.setState({
        loggedIn: TokenService.hasAuthToken()
            ? true
            : false
      })
    }

    render() {
       
        return (
          <section className='LoginPage'>
            {this.state.loggedIn ? <Redirect to="/" /> :  <LoginForm
              onLoginSuccess={this.setLoggedIn} />}
          </section>
        )
      }

}

export default LoginPage