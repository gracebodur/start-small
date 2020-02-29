import React, { Component } from 'react'

const ProjectContext = React.createContext({
  project: [],
  reviews: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setProject: () => {},
  clearProject: () => {},
  setReviews: () => {},
  addReviews: () => {},
})

export default ProjectContext

export class ProjectProvider extends Component {
  state = {
    project: [],
    error: null,
  };

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  setProject = project => {
    this.setState({ project })
  }

  setReviews = reviews => {
    this.setState({ reviews })
  }

  clearProject = () => {
    this.setProject([])
    this.setReviews([])
  }

  addReview = review => {
    this.setReviews([
      ...this.state.reviews,
      review
    ])
  }

  render() {
    const value = {
      project: this.state.project,
      reviews: this.state.reviews,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProject: this.setProject,
      setReviews: this.setReviews,
      clearProject: this.clearProject,
      addReview: this.addReview,
    }
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}
