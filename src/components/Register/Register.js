import React from 'react'
import './Register.css'

function Register({onRouteChange}) {
        return(
			<main className='Register-main center'>
            <form className= 'Register-form center'>
                <fieldset className='Register-fieldset'>
                    <legend 
                        className='Register-legend center'>
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
                        name="Register-fullname"
                        placeholder="Enter full name" />
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
                        name="Register-new_user_name"
                        placeholder="Enter user name" />
                    </div>
                    <div className="Register-password">
                    <label 
                        className='Password-label' 
                        htmlFor="Register-password">
                        Password
                    </label>
                    <input 
                        className='Password-input' 
                        type="password" 
                        name="password" 
                        id="register-password" 
                        placeholder="Enter Password" />
                    </div>
                    <div className="Register-button center">
                    <input
                        onClick={() => onRouteChange('users-page')}
                        className="Register-button-input" 
                        type="submit" 
                        value="Register"/>
                    </div>
                    <div className="Cancel-button center">
                    <input 
                        className="Register-cancel-button-input" 
                        type="submit" 
                        value="Cancel"/>
                    </div>
              </fieldset>
            </form>
        </main>
        )
    }

export default Register