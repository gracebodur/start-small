import React from 'react';
import ReactDOM from 'react-dom';
import ShareButton from './ShareButton';

describe('Share Button Component', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render( <ShareButton /> , div);
      ReactDOM.unmountComponentAtNode(div);
    });
});