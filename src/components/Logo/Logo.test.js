import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Logo';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Logo Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Router> 
                        <Logo /> 
                    </Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});