import React, { Component } from 'react'
import ProjectContext from '../../contexts/ProjectContext'
import ProjectsApiService from '../../services/projects-api-service'
import { Button, Textarea } from '../Utils/Utils'
import './ProjectReviewForm.css'

export default class ReviewForm extends Component {
  static contextType = ProjectContext

  handleSubmit = ev => {
    ev.preventDefault()
    const { project } = this.context
    const { text, rating } = ev.target

    ProjectsApiService.postReview(project.project_id, text.value, Number(rating.value))
      .then(this.context.addReviews)
      .then(() => {
        text.value = ''
      })
      .catch(this.context.setError)
  }

  render() {
    return (
      <form
        className='ReviewForm'
        onSubmit={this.handleSubmit}
      >
        <div className='text'>
          <Textarea
            className='Text__area'
            required
            aria-label='Type a review...'
            name='text'
            id='text'
            cols='30'
            rows='3'
            placeholder='Type a review..'>
          </Textarea>
        </div>

        <div className='select'>
          <label htmlFor='rating'>How likely will you donate to this project?</label>
          <select
            className='Stars__option'
            required
            aria-label='Rate this project!'
            name='rating'
            id='rating'
          >
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </div>

        <Button type='submit' className='Post__review__btn'>
          Post review
        </Button>
      </form>
    )
  }
}

