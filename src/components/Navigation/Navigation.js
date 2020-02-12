import React from 'react'
import './Navigation.css'

function Navigation({onRouteChange, isLoggedIn}) {
    if (isLoggedIn) {
        return(
            <nav>
                <p onClick={() => onRouteChange('logout')} className='Logout-link dim underline-hover' id='logout'>Log out</p>
            </nav>
            )
        } else {
            return (
                <nav>
                    <p onClick={() => onRouteChange('register')} className='Register-link dim underline-hover' id='register'>Register</p>
                    <p onClick={() => onRouteChange('login')} className='Login-link dim underline-hover' id='login'>Log in</p>
                </nav>
                )
            }
        }


export default Navigation