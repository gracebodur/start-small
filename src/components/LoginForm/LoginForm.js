import React, {Component} from 'react'
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
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
      }


    handleSubmit = (e) => {
        e.preventDefault()
        const {user_name, password} = e.target

        // console.log('Submitting...')
        // console.log(user_name.value, password.value)

        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }


    render() {
        return (
            <main className='Login-main center'>
                <form
                    // method='GET'
                    onSubmit={this.handleSubmit} 
                    className= 'Login-form center'>
                    <fieldset className='Login-fieldset'>
                        <legend 
                            className='Login-legend center'>
                            User Log In
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
                            value={this.state.user_name}
                            onChange={this.handleChange} 
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
                            value={this.state.password}
                            onChange={this.handleChange}   
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
                        <Link to='/search'>
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