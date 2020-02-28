import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectContext from '../../contexts/ProjectContext'
import ProjectsApiService from '../../services/projects-api-service'
import SearchField from '../../components/SearchField/SearchField'
import { Section } from '../../components/Utils/Utils'
// import { ProjectStarRating } from '../../components/ProjectStarRating/ProjectStarRating'
import './ProjectPage.css'

class ProjectPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ProjectContext

  componentDidMount() {
    const { project_id } = this.props.match.params
    this.context.clearError()
    ProjectsApiService.getById(project_id)
      .then(this.context.setProject)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearProject()
  }

  renderProject() {
    const { project } = this.context
    return <>
      <SearchField />
      <div className='SearchProjectPage__image' style={{backgroundImage: `url(${project.imageurl})`}} />
      <h3>{project.schoolname}</h3>
      <ProjectContent project={project} />
    </>
  }

  render() {
    const { error, project } = this.context
    let content
    if (error) {
      content = (error.error === `Project doesn't exist`)
        ? <p className='red'>Project not found</p>
        : <p className='red'>There was an error</p>
    } else if (!project.project_id) {
      content = <div className='loading' />
    } else {
      content = this.renderProject()
    }
    return (
      <Section className='ProjectPage'>
        {content}
      </Section>
    )
  }
}

function ProjectContent({ project }) {
  return (
    <p className='SearchProjectPage__content'>
      {project.content}
    </p>
  )
}

// function ProjectStars({ stars = [] }) {
//   return (
//     <ul className='SearchProjectPage__star-list'>
//       {stars.map(star =>
//         <li key={star.id} className='SearchProjectPage__star'>
//           <p className='SearchProjectPage__star-text'>
//             <FontAwesomeIcon
//               size='lg'
//               icon='quote-left'
//               className='SearchProjectPage__star-icon blue'
//             />
//             {star.text}
//           </p>
//           <p className='SearchProjectPage__star-user'>
//             <ProjectStarRating rating={star.rating} />
//             {star.user.full_name}
//           </p>
//         </li>
//       )}
//     </ul>
//   )
// }

export default ProjectPage
