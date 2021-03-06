import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { ProjectListProvider } from './contexts/ProjectListContext'
import { ProjectProvider } from './contexts/ProjectContext'
import './index.css';

import App from './App';

import { faStar as farStar } from '@fortawesome/free-regular-svg-icons'
import { 
  faBookOpen,
  faComment,
  faGlobeAmericas,
  faListOl,
  faListUl,
  faPenAlt,
  faQuoteLeft,
  faStar as fasStar } from '@fortawesome/free-solid-svg-icons'

  library.add(
    faListUl, 
    faListOl, 
    faGlobeAmericas,
    faPenAlt,
    faBookOpen, 
    faComment,
    faQuoteLeft,
    farStar,
    fasStar,
  )

ReactDOM.render(
        <Router>
            <ProjectListProvider>
              <ProjectProvider>
                <App />
              </ProjectProvider>
            </ProjectListProvider>
        </Router>,
   document.getElementById('root'));

