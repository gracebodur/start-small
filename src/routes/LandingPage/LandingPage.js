import React, { Component } from 'react'
import ProjectListContext from '../../contexts/ProjectListContext'
import ProjectApiService from '../../services/projects-api-service'
import ProjectListItem from '../../components/ProjectListItem/ProjectListItem'
import { Section } from '../../components/Utils/Utils'
import Intro from '../../components/Intro/Intro'
import './LandingPage.css'

class LandingPage extends Component {
    static contextType = ProjectListContext

    componentDidMount() {
      this.context.clearError()
      ProjectApiService.getAllProjects()
        .then(this.context.setProjectList)
        .catch(this.context.setError)
    }
    
    renderProjects() {
        const { projects = [] } = this.context
        return projects.map(project =>
          <ProjectListItem
            key={project.project_id}
            project={project}
          />
        )
      }

      render() {
        const { error } = this.context
        return (
          <Section list className='LandingPage'>
            <Intro />
            {error
              ? <p className='red'>There was an error, try again</p>
              : this.renderProjects()}
          </Section>
        )
      }
    }
   
export default LandingPage
