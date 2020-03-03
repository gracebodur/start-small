import React from 'react';
import ReactDOM from 'react-dom';
import ContactButton from './ContactButton';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Contact Button Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Router> 
                        <ContactButton /> 
                    </Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});