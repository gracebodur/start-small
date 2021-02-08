import React, { Component } from 'react'
import ProjectContext from '../../contexts/ProjectContext'
import ProjectsApiService from '../../services/projects-api-service'
import { Section } from '../../components/Utils/Utils'
import { ProjectStarRating } from '../../components/ProjectStarRating/ProjectStarRating'
import ShareButton from '../../components/ShareButton/ShareButton'
import ProjectReviewForm from '../../components/ProjectReviewForm/ProjectReviewForm'
import donorsLogo from '../../img/donors-logo.png'
import { Scrollbars } from 'rc-scrollbars'
import './ProjectPage.css'

class ProjectPage extends Component {
	static defaultProps = {
		match: { params: {} },
	}

	static contextType = ProjectContext

	componentDidMount() {
		const { project_id } = this.props.match.params
		this.context.clearError()
		ProjectsApiService.getById(project_id).then(this.context.setProject).catch(this.context.setError)
		ProjectsApiService.getProjectReviews(project_id)
			.then(this.context.setReviews)
			.catch(this.context.setError)
	}

	componentWillUnmount() {
		this.context.clearProject()
	}

	renderProject() {
		const { project, reviews } = this.context
		return (
			<Section>
				<div className='container py-3 project-wrapper'>
					<div className='card'>
						<div className='row '>
							<div className='col-md-4'>
								<img src={project.imageurl} className='fadeIn card-img' alt='project description' />
							</div>
							<div className='col-md-8 px-3'>
								<div className='card-block px-3'>
									<h1 className='card-title'>{project.schoolname}</h1>
									<h3 className='card-text'>"{project.fulfillmenttrailer}"</h3>
									<h3 className='card-text'>-{project.teachername}</h3>
									<div className='m-3'></div>
									<a href={project.fundurl} target='_blank' rel='noopener noreferrer'>
										<img
											className='donors__logo mr-3'
											alt='donation website'
											src={donorsLogo}
											style={{ width: '15%' }}
										/>
									</a>
									<ShareButton />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='container'>
					<div className='row'>
						<div className='col-sm-6'>
							<ProjectReviews reviews={reviews} />
						</div>
						<div className='col-sm-6'>
							<ProjectReviewForm />
						</div>
					</div>
				</div>
			</Section>
		)
	}

	render() {
		const { error, project } = this.context
		let content
		if (error) {
			content =
				error.error === `Project doesn't exist` ? (
					<p className='red text-center'>Project not found</p>
				) : (
					<p className='red text-center'>There was an error</p>
				)
		} else if (!project.project_id) {
			content = <div className='loading' />
		} else {
			content = this.renderProject()
		}
		return <Section className='ProjectPage'>{content}</Section>
	}
}

function ProjectReviews({ reviews = [] }) {
	return (
		<Section>
			<div className='text-center'>
				<h1 className='h1 review-title'>Reviews:</h1>
			</div>
					<Scrollbars style={{ height: 400 }}>
						<ul className='list-group'>
							{reviews.map((review) => (
								<li className='list-group-item text-center' key={review.review_id}>
									<h3>"{review.text}"</h3>
									<h5>- {review.user.full_name}</h5>
									<ProjectStarRating rating={review.rating} />
								</li>
							))}
						</ul>
					</Scrollbars>
		</Section>
	)
}

export default ProjectPage
