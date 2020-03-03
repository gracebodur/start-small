import React from 'react';
import ReactDOM from 'react-dom';
import ProjectReviewForm from './ProjectReviewForm';

describe('Project Review Form Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render( <ProjectReviewForm /> , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});