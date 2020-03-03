import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Log in Form Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Router> 
                        <LoginForm /> 
                    </Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});