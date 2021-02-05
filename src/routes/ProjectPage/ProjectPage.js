import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ProjectContext from '../../contexts/ProjectContext'
import ProjectsApiService from '../../services/projects-api-service'
import { Hyph, Section } from '../../components/Utils/Utils'
import { ProjectStarRating } from '../../components/ProjectStarRating/ProjectStarRating'
import FbShareButton from '../../components/FbShareButton/FbShareButton'
import ProjectReviewForm from '../../components/ProjectReviewForm/ProjectReviewForm'
import donorsLogo from '../../img/donors-logo.png'
import './ProjectPage.css'

class ProjectPage extends Component {
  static defaultProps = {
    match: { params: {} },
  }

  static contextType = ProjectContext

  componentDidMount () {
    const { project_id } = this.props.match.params
    this.context.clearError()
    ProjectsApiService.getById( project_id )
      .then( this.context.setProject )
      .catch( this.context.setError )
    ProjectsApiService.getProjectReviews( project_id )
      .then( this.context.setReviews )
      .catch( this.context.setError )
  }

  componentWillUnmount () {
    this.context.clearProject()
  }

  renderProject () {
    const { project, reviews } = this.context
    return <Section>
      <div className="container py-3">
        <div className="card">  
        <div className="row ">
          <div className="col-md-4">
            <img src={project.imageurl} className="fadeIn card-img" alt='project description' />
          </div>
           <div className="col-md-8 px-3">
           <div className="card-block px-3">
            <h1 className="card-title">{project.schoolname}</h1>
            <h3 className='card-text'>"{project.fulfillmenttrailer}"</h3>
            <h3 className='card-text'>-{project.teachername}</h3>
            <div className='m-3'></div>
            <a href={project.fundurl} target='_blank' rel="noopener noreferrer">
                <img className='donors__logo mr-3' alt='donation website' src={donorsLogo}  style={{ width: '15%' }} />
              </a>
              <FbShareButton />
            </div>
          </div>
          </div>
        </div>
      </div>
      <ProjectReviews reviews={reviews} />
      <ProjectReviewForm />
    </Section>
  }

  render () {
    const { error, project } = this.context
    let content
    if ( error )
    {
      content = ( error.error === `Project doesn't exist` )
        ? <p className='red'>Project not found</p>
        : <p className='red'>There was an error</p>
    } else if ( !project.project_id )
    {
      content = <div className='loading' />
    } else
    {
      content = this.renderProject()
    }
    return (
      <Section className='ProjectPage'>
        {content}
      </Section>
    )
  }
}


function ProjectReviews ( { reviews = [] } ) {
  return (
    <ul className='ProjectPage__review-list'>
      {reviews.map( review =>
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
            <Hyph />
            {review.user.full_name}
          </p>
        </li>
      )}
    </ul>
  )
}

export default ProjectPage
