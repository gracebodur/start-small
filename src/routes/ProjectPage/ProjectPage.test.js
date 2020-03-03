import React from 'react';
import ReactDOM from 'react-dom';
import ProjectPage from './ProjectPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Project Page Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Router> 
                        <ProjectPage /> 
                    </Router>, div);
      ReactDOM.unmountComponentAtNode(div);
    });
});