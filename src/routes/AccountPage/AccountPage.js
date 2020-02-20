import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import ProjectDetails from '../../components/ProjectDetails/ProjectDetails'
import './AccountPage.css'

class AccountPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userData: {
                user_name: '',
                password: ''
            }
    }
}

    componentDidMount() {
        fetch('./data.json')
          .then(res => res.json())
          .then(data => {
            const newData = data.map(item => {
                return item
            })
            this.setState({
                userData : newData
          })
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
                    <ProjectDetails />
                </nav>
            </div>
        )
    }
    
}

           
export default AccountPage

   