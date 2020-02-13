import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user_name: '',
            password: ''
        }
    }

    handleNameChange = (e) => {
        this.setState({
            user_name: e.target.value,
        });
      }

    handlePasswordChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault()
        // alert('Successfully logged in')
    }

    handleClick = () => {

    }


    render() {
        return (
            <main className='Login-main center'>
                <form
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
                            onChange={this.handleNameChange} 
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
                            onChange={this.handlePasswordChange}   
                            id="login-password" 
                            placeholder="Enter Password" />
                        </div> 
                        <div className="Login-button center">
                        <button
                            className="Login-button-input" 
                            type="submit"
                            onClick={this.handleClick}>Log in</button>
                        </div>
                        <div className="Cancel-button center">
                        <Link to='/search-page'><button 
                            className="Login-cancel-button-input" 
                            type="submit">Cancel</button></Link>
                        </div>
                  </fieldset>
                </form>
            </main>
        )
    }
    
}

export default LoginForm