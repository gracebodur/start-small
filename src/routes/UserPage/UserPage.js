import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './UserPage.css'

class UserPage extends Component {
    constructor(props) {
            super(props)
            this.state = {
                isLoggedIn: true
        }
    }

    render() {
        return (
            <div>
                 <nav className='Nav dim underline-hover'>
                    <Link to='/'>
                        <p 
                        onClick={this.props.handleLogoutClick}
                        className='logout-link' 
                        id='logout'>
                        Log out
                        </p>
                    </Link>
                </nav>
            </div>
        )
    }
    
}

           
   


export default UserPage

// class UserPage extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             isLoggedIn: true
//         }
//     }

//     render() {
//         return (
//             <div>
//                  <nav className='Nav dim underline-hover'>
//                     <Link to='/'>
//                         <p onClick={this.props.handleLogoutClick} className='logout-link' id='logout'>Log out</p>
//                     </Link>
//                 </nav>
//             </div>
//         )
//     }
// }
           
   