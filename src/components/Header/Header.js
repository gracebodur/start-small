import React from 'react'
import {Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

function Header() {
    return (
        <div>
            <nav className='Nav dim underline-hover'>
                <Link to='/register'>
                    <p className='register-link' id='register'>Register</p>
                </Link>

                <Link to='/login'>
                    <p className='login-link' id='login'>Log in</p>
                </Link>
            </nav>
            <div>
                <Logo />
            </div>
        </div>
    )
}


export default Header
    