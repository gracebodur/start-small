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
            password: '',
            errors: []
        }
    }

    onFullNameChange = (e) => {
      this.setState({
        full_name: e.target.value
      })
      this.clearValidationErr('full_name')
    }

    onUserNameChange =(e) => {
      this.setState({
        user_name:e.target.value
      })
      this.clearValidationErr('user_name')
    }

    onPasswordChange = (e) => {
      this.setState({
        password:e.target.value
      })
      this.clearValidationErr('password')
    }

    showValidationErr = (elm, msg) => {
      this.setState((prevState, ) => ({ errors: [...prevState.errors, { elm,msg }] } ))
    }

    clearValidationErr = (elm) => {
      this.setState((prevState)=> {
        let newArr = [];
        for(let err of prevState.errors) {
          if(elm !== err.elm) {
            newArr.push(err)
          }
        }
        return {errors: newArr}
      })
    }

    submitRegister = (e) => {
      console.log(this.state)

      if (this.state.full_name === "") {
        this.showValidationErr('full_name', "Please type in your full name");
      } 
      if (this.state.user_name === "") {
        return this.showValidationErr('user_name', "Please type in your user name");
      }
      if(this.state.password === "") {
        return this.showValidationErr('password', "Password Can not be empty");
      }
    }
    
    render() {
        let fullNameError = null, userNameError = null, passwordError = null;

        for(let err of this.state.errors) {
          if(err.elm === 'full_name') {
          fullNameError = err.msg;
        } if(err.elm === 'user_name') {
          userNameError = err.msg;
        } if(err.elm === 'password') {
          passwordError = err.msg;
        }
      }
      
        return(
            <main className='Register-main center'>
            <form 
                onSubmit={this.submitRegister}
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
                        onChange={this.onFullNameChange} 
                        name="full_name"
                        placeholder="Enter full name" 
                      />
                      <small className='R-error'>{fullNameError ? fullNameError : ''}</small>
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
                        onChange={this.onUserNameChange} 
                        placeholder="Enter user name" 
                      />
                      <small className='R-error'>{userNameError ? userNameError : ''}</small>
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
                        onChange={this.onPasswordChange} 
                        placeholder="Enter password"
                    />
                    <small className='R-error'>{passwordError ? passwordError : ''}</small>
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

