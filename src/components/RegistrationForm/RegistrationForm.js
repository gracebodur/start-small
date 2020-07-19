import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../../services/auth-api-service'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
      onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target

    this.setState({ error: null })
    AuthApiService.postUser({
      user_name: user_name.value,
      password: password.value,
      full_name: full_name.value,
    })
      .then(user => {
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
      })
      .catch(res => {
        this.setState({ error: res.error })
      })
  }

 
  render() {
    const { error }  = this.state
      return(
        <main>
        <form onSubmit={this.handleSubmit} className='Register-form'>
          <div role='alert'>
              {error && <p className='r-red'>{error}</p>}
          </div>
          <div className='form-con'>
          <header className='head-form'>
            <h2>Register</h2>
            <p>let's get you on board!</p>
          </header>
          <br />
          <div className='field-set'>
            <input
              id="reg-fullname" 
              className="reg-input" 
              type="text"
              name="full_name"
              placeholder="Full name" 
              required
            />
            <br />
            <input
              id="reg-username" 
              className="reg-input" 
              type="text" 
              name="user_name"
              placeholder="Username" 
              required
            />
            <br />
            <input
              id="reg-password"
              className='reg-input' 
              type="password" 
              name="password" 
              placeholder="Password"
              required
            />
            <br />
            <button className="log-in">Register</button>
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
       

export default RegistrationForm


