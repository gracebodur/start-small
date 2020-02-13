import React from 'react'
import { Link } from 'react-router-dom'
import './LoginForm.css'

function LoginForm({ onRouteChange}) {
    return (
        <main className='Login-main center'>
            <form className= 'Login-form center'>
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
                   <Link to='/users-page'><input
                        className="Login-button-input" 
                        type="submit" 
                        value="Log in"/></Link>
                    </div>
                    <div className="Cancel-button center">
                    <Link to='/search-page'><input 
                        className="Login-cancel-button-input" 
                        type="submit" 
                        value="Cancel"/></Link>
                    </div>
                    <div className="Register-link center">
                    <Link to='/users-page'
                        className="Login-register-link" >
                        Register</Link>
                    </div>
              </fieldset>
            </form>
        </main>
    )
}

export default LoginForm