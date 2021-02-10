import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom'
import Logo from '../Logo/Logo'
import './Header.css'

class Header extends Component {
	state = { isLoggedIn: false }

	handleLogOutClick = () => {
		TokenService.clearAuthToken()
	}

	renderLogoutLink() {
		return (
			<Link onClick={this.handleLogOutClick} to='/' className='link4'>
				Log out
			</Link>
		)
	}

	renderLoginLink() {
		return (
			<div className='Header__not-logged-in nav-item'>
				<Link to='/login' className='nav-link link1'>
					Login
				</Link>

				<Link to='/register' className='nav-link link2'>
					Register
				</Link>

				<a
					className ='nav-link link3'
					href='mailto:startsmall.contact@gmail.com'
					target='_blank'
					rel='noopener noreferrer'>
					Contact Us
				</a>
			</div>
		)
	}

	render() {
		return (
			<nav className='Header'>
				<Logo />
				{TokenService.hasAuthToken() ? this.renderLogoutLink() : this.renderLoginLink()}
			</nav>
		)
	}
}

export default Header
