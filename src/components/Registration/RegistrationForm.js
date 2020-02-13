import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import './RegistrationForm.css'

class RegistrationForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            full_name: '',
            user_name: '',
            password: ''
        }
    }

    handleInputChange = (e) => {
        this.setState({
            full_name: e.target.value,
            user_name: e.target.value,
            password: e.target.value
        });
      }

    handleSubmit = (e) => {
        e.preventDefault()
        // alert('Successfully logged in')
    }

    handleClick = () => {

    }

    render() {
        return(
            <main className='Register-main center'>
            <form 
                onSubmit={this.handleSubmit}
                className= 'Register-form center'>
                <fieldset className='Register-fieldset'>
                    <legend 
                        className='Register-legend center'>
                        Register
                    </legend>
                    <div className="Register-full_name">
                    <label 
                        className="Fullname-label" 
                        htmlFor="register-fullname">
                        Full Name
                    </label>
                    <input
                        id="register-fullname" 
                        className="Fullname-input" 
                        type="text"
                        value={this.state.full_name}
                        onChange={this.handleInputChange} 
                        name="full_name"
                        placeholder="Enter full name" />
                    </div>
                    <div className="Register-new_user_name">
                    <label 
                        className="New-user_name-label" 
                        htmlFor="register-new_user_name">
                        User Name
                    </label>
                    <input
                        id="register-new_user_name" 
                        className="New-user_name-input" 
                        type="text" 
                        name="user_name"
                        value={this.state.user_name}
                        onChange={this.handleInputChange} 
                        placeholder="Enter user name" />
                    </div>
                    <div className="Register-password">
                    <label 
                        className='Password-label' 
                        htmlFor="Register-password">
                        Password
                    </label>
                    <input
                        id="register-password"
                        className='Password-input' 
                        type="password" 
                        name="password" 
                        value={this.state.password}
                        onChange={this.handleInputChange} 
                        placeholder="Enter Password" />
                    </div>
                    <div className="Register-button center">
                    {/* <Link to='/users-page'> */}
                        <button
                        className="Register-button-input" 
                        type="submit">Register</button>
                    {/* </Link> */}
                    </div>
                    <div className="Cancel-button center">
                    <Link to='/search-page'>
                        <button
                        className="Register-cancel-button-input" 
                        type="submit">Cancel</button>
                    </Link>
                    </div>
              </fieldset>
            </form>
            </main>
        )
    }
}
       

export default RegistrationForm