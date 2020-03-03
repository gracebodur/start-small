import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './LandingPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Landing Page Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Router> 
                        <LandingPage /> 
                    </Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});