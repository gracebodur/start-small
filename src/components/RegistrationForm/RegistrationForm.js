import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../../components/Utils/Utils'
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
        <Section className='container'>
                <div className="reg-form center_div row">
                    <form onSubmit={this.handleSubmit} className='col-md-12 form-wrapper'>
                        <h2 className='reg-header h2'>Register</h2>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className="form-group">
                            <label className='h6'>Full Name</label>
                            <input
                                id = "reg-fullname"
                                className = "reg-input"
                                type = "text"
                                name = "full_name"
                                placeholder = "Type your full name"
                                required />
                        </div>
                        <div className="form-group">
                            <label className='h6'>User Name</label>
                            <input
                                id = "reg-username"
                                className = "reg-input"
                                type = "text"
                                name = "user_name"
                                placeholder = "Type your username"
                                required />
                        </div>
                        <div className="form-group">
                            <label className='h6'>Password</label>
                            <input
                                id = "reg-password"
                                className = 'reg-input'
                                type = "password"
                                name = "password"
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                                required />
                        </div>
                        <div className="form-group clearfix">
                            <button type="submit" className="btn float-left">Register</button>
                        </div>
                    </form>
                </div>
            </Section>
      )
    }
}
       

export default RegistrationForm


