import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import { ProjectStarRating } from '../ProjectStarRating/ProjectStarRating'
import './ProjectListItem.css'

export default class ProjectListItem extends Component { 
  render() {
    const { project } = this.props
    // console.log(this.props)

    return (
      <Link to={`/projects/${project.project_id}`} className='ProjectListItem'>
        <div className='ProjectListItem__image' style={{backgroundImage: `url(${project.imageurl})`}} />

        <div className='ProjectListItem__details'>
          <div className='ProjectListItem__text'>
            <h3 className='ProjectListItem__heading'>{project.schoolname}</h3>
            <p className='ProjectListItem__description'>{project.fulfillmenttrailer}</p>
            <p>&#8212;{project.teachername}</p>
          </div>
      
          {/* <div className='ProjectListItem__reviews'>
            <ProjectStarRating rating={project.average_review_rating} />
            <span id='ProjectListItem__review-count'>{readableReviewCount(project.number_of_reviews)}</span>
          </div> */}
        </div>
      </Link>
    )
  }
}

// function readableReviewCount(number) {
//   switch(number) {
//     case 0:
//       return 'how likely are you to donate?'

//     case 1:
//       return `how likely are you to donate?`

//     default:
//       return `based on likeliness to donate ${number}`
//   }
// }

