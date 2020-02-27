import config from '../config'
import TokenService from '../services/token-service'

const ProjectsApiService = {
  getProjects() {
    return fetch(`${config.API_ENDPOINT}/projects`, {
      // headers: {
      //   'authorization': `basic ${TokenService.getAuthToken()}`,
      // },
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getById(project_id) {
    return fetch(`${config.API_ENDPOINT}/projects/${project_id}`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  },
  getBysearch(project_id) {
    return fetch(`${config.API_ENDPOINT}/projects/${project_id}/favorites`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
  }
}

export default ProjectsApiService