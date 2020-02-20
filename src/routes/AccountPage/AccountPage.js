import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './AccountPage.css'

class AccountPage extends Component {
    constructor(props) {
            super(props)
            this.state = {
              userData: {}
        }
    }

    componentDidMount() {
        fetch('api/me')
        .then(resp => resp.json())
        .then(data => {
            this.setState({userData: data})
        })
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
                    {/* Reuse ProjectList? */}
                    <ProjectList projects={favoritedProjects}/>
                </nav>
            </div>
        )
    }
    
}

           
   


export default AccountPage

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
           
   