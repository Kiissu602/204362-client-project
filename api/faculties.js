import axios from './axios'

export function getFaculty() {
  return axios.instance.get('/api/faculties')
}

export function getDepart(id) {
  return axios.instance.get(`/api/faculties/${id}`)
}
