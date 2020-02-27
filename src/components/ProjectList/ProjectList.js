/* eslint-disable */
import React from 'react'
import ProjectDetails from '../ProjectDetails/ProjectDetails'
import './ProjectList.css'

function ProjectList({results}) {
	console.log('list-results', results)
	const projectResults = results.map(project =>
		<ProjectDetails 
				key = {project.project_id} 
				schoolName = {project.schoolname}
				city = {project.city}
				state = {project.state}
				fulfillmentTrailer = {project.fulfillmenttrailer}
				teacherName= {project.teachername}
				imageURL = {project.imageurl}
				fundURL = {project.fundurl}
				/>)
        return (
		    <div className='feature'>
				{projectResults}
		    </div>
        )
    }


export default ProjectList


