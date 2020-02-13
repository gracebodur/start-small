import React from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'

function RegistrationForm() {
        return(
            <>
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
                        name="fullname"
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
                        name="user_name"
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
                    <Link to='/users-page'><input
                        className="Register-button-input" 
                        type="submit" 
                        value="Register"/></Link>
                    </div>
                    <div className="Cancel-button center">
                    <Link to='/search-page'><input 
                        className="Register-cancel-button-input" 
                        type="submit" 
                        value="Cancel"/></Link>
                    </div>
              </fieldset>
            </form>
        </main>
        </>
        )
    }

export default RegistrationForm