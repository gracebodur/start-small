import React, {Component} from 'react'
import { Link} from 'react-router-dom'
import './RegistrationForm.css'

class RegistrationForm extends Component {
    static defaultProps = {
        onRegistrationSuccess: () => {}
    }

    constructor(props) {
        super(props)
        this.state = {
            full_name: '',
            user_name: '',
            password: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
      }

    handleSubmit = (e) => {
        e.preventDefault()
        const {full_name, user_name, password} = e.target

        // console.log('Registeres successfully')
        // console.log(full_name.value, user_name.value, password.value)
        
        full_name.value = ''
        user_name.value = ''
        password.value = ''
        this.props.onRegistrationSuccess()
    }

    validateFullName() {
        const fullName = this.state.full_name.value.trim();
        if (fullName.length === 0) {
          return "Full name is required";
        } else if (fullName.length < 3) {
          return "Name must be at least 3 characters long";
        }
      }

      validateUserName() {
        const userName = this.state.user_name.value.trim();
        if (userName.length === 0) {
          return "Full name is required";
        } else if (userName.length < 3) {
          return "User name must be at least 3 characters long";
        }
      }
    
      validatePassword() {
        const password = this.state.password.value.trim();
        if (password.length === 0) {
          return "Password is required";
        } else if (password.length < 6 || password.length > 72) {
          return "Password must be between 6 and 72 characters long";
        } else if (!password.match(/[0-9]/)) {
          return "Password must contain at least one number";
        }
      }


    render() {
        // const fullNameError = this.validateFullName();
        // const userNameError = this.validateUserName();
        // const passwordError = this.validatePassword();
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
                        onChange={this.handleChange} 
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
                        onChange={this.handleChange} 
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
                        onChange={this.handleChange} 
                        placeholder="Enter password" />
                    </div>
                    <div className="Register-button center">
                    <button
                        className="Register-button-input" 
                        type="submit">
                        Register
                    </button>
                    </div>
                    <div className="Cancel-button center">
                        <Link to='/search'>
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