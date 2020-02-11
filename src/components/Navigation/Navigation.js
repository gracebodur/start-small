import React, { Component } from 'react'
import './Navigation.css'

class Navigation extends Component {
    render() {
        return (
            <nav>
                <p className='f3 link dim black underline pa3 pointer'>Register</p>
                <p className='f3 link dim black underline pa3 pointer'>Log in</p>
            </nav>

        )
    }
}

export default Navigation