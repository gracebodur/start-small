import React from 'react'

const ProjectsContext = React.createContext({
    projects: [],
    addProjects: () => {},
    deleteProjects: () => {},
    updateProjects: () => {},
    results: [],
    
})

export default ProjectsContext