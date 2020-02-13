import React from 'react'
import Navigation from '../Navigation/Navigation'
import Logo from '../Logo/Logo'
import './header.css'

function Header({onRouteChange}) {
    return (
        <div>
            <Navigation onRouteChange={onRouteChange}/>
            <Logo />
        </div>
    )
}

export default Header