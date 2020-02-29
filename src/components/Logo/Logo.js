import React from 'react'
import {Link} from 'react-router-dom'
import Tilt from 'react-tilt'
import logo from '../../img/logo_file.png'
import './Logo.css'


function Logo() {
    return(
        <div className='Logo'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 100, width: 100 }}>
                <Link to='/' className="Tilt-inner">
                    <img style={{paddingTop: '5px'}} alt='logo' src={logo} />
                </Link>
            </Tilt>
        </div>
    )
}

export default Logo