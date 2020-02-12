import React from 'react'
import './Login.css'

function Login({ onRouteChange}) {
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
                        name="login-username"
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
                    <input
                        onClick={() => onRouteChange('users-page')}
                        className="Login-button-input" 
                        type="submit" 
                        value="Log in"/>
                    </div>
                    <div className="Cancel-button center">
                    <input 
                        className="Login-cancel-button-input" 
                        type="submit" 
                        value="Cancel"/>
                    </div>
                    <div className="Register-link center">
                    <p 
                        onClick={() => onRouteChange('register')}
                        className="Login-register-link">
                        Register</p>
                    </div>
              </fieldset>
            </form>
        </main>
    )
}

export default Login