import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectContext from '../../contexts/ProjectContext'
import ProjectsApiService from '../../services/projects-api-service'
import { Section } from '../../components/Utils/Utils'
import { ProjectStarRating } from '../../components/ProjectStarRating/ProjectStarRating'
import ProjectReviewForm from '../../components/ProjectReviewForm/ProjectReviewForm'
import './ProjectPage.css'

class ProjectPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ProjectContext

  componentDidMount() {
    const { project_id } = this.props.match.params
    this.context.clearError()
    ProjectsApiService.getAllProjects(project_id)
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
    const { project, reviews } = this.context
    return <>
      <div className='SearchProjectPage__image' style={{backgroundImage: `url(${project.imageurl})`}} />
      <h3>{project.schoolname}</h3>
      <ProjectContent project={project} />
      <ProjectReviews reviews={reviews} />
      <ProjectReviewForm />
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

function ProjectReviews({ reviews = [] }) {
  return (
    <ul className='ProjectPage__review-list'>
      {reviews.map(review =>
        <li key={review.review_id} className='ProjectPage__review'>
          <p className='ProjectPage__review-text'>
            <FontAwesomeIcon
              size='lg'
              icon='quote-left'
              className='ProjectPage__review-icon blue'
            />
            {review.text}
          </p>
          <p className='ProjectPage__review-user'>
            <ProjectStarRating rating={review.rating} />
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}

export default ProjectPage
