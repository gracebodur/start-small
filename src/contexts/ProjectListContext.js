import React, { Component } from 'react'

const ProjectListContext = React.createContext({
  projects: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setProjectList: () => {},
})
export default ProjectListContext

export class ProjectListProvider extends Component {
  state = {
    projects: [],
    error: null,
  };

  setProjectList = projects => {
    this.setState({ projects })
  }

  setError = error => {
    console.error(error)
    this.setState({ error })
  }

  clearError = () => {
    this.setState({ error: null })
  }

  render() {
    const value = {
      projects: this.state.projects,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProjectList: this.setProjectList,
    }
    return (
      <ProjectListContext.Provider value={value}>
        {this.props.children}
      </ProjectListContext.Provider>
    )
  }
}