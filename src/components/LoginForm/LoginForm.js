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
            <main>
                <div role='alert'>
                    {error && <p className='red'>{error}</p>}
                </div>
            <form onSubmit={this.handleSubmitJwtAuth} className= 'Login-form center'>
                <div className='form-con'>
                    <header className='head-form'>
                        <h2>Log In</h2>
                        <p>Welcome back! please login to your account</p>
                    </header>
                    <br />
                    <div className='field-set'>
                        <span className="input-item">
                            <i className="fa fa-user-circle"></i>
                        </span>
                        <input
                            id="form-username" 
                            className="form-input" 
                            type="text"
                            name="user_name"
                            placeholder="@UserName" 
                            required
                        />
                        <br />
                        <span className="input-item">
                            <i className="fa fa-key"></i>
                        </span>
                        <input 
                            className='form-input' 
                            type="password" 
                            name="password" 
                            id="form-password" 
                            placeholder="Password" 
                            required
                        />
                        <br />
                        <button className="log-in"> Log In </button>
                        <Link to='/'>
                            <button className="btn cancel submit-cancel">Cancel</button>
                        </Link>
                        </div>
                    </div>
                </form>
            </main>
        )
    }
    
}

export default LoginForm


