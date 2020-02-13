import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import ProjectsContext from './ProjectsContext'
import App from './App';

ReactDOM.render(
    <Router>
        <ProjectsContext.Provider>
            <App />
        </ProjectsContext.Provider>
   </Router>, 
   document.getElementById('root'));

