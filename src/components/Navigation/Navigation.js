import React from 'react'
import {Link } from 'react-router-dom'
import './Navigation.css'

function Navigation() {
    return (
        <nav className='Nav dim underline-hover'>
            <Link to='/register'>
                <p className='register-link' id='register'>Register</p>
            </Link>
       
            <Link to='/login'>
                <p className='login-link' id='login'>Log in</p>
            </Link>

        </nav>
    )
}
   



export default Navigation