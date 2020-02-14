/* eslint-disable */
import React, {Component} from 'react'
import ProjectItems from '../ProjectItems/ProjectItems'
import projectsData from '../../dummyProjectsList'
import './ProjectList.css'

function ProjectList() {
	const projectResults = projectsData.map(project => 
			<ProjectItems 
				key = {project.id} 
				schoolName = {project.schoolName}
				city = {project.city}
				state = {project.state}
				fundingStatus = {project.fundingStatus}
				fulfillmentTrailer = {project.fulfillmentTrailer}
				teacherName= {project.teacherName}
				imageURL = {project.imageURL}
				fundURL = {project.fundURL}/>)

        return (
		    <div className='feature'>
				{projectResults}
		    </div>
        )
    }


export default ProjectList