import React, {Component} from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

class LoginPage extends Component {
    static defaultProps = {
        location: {},
        history: {
          push: () => {},
        },
    }

    handleLoginSuccess = () => {
        const { location, history } = this.props
        const destination = (location.state || {}).from || '/user'
        console.log('login', destination)
        history.push(destination)
    }

    render() {
        return (
          <section className='LoginPage'>
            <LoginForm
              onLoginSuccess={this.handleLoginSuccess}
            />
          </section>
        )
      }

}

export default LoginPage