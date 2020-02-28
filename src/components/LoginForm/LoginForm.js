import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Link } from 'react-router-dom'
import './LoginForm.css'

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => {}
    }

    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: '',
            error: null
        }
    }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target
    
      TokenService.saveAuthToken(
        TokenService.makeBasicAuthToken(user_name.value, password.value)
      )
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState({ error: null })
        const { user_name, password } = ev.target
       
        AuthApiService.postLogin({
          user_name: user_name.value,
          password: password.value,
        })
          .then(res => {
            user_name.value = ''
            password.value = ''
            TokenService.saveAuthToken(res.authToken)
            this.props.onLoginSuccess()
          })
          .catch(res => {
            this.setState({ error: res.error })
          })
      }

    render() {
        const { error }  = this.state
        return (
            <main className='Login-main center'>
                <form
                    onSubmit={this.handleSubmitJwtAuth}
                    className= 'Login-form center'>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
                    <fieldset className='Login-fieldset'>
                        <legend 
                            className='Login-legend center'>
                            Log In
                        </legend>
                        <div className="Login-user_name">
                        <label 
                            className="Username-label" 
                            htmlFor="login-username">
                            Username
                        </label>
                        <input
                            id="login-username" 
                            className="Username-input" 
                            type="text"
                            name="user_name"
                            placeholder="Enter Username" />
                        </div>
                        <div className="Login-password">
                        <label 
                            className='Password-label' 
                            htmlFor="login-password">
                            Password
                        </label>
                        <input 
                            className='Password-input' 
                            type="password" 
                            name="password" 
                            id="login-password" 
                            placeholder="Enter Password" />
                        </div> 
                        <div className="Login-button center">
                        <button
                            className="Login-button-input" 
                            type="submit">
                            Log in
                            </button>
                        </div>
                        <div className="Cancel-button center">
                        <Link to='/'>
                            <button 
                            className="Login-cancel-button-input" 
                            type="submit">
                            Cancel
                            </button>
                        </Link>
                        </div>
                  </fieldset>
                </form>
            </main>
        )
    }
    
}

export default LoginForm