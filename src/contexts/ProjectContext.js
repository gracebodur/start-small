import React, { Component } from 'react'

// export const nullThing = {
//   author: {},
//   tags: [],
// }

const ProjectContext = React.createContext({
  project: [],
  stars: [],
  error: null,
  setError: () => {},
  clearError: () => { },
  setProject: () => {},
  clearProject: () => {},
  setStars: () => {},
  addStar: () => {},
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

  setStars = stars => {
    this.setState({ stars })
  }

  clearProject = () => {
    this.setProject([])
    this.setStars([])
  }

  addStar = star => {
    this.setStars([
      ...this.state.stars,
      star
    ])
  }

  render() {
    const value = {
      project: this.state.project,
      stars: this.state.stars,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProject: this.setProject,
      setStars: this.setStars,
      clearProject: this.clearProject,
      addStar: this.addStar,
    }
    return (
      <ProjectContext.Provider value={value}>
        {this.props.children}
      </ProjectContext.Provider>
    )
  }
}
