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















// describe('Project List Item Component', () => {
//   const props = {
//     project_id: 1,
//     imageurl: 'https://www.donorschoose.org/teacher/photo/u494975?size=sm&t=1552922759357',
//     schoolname: 'George Fisher Elem School',
//     fulfillmenttrailer: 'Help me give my students reading intervention materials to support my students in mastering reading skills',
//     teachername: 'Mrs. Freeman'
//   };

//   it('renders Project List Item by default', () => {
//       const wrapper = shallow(<ProjectListItem {...props}/>)
//       expect(toJson(wrapper)).toMatchSnapshot()
//   })

//   it('renders Project List Item given props', () => {
//       const wrapper = shallow(<ProjectListItem />)
//       expect(toJson(wrapper)).toMatchSnapshot()
//   });
// });
