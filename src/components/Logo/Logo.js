import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../img/brand_logo.png'
import './Logo.css'

function Logo() {
	return (
		<div className='Logo'>
			<Link to='/'>
				<img className='brand_logo' style={{ maxWidth: '100px', maxHeight: '100px' }} alt='logo' src={logo} />
			</Link>
		</div>
	)
}

export default Logo
