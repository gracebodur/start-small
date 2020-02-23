import React, {Component} from 'react'
import TokenService from '../services/token-service'
import {Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

class Header extends Component {
    handleLogOutClick = () => {
    }

    renderLogoutLink() {
        return(
            <div>
                 <nav className='Nav dim underline-hover'>
                    <Link 
                        onClick={this.handleLogoutClick} 
                        className='logout-link'
                        to='/'>
                        <p>
                        Log out
                        </p>
                    </Link>
                 </nav>
             </div>
        )
    }

    renderLoginLink() {
        return(
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

    render() {
        return (
            <div>
                <Logo />
            { TokenService.hasAuthToken()
                ? this.renderLogoutLink()
                : this.renderLoginLink() }
             </div>
        )
    }
}


export default Header
