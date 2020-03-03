import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Log in Page Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Router> 
                        <LoginPage /> 
                    </Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});