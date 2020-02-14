import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import SearchForm from '../../components/SearchForm/SearchForm'
import ProjectList from '../../components/ProjectList/ProjectList'

class UsersPage extends Component {
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
                    <SearchForm />
                    <ProjectList />
                </section>
             )}
            </div>
            )
        }
    }

export default UsersPage