import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ProjectItems from '../../components/ProjectItems/ProjectItems'
import './UserPage.css'

class UserPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedOut: false
        }
    }

    handleLogOutClick = () => {
        this.setState({
            isLoggedOut: true
        })
    }

    render() {
        const isLoggedOut = this.state.isLoggedOut;
        return(
            <div>
            {isLoggedOut ? (
                 <nav className='Nav dim underline-hover'>
                    <Link to='/'>
                        <p onClick={this.handleLogoutClick} className='logout-link' id='logout'>Log out</p>
                    </Link>
                </nav> ) : (
                <section>
                    <ProjectItems />
                </section>
             )}
            </div>
            )
        }
    }

export default UserPage