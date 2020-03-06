import React from 'react';
import renderer from "react-test-renderer";
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import ProjectListItem from './ProjectListItem';

describe('Project List Item Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement("div");
    ReactDOM.render(<Router>
      <ProjectListItem project={[]} />
      </Router>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it('renders the UI as expected', () => {
    const tree = renderer
    .create(<Router><ProjectListItem project={[]} /></Router>)
    .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
