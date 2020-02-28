import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { ProjectStarRating } from '../ProjectStarRating/ProjectStarRating'
import './ProjectListItem.css'

export default class ProjectListItem extends Component { 
  render() {
    const { project } = this.props

    return (
      <Link to='/login' className='ProjectListItem'>
      {/* <Link to={`/projects/${project.project_id}`} className='ProjectListItem'> */}
        <div className='ProjectListItem__image' style={{backgroundImage: `url(${project.imageurl})`}} />

        <div className='ProjectListItem__details'>
          <div className='ProjectListItem__text'>
            <h3 className='ProjectListItem__heading'>{project.schoolname}</h3>
            <p className='ProjectListItem__description'>{project.fulfillmenttrailer}</p>
            <p>&#8212;{project.teachername}</p>
          </div>
      
          <div className='ProjectListItem__stars'>
            <ProjectStarRating rating={project.average_stars_rating} />
            <span id='ProjectListItem__stars-count'>{readableStarsCount(project.number_of_stars)}</span>
          </div>
        </div>
      </Link>
    )
  }
}

function readableStarsCount(number) {
  switch(number) {
    case 0:
      return 'no stars yet'

    case 1:
      return `based on likeliness to donate 1 star`

    default:
      return `based on likeliness to donate ${number} stars`
  }
}
