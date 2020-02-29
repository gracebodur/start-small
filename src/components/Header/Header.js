import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import {Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

class Header extends Component {

    state = {isLoggedIn: false}

    handleLogOutClick = () => {
        TokenService.clearAuthToken()
    }

    renderLogoutLink() {
        return(
            <div className='Header__logged-in Nav dim underline-hover'>
                <Link 
                    onClick={this.handleLogOutClick} 
                    className='nav-link'
                    to='/'>
                    <p>
                    Log out
                    </p>
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return(
            <nav className='Nav dim underline-hover'>
                <Link to='/login'>
                    <p className='nav-link' id='login'>Log in</p>
                </Link>
                <Link to='/register'>
                    <p className='nav-link' id='register'>Register</p>
                </Link> 
            </nav>

        )
    }

    render() {
        return (
            <nav className='Header'>
                <div>
                    <Logo />
                    { TokenService.hasAuthToken()
                    ? this.renderLogoutLink()
                    : this.renderLoginLink() }
                </div>
             </nav>
        )
    }
}


export default Header
