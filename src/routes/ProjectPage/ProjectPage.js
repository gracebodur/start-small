import React, { Component } from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectContext from '../../contexts/ProjectContext'
import ProjectsApiService from '../../services/projects-api-service'
import { Section } from '../../components/Utils/Utils'
// import { ProjectStarRating } from '../../components/ProjectStarRating/ProjectStarRating'
import ShareButton from '../../components/ShareButton/ShareButton'
// import ProjectReviewForm from '../../components/ProjectReviewForm/ProjectReviewForm'
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
    ProjectsApiService.getById(project_id)
      .then(this.context.setReviews)
      .catch(this.context.setError)
  }

  componentWillUnmount() {
    this.context.clearProject()
  }

  renderProject() {
    const { project } = this.context
    return <>
      <div className='SearchProjectPage__image' style={{backgroundImage: `url(${project.imageurl})`}} />
        <div>
          <h1>{project.schoolname}, {project.city}, {project.state}</h1>
        </div>
        <p>"{project.fulfillmenttrailer}"</p>
        <h3>-{project.teachername}</h3>
        <h4>Accepting donations<a href={project.fundurl} target='_blank' rel="noopener noreferrer">here</a></h4>
        <ShareButton />
        {/* <ProjectReviewForm /> */}
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

export default ProjectPage
