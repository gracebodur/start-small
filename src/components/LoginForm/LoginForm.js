import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import AuthApiService from '../../services/auth-api-service'
import { Section } from '../../components/Utils/Utils'
import './LoginForm.css'

class LoginForm extends Component {
    static defaultProps = {
        onLoginSuccess: () => { }
    }

    constructor ( props ) {
        super( props )
        this.state = {
            user_name: '',
            password: '',
            error: null
        }
    }

    handleSubmitBasicAuth = ev => {
        ev.preventDefault()
        const { user_name, password } = ev.target

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken( user_name.value, password.value )
        )
        user_name.value = ''
        password.value = ''
        this.props.onLoginSuccess()
    }

    handleSubmitJwtAuth = ev => {
        ev.preventDefault()
        this.setState( { error: null } )
        const { user_name, password } = ev.target

        AuthApiService.postLogin( {
            user_name: user_name.value,
            password: password.value,
        } )
            .then( res => {
                user_name.value = ''
                password.value = ''
                TokenService.saveAuthToken( res.authToken )
                this.props.onLoginSuccess()
            } )
            .catch( res => {
                this.setState( { error: res.error } )
            } )
    }

    render () {
        const { error } = this.state
        return (
            <Section className='container'>
                <div className="login-form center_div row">
                    <form onSubmit={this.handleSubmitJwtAuth} className='col-md-12 form-wrapper'>
                        <h2 className='login-header h2'>Login</h2>
                        <div role='alert'>
                            {error && <p className='red'>{error}</p>}
                        </div>
                        <div className="form-group">
                            <label className='h6'>Username</label>
                            <input
                                type="text"
                                className="form-control form-input"
                                id="form-username"
                                name="user_name"
                                placeholder="Type your username"
                                required />
                        </div>
                        <div className="form-group">
                            <label className='h6'>Password</label>
                            <input
                                type="password"
                                className="form-control form-input"
                                id="form-password"
                                name="password"
                                placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                                required />
                        </div>
                        <div className="form-group clearfix">
                            <button type="submit" className="btn float-left">Sign in</button>
                        </div>
                        
                    </form>
                </div>
            </Section>
        )
    }

}

export default LoginForm


