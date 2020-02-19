import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";
import './index.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

import App from './App';

library.add(fab, fas)


ReactDOM.render(
        <Router>
            <App />
        </Router>,
   document.getElementById('root'));

