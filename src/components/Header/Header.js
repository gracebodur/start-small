import React, {Component} from 'react'
import TokenService from '../../services/token-service'
import {Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

class Header extends Component {

    state = {isLoggedIn: false}

    // componentDidMount() {
    //     this.setState({
    //         isLoggedIn:  TokenService.hasAuthToken()
    //     })
    // }

    handleLogOutClick = () => {
        TokenService.clearAuthToken()
    }


    renderLogoutLink() {
        return(
            <div>
                 <nav className='Nav dim underline-hover'>
                    <Link 
                        onClick={this.handleLogOutClick} 
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
                <Link to='/login'>
                    <p className='login-link' id='login'>Log in</p>
                </Link>
                <Link to='/register'>
                    <p className='register-link' id='register'>Register</p>
                </Link> 
            </nav>

        )
    }

    render() {
        return (
            <div>
                 <div>
                    <Logo />
            
                        { TokenService.hasAuthToken()
                        ? this.renderLogoutLink()
                        : this.renderLoginLink() }
                </div>
             </div>
        )
    }
}


export default Header
