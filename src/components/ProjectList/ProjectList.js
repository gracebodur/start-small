/* eslint-disable */
import React from 'react'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import './ProjectList.css'

function ProjectList({results}) {
	console.log('list-results', results)
	const projectResults = results.map(project =>
		<ProjectDetails 
				key = {project.id} 
				schoolName = {project.schoolName}
				city = {project.city}
				state = {project.state}
				fundingStatus = {project.fundingStatus}
				fulfillmentTrailer = {project.fulfillmentTrailer}
				teacherName= {project.teacherName}
				imageURL = {project.imageURL}
				fundURL = {project.fundURL}
				/>)
        return (
		    <div className='feature'>
				{projectResults}
		    </div>
        )
    }


export default ProjectList


