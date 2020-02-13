import React from 'react'

const ProjectsContext = React.createContext({
    projects: [],
    addProjects: () => {},
    deleteProjects: () => {},
    updateProjects: () => {}
})


export default ProjectsContext