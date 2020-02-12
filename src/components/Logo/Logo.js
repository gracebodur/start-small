import React from 'react'
import Tilt from 'react-tilt'
import logo from '../../img/logo.png'


function Logo() {
    return(
        <div className='Logo'>
            <Tilt className="Tilt" options={{ max : 25 }} style={{ height: 250, width: 250 }}>
                <div className="Tilt-inner">
                    <img style={{paddingTop: '5px'}} alt='logo' src={logo} />
                </div>
            </Tilt>
        </div>
    )
}

export default Logo