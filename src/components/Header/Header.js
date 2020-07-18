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
            <div className='Header__logged-in'>
                <Link 
                    onClick={this.handleLogOutClick} 
                    to='/'>
                    Log out
                </Link>
            </div>
        )
    }

    renderLoginLink() {
        return(
            <div className='Header__not-logged-in'>
                <Link to='/login'>
                    Log in
                </Link>

                <Link to='/register'>
                    Register
                </Link> 
            </div>

        )
    }

    render() {
        return (
            <nav className='Header'>
                <Logo />
                { TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink() }
            </nav>
        )
    }
}


export default Header

