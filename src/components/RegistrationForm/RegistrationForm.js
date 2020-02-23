import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import AuthApiService from '../services/auth-api-services'
import './RegistrationForm.css'

class RegistrationForm extends Component {
  static defaultProps = {
      onRegistrationSuccess: () => {}
  }

  constructor(props) {
      super(props)
      this.state = {
          full_name: '',
          user_name: '',
          password: '',
          error: null 
      }
  }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, user_name, password } = ev.target

    // console.log('registration form submitted')
    // console.log({ full_name, user_name, password })
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

      full_name.value = ''
      user_name.value = ''
      password.value = ''
      this.props.onRegistrationSuccess()
    }
 
  render() {
    const { error }  = this.state
      return(
        <main className='Register-main center'>
        <form 
          onSubmit={this.handleSubmit}
          className= 'Register-form center'>
          <div role='alert'>
              {error && <p className='red'>{error}</p>}
          </div>
        <fieldset className='Register-fieldset'>
            <legend className='Register-legend center'>
              Register
            </legend>
            <div className="Register-full_name">
              <label 
                className="Fullname-label" 
                htmlFor="register-fullname">
                Full Name
              </label>
              <input
                id="register-fullname" 
                className="Fullname-input" 
                type="text"
                name="full_name"
                placeholder="Enter full name" 
                required/>
              </div>
              <div className="Register-new_user_name">
              <label 
                className="New-user_name-label" 
                htmlFor="register-new_user_name">
                User Name
              </label>
              <input
                id="register-new_user_name" 
                className="New-user_name-input" 
                type="text" 
                name="user_name"
                placeholder="Enter user name" 
                required
              />
              </div>
              <div className="Register-password">
              <label 
                className='Password-label' 
                htmlFor="Register-password">
                Password
              </label>
              <input
                id="register-password"
                className='Password-input' 
                type="password" 
                name="password" 
                placeholder="Enter password"
                required
              />
              </div>
              <div className="Register-button center">
              <button
                className="Register-button-input" 
                type="submit">
                Register
              </button>
              </div>
              <div className="Cancel-button center">
                <Link to='/'><button
                  className="Register-cancel-button-input" 
                  type="submit">
                  Cancel
                </button></Link>
              </div>
            </fieldset>
          </form>
        </main>
      )
    }
}
       

export default RegistrationForm

