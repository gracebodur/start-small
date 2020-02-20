import React, {Component} from 'react'
import {Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: false,
            isLoggedOut: false
        }
    }

    componentDidMount() {
        // determine if logged in
        this.setState({isLoggedIn: true})
    }
    handleLoginClick() {
    this.setState({isLoggedIn: true});
  }

  handleLogoutClick() {
    this.setState({isLoggedOut: true});
  }

    render() {
        const isLoggedOut = this.props.isLoggedOut
        let link;

        if(isLoggedOut) {
            link =  
                <div>
                    <nav className='Nav dim underline-hover'>
                        <Link to='/'>
                            <p 
                            onClick={this.props.handleLogoutClick} 
                            isLoggedIn={this.props.isLoggedIn} 
                            className='logout-link' 
                            id='logout'>
                            Log out
                            </p>
                        </Link>
                    </nav>
                </div>
        } else {
            link = 
                    <nav className='Nav dim underline-hover'>
                        {!this.state.isLoggedIn && (
                            <>
                            <Link to='/register'>
                                <p className='register-link' id='register'>Register</p>
                            </Link>

                            <Link to='/login'>
                                <p onClick={this.props.handleLoginClick} className='login-link' id='login'>Log in</p>
                            </Link> 
                            </>
                            )
                        }
                        {this.state.isLoggedIn && (
                            <Link to='/login'>
                                <p onClick={this.props.handleLogoutClick} className='login-link' id='login'>Log Out</p>
                            </Link> 
                            )
                        }
                    </nav> }
        return(
             <div>
                 <Logo />
                 {link}
             </div>
        )
    }
}

export default Header
    